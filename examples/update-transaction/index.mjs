import * as ynab from "../../src/index";
import { TransactionFlagColor } from "../../src/index";
const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);
const budgetId = "f968197b-2863-473a-8974-c2406dbe7f0d";
const transactionId = "8fdf39f9-8f62-4efe-8dd2-64cb167ac6da";
try {
    const transaction = (await ynabAPI.transactions.getTransactionById(budgetId, transactionId)).data.transaction;
    transaction.memo = "Updated memo";
    transaction.flag_color = TransactionFlagColor.Blue;
    transaction.id;
    await ynabAPI.transactions.updateTransaction(budgetId, transactionId, {
        transaction,
    });
}
catch (err) {
    const error = err.error;
    console.log(`ERROR: id=${error.id}; name=${error.name}; detail: ${error.detail}`);
}
