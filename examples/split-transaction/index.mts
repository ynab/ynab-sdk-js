import * as ynab from "ynab";
const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);

const budgetId = "378f111e-4b27-4ee5-a9fd-0ba03c1de0f0";

const transaction: ynab.SaveTransactionWithIdOrImportId = {
  account_id: "d99072b8-f598-484c-a0f8-ae607350f70a",
  payee_id: null,
  cleared: ynab.TransactionClearedStatus.Cleared,
  approved: true,
  date: ynab.utils.getCurrentDateInISOFormat(),
  amount: -23430,
  memo: "Groceries",
};

try {
  // Create a new transaction
  const createTransactionResponse = await ynabAPI.transactions.createTransaction(budgetId, { transaction });
  console.log(`Transaction created successfully (id=${createTransactionResponse.data.transaction.id}).`);

  // Add subtransactions to make it a split transaction
  transaction.subtransactions = [
    {
      amount: -15000,
      memo: "Meat",
    },
    {
      amount: -8430,
      memo: "Fruit",
    },
  ]

  // Send updated transaction to API
  ynabAPI.transactions.updateTransaction(budgetId, createTransactionResponse.data.transaction.id, {
    transaction: transaction
  });
  console.log(`Transaction updated (split) successfully.`);

} catch (err) {
  const error = err.error;
  console.log(
    `ERROR: id=${error.id}; name=${error.name}; detail: ${error.detail}`
  );
}
