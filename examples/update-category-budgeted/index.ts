import * as ynab from "../../dist/index.js";

const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);

const budgetId = "f968197b-2863-473a-8974-c2406dbe7f0d";
const transactionId = "8fdf39f9-8f62-4efe-8dd2-64cb167ac6da";
const categoryId = "75655c30-ab05-4533-ae4b-8d958e02e73c";
const month = "2018-09-01";
const monthCategory = { month_category: { budgeted: 20382 } };

(async function() {
  try {
    await ynabAPI.categories.updateMonthCategory(
      budgetId,
      month,
      categoryId,
      monthCategory
    );
  } catch (err) {
    const error = err.error;
    console.log(
      `ERROR: id=${error.id}; name=${error.name}; detail: ${error.detail}`
    );
  }
})();
