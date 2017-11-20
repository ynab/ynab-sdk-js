import * as ynabApi from "../src/index";
import { ResponseWrapper, BudgetDetail } from "../src/api";
import * as _ from "lodash";
import chai = require("chai");

const Validator = require("swagger-model-validator");
const swaggerApiDef = require("../ynab-api-swagger.json");
const validator = new Validator(swaggerApiDef);
const assert = chai.assert;
const expect = chai.expect;
chai.config.includeStack = true;

// You can get your API key from the My Account section of YNAB
const API_KEY = process.env.YNAB_API_KEY;
if (!API_KEY) {
  throw new Error(
    "In order to run integration tests, you must declare the YNAB_API_KEY environment variable."
  );
}
const ynab = new ynabApi.Api(API_KEY, "http://localhost:3000/papi/v1");

// TODO : We need to have a test budget that we can use for this
let budgetForTesting: BudgetDetail = null;
before(async () => {
  const getBudgetsResponse = await ynab.budgets.getBudgets(0);
  const allBudgets = getBudgetsResponse.data.budgets;
  expect(allBudgets).to.not.be.empty;
  let budgetId = allBudgets[0].id;
  budgetForTesting = (await ynab.budgets.getBudgetContents(budgetId)).data
    .budget;
});

describe("Integration tests", () => {
  it("Should getBudgets and validate the response", async () => {
    const getBudgetsResponse = await callAndValidateResponse(
      ynab.budgets.getBudgets(0),
      "BudgetSummaryResponse"
    );
    const allBudgets = getBudgetsResponse.data.budgets;
    expect(allBudgets.length).to.not.be.empty;
  });

  it("Should getBudgetContents and validate the response", async () => {
    const budgetDetailResponse = await callAndValidateResponse(
      ynab.budgets.getBudgetContents(budgetForTesting.id),
      "BudgetDetailResponse"
    );
  });

  it("Should getAccounts, getAccountById, getTransactionsByAccount and validate the responses", async () => {
    const accountsResponse = await callAndValidateResponse(
      ynab.accounts.getAccounts(budgetForTesting.id),
      "AccountsResponse"
    );

    for (let account of accountsResponse.data.accounts) {
      const accountResponse = await callAndValidateResponse(
        ynab.accounts.getAccountById(budgetForTesting.id, account.id),
        "AccountResponse"
      );

      const transactionResponse = await callAndValidateResponse(
        ynab.transactions.getTransactionsByAccount(
          budgetForTesting.id,
          account.id
        ),
        "TransactionsSummariesResponse"
      );
      break;
    }
  });

  it("Should getCategories, getCategoryById, getTransactionsByCategory and validate the response", async () => {
    const getCategoriesResponse = await callAndValidateResponse(
      ynab.categories.getCategories(budgetForTesting.id),
      "CategoriesResponse"
    );

    for (let category_group of getCategoriesResponse.data.category_groups) {
      // TODO: Is it expected that I can't get a category group by ID?
      // const categoryResponse = await callAndValidateResponse(
      //   ynab.categories.getCategoryById(budgetForTesting.id, category_group.id),
      //   "CategoryResponse"
      // );

      if (category_group.categories) {
        for (let category of category_group.categories) {
          const categoryResponse = await callAndValidateResponse(
            ynab.categories.getCategoryById(budgetForTesting.id, category.id),
            "CategoryResponse"
          );
          const transactionResponse = await callAndValidateResponse(
            ynab.transactions.getTransactionsByCategory(
              budgetForTesting.id,
              category.id
            ),
            "TransactionsSummariesResponse"
          );
          break;
        }
      }
    }
  });

  it("Should getBudgetMonths, getBudgetMonthById and validate the response", async () => {
    const getBudgetMonthsResponse = await callAndValidateResponse(
      ynab.months.getBudgetMonths(budgetForTesting.id),
      "MonthSummariesResponse"
    );

    for (let month of getBudgetMonthsResponse.data.months) {
      const monthResponse = await callAndValidateResponse(
        ynab.months.getBudgetMonthById(budgetForTesting.id, month.month),
        "MonthResponse"
      );
      break;
    }
  });

  it("Should getPayeeLocations, getPayeeLocationById and validate the response", async () => {
    const getPayeeLocationsResponse = await callAndValidateResponse(
      ynab.payeeLocations.getPayeeLocations(budgetForTesting.id),
      "PayeeLocationsResponse"
    );

    for (let payeeLocation of getPayeeLocationsResponse.data.payee_locations) {
      const payeeResponse = await callAndValidateResponse(
        ynab.payeeLocations.getPayeeLocationById(
          budgetForTesting.id,
          payeeLocation.id
        ),
        "PayeeLocationResponse"
      );
      break;
    }
  });

  it("Should getPayees, getPayeeById, getPayeeLocationsByPayee and validate the response", async () => {
    const getPayeesResponse = await callAndValidateResponse(
      ynab.payees.getPayees(budgetForTesting.id),
      "PayeesResponse"
    );

    for (let payee of getPayeesResponse.data.payees) {
      const payeeResponse = await callAndValidateResponse(
        ynab.payees.getPayeeById(budgetForTesting.id, payee.id),
        "PayeeResponse"
      );
      const payeeLocationResponse = await callAndValidateResponse(
        ynab.payeeLocations.getPayeeLocationsByPayee(
          budgetForTesting.id,
          payee.id
        ),
        "PayeeLocationsResponse"
      );
      break;
    }
  });

  it("Should getScheduledTransactions, getScheduledTransactionById and validate the response", async () => {
    const getScheduledTransactionsResponse = await callAndValidateResponse(
      ynab.scheduledTransactions.getScheduledTransactions(budgetForTesting.id),
      "ScheduledTransactionsSummariesResponse"
    );

    for (let scheduledTransaction of getScheduledTransactionsResponse.data
      .scheduled_transactions) {
      const scheduledTransactionResponse = await callAndValidateResponse(
        ynab.scheduledTransactions.getScheduledTransactionById(
          budgetForTesting.id,
          scheduledTransaction.id
        ),
        "ScheduledTransactionDetailResponse"
      );
      break;
    }
  });

  it("Should getTransactions, getTransactionsById and validate the response", async () => {
    const getTransactionsResponse = await callAndValidateResponse(
      ynab.transactions.getTransactions(budgetForTesting.id),
      "TransactionsSummariesResponse"
    );

    // TODO: Rename getTransactionsById to getTransactionById
    for (let transaction of getTransactionsResponse.data.transactions) {
      const transactionResponse = await callAndValidateResponse(
        ynab.transactions.getTransactionsById(
          budgetForTesting.id,
          transaction.id
        ),
        "TransactionDetailResponse"
      );
      break;
    }
  });
});

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
        throw new Error(errorMessage);
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
