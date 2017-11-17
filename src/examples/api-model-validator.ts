import * as ynabApi from "../index";
import { ResponseWrapper } from "../api";
import * as _ from "lodash";
//import { DateWithoutTime } from "./DateWithoutTime";
const Validator = require("swagger-model-validator");
const swaggerApiDef = require("../../ynab-api-swagger.json");
const validator = new Validator(swaggerApiDef);

async function callAndValidateResponse<T extends ResponseWrapper>(
  promise: Promise<T>,
  modelToValidateAgainst: string = null
): Promise<T> {
  let response = await promise;
  checkForError(response);
  if (modelToValidateAgainst) {
    let validationResponse = swaggerApiDef.validateModel(
      modelToValidateAgainst,
      response
    );

    if (validationResponse && !validationResponse.valid) {
      let formattedErrors: Array<{
        message: string;
        name: string;
      }> = validationResponse.GetFormattedErrors();
      if (formattedErrors) {
        const errorMessage = `Error when validating a '${
          modelToValidateAgainst
        }' response: ${JSON.stringify(
          validationResponse.GetFormattedErrors(),
          null,
          2
        )}`;
        console.error(errorMessage);
        //throw new Error(errorMessage);
      }
    }
  }
  return response;
}

function checkForError(response: ResponseWrapper): void {
  const error = response.error;
  if (error) {
    throw new Error(`${error.id} - ${error.name}: ${error.description}`);
  }
}

async function main() {
  try {
    // You can get your API key from the My Account section of YNAB
    const API_KEY = process.env.YNAB_API_KEY;
    if (API_KEY == null || API_KEY == "") {
      console.warn(
        "You will need to define the YNAB_API_KEY environment variable."
      );
      process.exit(1);
    }
    const ynab = new ynabApi.Api(API_KEY);

    console.log(`Fetching budgets...`);
    const getBudgetsResponse = await callAndValidateResponse(
      ynab.budgets.getBudgets(0),
      "BudgetSummaryResponse"
    );
    const allBudgets = getBudgetsResponse.data.budgets;

    for (let budget of allBudgets) {
      const budgetDetailResponse = await callAndValidateResponse(
        ynab.budgets.getBudgetContents(budget.id),
        "BudgetDetailResponse"
      );

      const accountsResponse = await callAndValidateResponse(
        ynab.accounts.getAccounts(budget.id),
        "AccountsResponse"
      );

      for (let account of accountsResponse.data.accounts) {
        const accountResponse = await callAndValidateResponse(
          ynab.accounts.getAccountById(budget.id, account.id),
          "AccountResponse"
        );

        const transactionResponse = await callAndValidateResponse(
          ynab.transactions.getTransactionsByAccount(budget.id, account.id),
          "TransactionsSummariesResponse"
        );
        break;
      }

      const getCategoriesResponse = await callAndValidateResponse(
        ynab.categories.getCategories(budget.id),
        "CategoriesResponse"
      );

      for (let category_group of getCategoriesResponse.data.category_groups) {
        // TODO: Is it expected that I can't get a category group by ID?
        // const categoryResponse = await callAndValidateResponse(
        //   ynab.categories.getCategoryById(budget.id, category_group.id),
        //   "CategoryResponse"
        // );

        if (category_group.categories) {
          for (let category of category_group.categories) {
            const categoryResponse = await callAndValidateResponse(
              ynab.categories.getCategoryById(budget.id, category.id),
              "CategoryResponse"
            );
            const transactionResponse = await callAndValidateResponse(
              ynab.transactions.getTransactionsByCategory(
                budget.id,
                category.id
              ),
              "TransactionsSummariesResponse"
            );
            break;
          }
        }
      }

      const getBudgetMonthsResponse = await callAndValidateResponse(
        ynab.months.getBudgetMonths(budget.id),
        "MonthSummariesResponse"
      );

      for (let month of getBudgetMonthsResponse.data.months) {
        const monthResponse = await callAndValidateResponse(
          ynab.months.getBudgetMonthById(budget.id, month.month),
          "MonthResponse"
        );
        break;
      }

      const getPayeeLocationsResponse = await callAndValidateResponse(
        ynab.payeeLocations.getPayeeLocations(budget.id),
        "PayeeLocationsResponse"
      );

      for (let payeeLocation of getPayeeLocationsResponse.data
        .payee_locations) {
        const payeeResponse = await callAndValidateResponse(
          ynab.payeeLocations.getPayeeLocationById(budget.id, payeeLocation.id),
          "PayeeLocationResponse"
        );
        break;
      }

      const getPayeesResponse = await callAndValidateResponse(
        ynab.payees.getPayees(budget.id),
        "PayeesResponse"
      );

      for (let payee of getPayeesResponse.data.payees) {
        const payeeResponse = await callAndValidateResponse(
          ynab.payees.getPayeeById(budget.id, payee.id),
          "PayeeResponse"
        );
        const payeeLocationResponse = await callAndValidateResponse(
          ynab.payeeLocations.getPayeeLocationsByPayee(budget.id, payee.id),
          "PayeeLocationsResponse"
        );
        break;
      }

      const getScheduledTransactionsResponse = await callAndValidateResponse(
        ynab.scheduledTransactions.getScheduledTransactions(budget.id),
        "ScheduledTransactionsSummariesResponse"
      );

      for (let scheduledTransaction of getScheduledTransactionsResponse.data
        .scheduled_transactions) {
        const scheduledTransactionResponse = await callAndValidateResponse(
          ynab.scheduledTransactions.getScheduledTransactionById(
            budget.id,
            scheduledTransaction.id
          ),
          "ScheduledTransactionDetailResponse"
        );
        break;
      }

      const getTransactionsResponse = await callAndValidateResponse(
        ynab.transactions.getTransactions(budget.id),
        "TransactionsSummariesResponse"
      );

      // TODO: Rename getTransactionsById to getTransactionById
      for (let transaction of getTransactionsResponse.data.transactions) {
        const transactionResponse = await callAndValidateResponse(
          ynab.transactions.getTransactionsById(budget.id, transaction.id),
          "TransactionDetailResponse"
        );
        break;
      }

      break;
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(`Error: ${e.stack}`);
    } else if (e.status && e.statusText) {
      // This is what an error might look like:
      //{"url":"http://localhost:3000/papi/v1/budgets","status":401,"statusText":"Unauthorized","headers":{"_headers":{"cache-control":["no-store"],"pragma":["no-cache"],"www-authenticate":["Bearer realm=\"Doorkeeper\", error=\"invalid_token\", error_description=\"The access token is invalid\""]}
      console.error(`Error: ${e.status} - ${e.statusText} - ${e.url}`);
    } else {
      console.error(`Error: ${JSON.stringify(e)}`);
    }
  }
}

main();
