import * as ynab from "../../src/index";
const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);
const budgetId = "378f111e-4b27-4ee5-a9fd-0ba03c1de0f0";
const transaction = {
    account_id: "d99072b8-f598-484c-a0f8-ae607350f70a",
    category_id: "8d505bc0-efbe-4803-b8ef-0898213a1092",
    payee_id: null,
    cleared: ynab.SaveTransactionClearedEnum.Cleared,
    approved: true,
    date: ynab.utils.getCurrentDateInISOFormat(),
    amount: -23430,
    memo: "Dry Cleaning",
};
try {
    await ynabAPI.transactions.createTransaction(budgetId, { transaction });
}
catch (err) {
    const error = err.error;
    console.log(`ERROR: id=${error.id}; name=${error.name}; detail: ${error.detail}`);
}
