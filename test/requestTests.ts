import ynabApi = require("../src/index");
import * as _ from "lodash";
import chai = require("chai");

const Validator = require("swagger-model-validator");
const swaggerApiDef = require("../spec-v1-swagger.json");
const validator = new Validator(swaggerApiDef);
const assert = chai.assert;
const expect = chai.expect;
chai.config.includeStack = true;

// We've made some modifications to factory.ts
import * as Factory from "./factory";
import * as api from "../src/api";
import * as factories from "./factories";

import * as fetchMock from "fetch-mock";

const BASE_URL = "http://localhost:3000/papi/v1";

// TODO: I'd like to be able to extend the budgetSummaryFactory with another typed factory
// That would make it easier to make the budgetSummaryResponse for example

// You can get your API key from the My Account section of YNAB
const API_KEY = "API_KEY";

beforeEach(async () => {
  fetchMock.reset();
  fetchMock.restore();
});

after(() => {
  fetchMock.reset();
  fetchMock.restore();
});

describe("Mock tests", () => {
  const budgetId = "budgetId-1234";

  it.skip("Should throw if a response is sent back with a status >= 300", async () => {
    throw new Error("Test not implemented");
  });

  it("Should getBudgets and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const getBudgetsResponse = await callApiAndVerifyResponse(
      () => ynab.budgets.getBudgets(0),
      factories.budgetSummaryResponseFactory.build()
    );
    verifyRequestDetails(`${BASE_URL}/budgets`);
  });

  it("Should getBudgetContents and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const lastKnowledgeOfServer = 5;
    const getBudgetsResponse = await callApiAndVerifyResponse(
      () => ynab.budgets.getBudgetContents(budgetId, lastKnowledgeOfServer),
      factories.budgetDetailResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}?last_knowledge_of_server=${
        lastKnowledgeOfServer
      }`
    );
  });

  it("Should getAccounts and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.accounts.getAccounts(budgetId),
      factories.accountsResponseFactory.build()
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/accounts`);
  });

  it("Should getAccountById and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const accountId = "DummyAccountId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.accounts.getAccountById(budgetId, accountId),
      factories.accountResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/accounts/${accountId}`
    );
  });

  it("Should escape Ids in the URL", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "/://{}?";
    const accountId = "/://{}?";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.accounts.getAccountById(budgetId, accountId),
      factories.accountResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${encodeURIComponent(
        budgetId
      )}/accounts/${encodeURIComponent(accountId)}`
    );
  });

  it("Should getCategories and validate the request is sent correctly", async () => {
    const mockResponse = factories.categoriesResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const accountId = "DummyAccountId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.categories.getCategories(budgetId),
      mockResponse
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/categories`);
  });

  it("Should getCategoryById and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const categoryId = "DummyCategoryId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.categories.getCategoryById(budgetId, categoryId),
      factories.categoryResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/categories/${categoryId}`
    );
  });

  it("Should getBudgetMonths and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.months.getBudgetMonths(budgetId),
      factories.monthSummariesResponseFactory.build()
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months`);
  });

  it("Should getBudgetMonthById and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetMonthId = "budgetMonthId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.months.getBudgetMonthById(budgetId, budgetMonthId),
      factories.monthDetailResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/months/${budgetMonthId}`
    );
  });

  it("Should getPayees and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.payees.getPayees(budgetId),
      factories.payeesResponseFactory.build()
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/payees`);
  });

  it("Should getPayeeById and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const payeeId = "payeeId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.payees.getPayeeById(budgetId, payeeId),
      factories.payeeResponseFactory.build()
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/payees/${payeeId}`);
  });

  it("Should getPayeeLocations and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.payeeLocations.getPayeeLocations(budgetId),
      factories.payeeLocationsResponseFactory.build()
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/payee_locations`);
  });

  it("Should getPayeeLocationById and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const payeeLocationId = "payeeLocationId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.payeeLocations.getPayeeLocationById(budgetId, payeeLocationId),
      factories.payeeLocationResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/payee_locations/${payeeLocationId}`
    );
  });

  it("Should getTransactions and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.transactions.getTransactions(budgetId),
      factories.transactionSummariesResponseFactory.build()
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/transactions`);
  });

  it("Should getTransactionById and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const transactionId = "TransactionId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.transactions.getTransactionsById(budgetId, transactionId),
      factories.transactionDetailResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/transactions/${transactionId}`
    );
  });

  it("Should getTransactionsByAccount and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const accountId = "accountId";
    const sinceDate = new Date();
    const returnedResponse = await callApiAndVerifyResponse(
      () =>
        ynab.transactions.getTransactionsByAccount(
          budgetId,
          accountId,
          <any>sinceDate
        ),
      factories.transactionSummariesResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/accounts/${
        accountId
      }/transactions?since_date=${encodeURIComponent(sinceDate.toISOString())}`
    );
  });

  it("Should getTransactionsByCategory and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const categoryId = "categoryId";
    const sinceDate = new Date();
    const returnedResponse = await callApiAndVerifyResponse(
      () =>
        ynab.transactions.getTransactionsByCategory(
          budgetId,
          categoryId,
          <any>sinceDate // TODO: This is supposed to be typed as a date by the code generator, but it's not currently
          //That's because the Swagger code-generator doesn't do a great job with converting to and from Date, so we typed "date-time" as a string
          //I'll need to come back and fix the generator so that this API is correct
        ),
      factories.transactionSummariesResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/categories/${
        categoryId
      }/transactions?since_date=${encodeURIComponent(sinceDate.toISOString())}`
    );
  });

  it("Should getScheduledTransactions and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.scheduledTransactions.getScheduledTransactions(budgetId),
      factories.scheduledTransactionSummariesResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/scheduled_transactions`
    );
  });

  it("Should getScheduledTransactionById and validate the request is sent correctly", async () => {
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const scheduledTransactionId = "scheduledTransactionId";
    const returnedResponse = await callApiAndVerifyResponse(
      () =>
        ynab.scheduledTransactions.getScheduledTransactionById(
          budgetId,
          scheduledTransactionId
        ),
      factories.scheduledTransactionDetailResponseFactory.build()
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/scheduled_transactions/${
        scheduledTransactionId
      }`
    );
  });
});

async function callApiAndVerifyResponse<ResponseType>(
  promiseFunc: () => Promise<ResponseType>,
  mockResponse: ResponseType
) {
  fetchMock.once("*", mockResponse);
  let actualResponse = await promiseFunc();
  expect(actualResponse).to.deep.equal(mockResponse);
  return actualResponse;
}

function verifyRequestDetails(
  url: string,
  bearerTokenExpected: string = API_KEY,
  numCalls: number = 1,
  method: "GET" | "POST" | "PUT" | "PATCH" = "GET"
) {
  expect(fetchMock.calls().matched.length, "fetchMock calls").to.equal(
    numCalls
  );
  expect(fetchMock.lastUrl()).to.equal(url);
  expect(fetchMock.lastOptions().method).to.equal(method);
  const headers = fetchMock.lastOptions().headers;
  if (bearerTokenExpected) {
    // Should we deep equals, or just check the Authorization header?
    expect((<any>headers)["Authorization"]).to.equal(
      `Bearer ${bearerTokenExpected}`
    );
  } else {
    expect((<any>headers)["Authorization"]).to.be.undefined;
  }
}
