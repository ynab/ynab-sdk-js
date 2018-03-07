Object.defineProperty(exports, "__esModule", { value: true });
const ynab = require("../../dist/index.js");
const yargs = require("yargs");
const argv = yargs
    .env("YNAB_API")
    .option("accessToken", { alias: "access_token" }).argv;
// You can get your API key from the My Account section of YNAB
if (!argv.accessToken) {
    console.warn(`
'access_token' argument is required!  You can pass it in one of the following ways:
  --access_token=123 CLI argument
  YNAB_API_ACCESS_TOKEN environment variable
`);
    process.exit(1);
}
const budgetId = "f968197b-2863-473a-8974-c2406dbe7f0d";
const transactionId = "8fdf39f9-8f62-4efe-8dd2-64cb167ac6da";
(async function () {
    const ynabAPI = new ynab.api(argv.accessToken);
    const transaction = (await ynabAPI.transactions.getTransactionsById(budgetId, transactionId)).data.transaction;
    let updateTransaction = ynab.utils.convertTransactionToSaveTransaction(transaction);
    updateTransaction.memo = "Updated memo";
    ynabAPI.transactions.updateTransaction(budgetId, transactionId, {
        transaction: updateTransaction
    });
})();
