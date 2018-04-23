Object.defineProperty(exports, "__esModule", { value: true });
const ynab = require("../../dist/index.js");
const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);
const bulkTransactions = {
    transactions: [
        {
            account_id: "fc863acf-9e34-4908-9e86-c94b93b2296a",
            date: ynab.utils.getCurrentDateInISOFormat(),
            amount: -50000,
            memo: "Refund for Kitchen Supplies"
        },
        {
            account_id: "fc863acf-9e34-4908-9e86-c94b93b2296a",
            category_id: "75655c30-ab05-4533-ae4b-8d958e02e73c",
            payee_id: "c8aaf97d-eca5-4d5e-a583-e4043758f953",
            cleared: ynab.SaveTransaction.ClearedEnum.Cleared,
            approved: true,
            date: ynab.utils.getCurrentDateInISOFormat(),
            amount: -23430,
            memo: "Dry Cleaning"
        },
        {
            account_id: "fc863acf-9e34-4908-9e86-c94b93b2296a",
            category_id: "3e0de9e2-b2eb-462d-bc71-a77a864d2d3b",
            date: ynab.utils.getCurrentDateInISOFormat(),
            amount: 1000000,
            memo: "Income"
        }
    ]
};
ynabAPI.transactions
    .bulkCreateTransactions("26e3d088-8004-4785-9059-fd609b2f4642", bulkTransactions)
    .catch(e => {
    console.log(`ERROR: ${JSON.stringify(e)}`);
});
