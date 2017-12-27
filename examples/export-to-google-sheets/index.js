const YNAB = require("ynab");
const google = require("googleapis");
const authorize = require("./auth");
const secrets = require("./secrets.json");

// Your YNAB Budget ID
const BUDGET_ID = "[BUDGET_ID HERE]";
// Your Google Sheet ID
const SPREADSHEET_ID = "[SPREADSHEET_ID HERE]";
// Which sheet and cell to append to
const RANGE = "Sheet!A1";

// Initialize the YNAB API
const ynab = new YNAB(secrets.ynab);

// Our main entry point to this script
// Gathers transactions from YNAB and appends them to a Google Sheet
function main(auth) {
    const sheets = google.sheets("v4");
    getTransactions().then(function (values) {
        sheets.spreadsheets.values.append(
            {
                auth: auth,
                spreadsheetId: SPREADSHEET_ID,
                valueInputOption: "USER_ENTERED",
                resource: { values: values },
                range: RANGE
            },
            function(err, response) {
                if (err) {
                    console.log("The API returned an error: " + err);
                    return;
                }
                console.log(response.updatedCells + " cells updated.");
            }
        );
    });
}

// Authorize with Google and then run the "main" function
authorize(secrets, main);

// Gets transactions from YNAB and then transforms them into cell data
function getTransactions() {
    return Promise.all([
        ynab.categories.getCategories(BUDGET_ID),
        ynab.accounts.getAccounts(BUDGET_ID),
        ynab.payees.getPayees(BUDGET_ID),
        ynab.transactions.getTransactions(BUDGET_ID)
    ]).then(function (results) {
        const category_groups = results[0].data.category_groups;
        const accounts = results[1].data.accounts;
        const payees = results[2].data.payees;
        const transactions = results[3].data.transactions;

        // Build maps of categories, accounts and payees to more easily map
        // the ids when iterating the transactions

        const categoriesMap = {};
        category_groups.forEach(function (group) {
            group.categories.forEach(function (sub) {
                categoriesMap[sub.id] = {
                    id: sub.id,
                    name: group.name + ": " + sub.name,
                    hidden: sub.hidden
                };
            });
        });

        const accountsMap = {};
        accounts.forEach(function (account) {
            accountsMap[account.id] = account;
        });

        const payeesMap = {};
        payees.forEach(function (payee) {
            payeesMap[payee.id] = payee;
        });

        const result = transactions.map(function (transaction) {
            const account = accountsMap[transaction.account_id];
            const payee = payeesMap[transaction.payee_id];
            const category = categoriesMap[transaction.category_id];
            return [
                transaction.date,
                ynab.utils.convertMilliUnitsToCurrencyAmount(transaction.amount, 2),
                account ? account.name : "",
                payee ? payee.name : "",
                category ? category.name : "",
                transaction.memo
            ];
        });
        result.unshift(["date", "amount", "account", "payee", "category", "memo"]);
        return result;
    });
}
