import * as ynab from "../../src/index";

const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);

const budgetId = "default";
const transactionId = "8fdf39f9-8f62-4efe-8dd2-64cb167ac6da";

(async function () {
  // Fetch transaction before deleting it
  await ynabAPI.transactions.getTransactionById(budgetId, transactionId);

  // Delete the transaction
  await ynabAPI.transactions.deleteTransaction(budgetId, transactionId);

  // Try to fetch the transaction again and see that it was deleted
  try {
    await ynabAPI.transactions.getTransactionById(budgetId, transactionId);
  } catch (error) {
    console.log(
      "As expected, the transaction was not found because it was deleted."
    );

    /* Error response object will look like this:

      {
        id: '404.2',
        name: 'resource_not_found',
        detail: 'Resource not found'
      }

    */

    console.log(
      `ERROR: id=${error.id}; name=${error.name}; detail: ${error.detail}`
    );
  }
})();
