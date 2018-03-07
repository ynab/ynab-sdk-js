import * as ynab from "../../dist/index.js";

const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.api(accessToken);

(async function() {
  console.log(`Fetching budgets...`);
  try {
    const budgetsResponse = await ynabAPI.budgets.getBudgets();
    const budgets = budgetsResponse.data.budgets;
    console.log(`This user has ${budgets.length} budgets.`);

    console.log(`\
===========
BUDGET LIST
===========
`);

    for (let budget of budgets) {
      console.log(
        `[id: ${budget.id}, name: ${budget.name}, last_modified_on: ${
          budget.last_modified_on
        }]`
      );
    }
  } catch (e) {
    console.log(`ERROR: ${JSON.stringify(e)}`);
  }
})();
