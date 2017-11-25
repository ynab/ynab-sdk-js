import ynabApi = require("../../src/index");
import { ResponseWrapper, BudgetSummary, MonthDetail } from "../../dist/api";
import * as _ from "lodash";
import { DateWithoutTime } from "./DateWithoutTime";
const Validator = require("swagger-model-validator");
let validator = new Validator();

function checkForError(response: ResponseWrapper): void {
  const error = response.error;
  if (error) {
    throw new Error(`${error.id} - ${error.name}: ${error.description}`);
  }
}

async function main() {
  try {
    // You can get your API key from the My Account section of YNAB
    const API_KEY = process.env.YNAB_API_ACCESS_TOKEN;
    if (API_KEY == null || API_KEY == "") {
      console.warn(
        "You will need to define the YNAB_API_ACCESS_TOKEN environment variable."
      );
      process.exit(1);
    }
    const ynab = new ynabApi(API_KEY);

    console.log(`Fetching budgets...`);
    const getBudgetsResponse = await ynab.budgets.getBudgets(0);
    checkForError(getBudgetsResponse);
    const allBudgets = getBudgetsResponse.data.budgets;

    const pollWaitTimeInMs = 5000;

    if (allBudgets.length > 0) {
      let budgetToFetch: BudgetSummary = null;
      const budgetNameToFetch = "My Budget";
      for (let tempBudget of allBudgets) {
        if (tempBudget.name == budgetNameToFetch) {
          budgetToFetch = tempBudget;
          break;
        }
      }
      if (!budgetToFetch) {
        throw new Error(`Could not find budget named ${budgetNameToFetch}`);
      }
      console.log(
        `Fetching contents of budget: ${budgetToFetch.name} - ${
          budgetToFetch.id
        }`
      );
      const budgetContents = await ynab.budgets.getBudgetContents(
        budgetToFetch.id
      );
      checkForError(budgetContents);

      const categories = budgetContents.data.budget.categories;

      console.log(`Here is the budget data for the current month: `);
      const currentMonth = DateWithoutTime.createForCurrentMonth();
      const monthDetailForCurrentMonth = _.find(
        budgetContents.data.budget.months,
        (month: MonthDetail) => {
          const monthDate = DateWithoutTime.createFromISOString(month.month);
          if (monthDate.equalsByMonth(currentMonth)) {
            return true;
          }
        }
      );
      if (monthDetailForCurrentMonth) {
        console.log(`${JSON.stringify(monthDetailForCurrentMonth, null, 2)}`);
      } else {
        console.error(
          `Could not find monthDetail for the current month: ${currentMonth}`
        );
      }

      let lastServerKnowledge = budgetContents.server_knowledge;

      function queueUpPoll() {
        console.log(`Current server knowledge is: ${lastServerKnowledge}`);
        console.log(`Will poll for changes in ${pollWaitTimeInMs}ms...`);
        setTimeout(async () => {
          console.log("Polling for changes now...");
          const budgetChangesResponse = await ynab.budgets.getBudgetContents(
            budgetToFetch.id,
            lastServerKnowledge
          );
          checkForError(budgetChangesResponse);

          console.log(
            `Current server knowledge is now : ${
              budgetChangesResponse.server_knowledge
            }`
          );
          if (budgetChangesResponse.server_knowledge > lastServerKnowledge) {
            lastServerKnowledge = budgetChangesResponse.server_knowledge;
            console.log(
              `There have been some changes to the following entities: `
            );
            console.log(
              JSON.stringify(budgetChangesResponse.data.budget, null, 2)
            );
          } else {
            console.log("No changes found");
          }
          queueUpPoll();
        }, pollWaitTimeInMs);
      }
      queueUpPoll();
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(`Error: ${e}`);
    } else if (e.status && e.statusText) {
      // This is what an error might look like:
      //{"url":"http://localhost:3000/papi/v1/budgets","status":401,"statusText":"Unauthorized","headers":{"_headers":{"cache-control":["no-store"],"pragma":["no-cache"],"www-authenticate":["Bearer realm=\"Doorkeeper\", error=\"invalid_token\", error_description=\"The access token is invalid\""]}
      console.error(`Error: ${e.status} - ${e.statusText}`);
    } else {
      console.error(`Error: ${JSON.stringify(e)}`);
    }
  }
}

main();
