Object.defineProperty(exports, "__esModule", { value: true });
const ynab = require("../../dist/index.js");
const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);
const budgetId = "f968197b-2863-473a-8974-c2406dbe7f0d";
const transactionId = "8fdf39f9-8f62-4efe-8dd2-64cb167ac6da";
(async function () {
    const transaction = (await ynabAPI.transactions.getTransactionsById(budgetId, transactionId)).data.transaction;
    transaction.memo = "Updated memo";
    transaction.flag_color = ynab.SaveTransaction.FlagColorEnum.Blue;
    await ynabAPI.transactions.updateTransaction(budgetId, transactionId, {
        transaction
    });
})();
