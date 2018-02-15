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

describe("API requests", () => {
  const budgetId = "budgetId-1234";

  describe("/budgets", () => {
    it("Should throw the response it is sent back with a status of 400", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const errorObject = {
        error: {
          id: "401",
          name: "unauthorized",
          description: "Unauthorized"
        }
      };
      fetchMock.once("*", {
        status: 401,
        body: errorObject
      });
      try {
        const lastKnowledgeOfServer = 5;
        let actualResponse = await ynab.budgets.getBudgetById(
          budgetId,
          lastKnowledgeOfServer
        );
        assert(false, "Expected the above method to throw an error");
      } catch (errorResponse) {
        expect(errorResponse).to.deep.equal(errorObject);
      }
    });

    it("Should getBudgets and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const getBudgetsResponse = await callApiAndVerifyResponse(
        () => ynab.budgets.getBudgets(0),
        factories.budgetSummaryResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets`);
    });

    it("Should getBudgetById and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const lastKnowledgeOfServer = 5;
      const getBudgetsResponse = await callApiAndVerifyResponse(
        () => ynab.budgets.getBudgetById(budgetId, lastKnowledgeOfServer),
        factories.budgetDetailResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}?last_knowledge_of_server=${lastKnowledgeOfServer}`
      );
    });
  });

  describe("/budgets/accounts", () => {
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
  });

  describe("/budgets/categories", () => {
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
  });

  describe("/budgets/months", () => {
    it("Should getBudgetMonths and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const returnedResponse = await callApiAndVerifyResponse(
        () => ynab.months.getBudgetMonths(budgetId),
        factories.monthSummariesResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months`);
    });

    it("Should getBudgetMonth and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const budgetMonth = getUTCDate(2017, 1, 1);
      const returnedResponse = await callApiAndVerifyResponse(
        () => ynab.months.getBudgetMonth(budgetId, budgetMonth),
        factories.monthDetailResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months/2017-01-01`);
    });

    it("Should getBudgetMonth with a string param and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const returnedResponse = await callApiAndVerifyResponse(
        () => ynab.months.getBudgetMonth(budgetId, "2017-01"),
        factories.monthDetailResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months/2017-01`);
    });

    it("Should getBudgetMonth with a string param of 'current' and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const returnedResponse = await callApiAndVerifyResponse(
        () => ynab.months.getBudgetMonth(budgetId, "current"),
        factories.monthDetailResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months/current`);
    });
  });

  describe("/budgets/payees", () => {
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
  });

  describe("/budgets/payee_locations", () => {
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
        () =>
          ynab.payeeLocations.getPayeeLocationById(budgetId, payeeLocationId),
        factories.payeeLocationResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/payee_locations/${payeeLocationId}`
      );
    });
  });

  describe("/budgets/transactions", () => {
    it("Should getTransactions and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const returnedResponse = await callApiAndVerifyResponse(
        () => ynab.transactions.getTransactions(budgetId),
        factories.transactionsResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/transactions`);
    });

    it("Should getTransactionById and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const transactionId = "TransactionId";
      const returnedResponse = await callApiAndVerifyResponse(
        () => ynab.transactions.getTransactionsById(budgetId, transactionId),
        factories.transactionResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions/${transactionId}`
      );
    });

    it("Should getTransactionsByAccount and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const accountId = "accountId";
      const sinceDate = getUTCDate(2017, 1, 1);
      const returnedResponse = await callApiAndVerifyResponse(
        () =>
          ynab.transactions.getTransactionsByAccount(
            budgetId,
            accountId,
            sinceDate
          ),
        factories.transactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/accounts/${accountId}/transactions?since_date=2017-01-01`
      );
    });

    it("Should getTransactionsByAccount with a string `sinceDate` and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const accountId = "accountId";
      const sinceDate = "2017-02";
      const returnedResponse = await callApiAndVerifyResponse(
        () =>
          ynab.transactions.getTransactionsByAccount(
            budgetId,
            accountId,
            sinceDate
          ),
        factories.transactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/accounts/${accountId}/transactions?since_date=${sinceDate}`
      );
    });

    it("Should getTransactionsByCategory and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const categoryId = "categoryId";
      const sinceDate = getUTCDate(2017, 1, 1);
      const returnedResponse = await callApiAndVerifyResponse(
        () =>
          ynab.transactions.getTransactionsByCategory(
            budgetId,
            categoryId,
            sinceDate
          ),
        factories.transactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/categories/${categoryId}/transactions?since_date=2017-01-01`
      );
    });

    it("Should getTransactionsByCategory with a string `sinceDate` and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const categoryId = "categoryId";
      // Make sure we can pass a string as well
      const sinceDate = "2017-03";
      const returnedResponse = await callApiAndVerifyResponse(
        () =>
          ynab.transactions.getTransactionsByCategory(
            budgetId,
            categoryId,
            sinceDate
          ),
        factories.transactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/categories/${categoryId}/transactions?since_date=${sinceDate}`
      );
    });

    it("Should createTransaction", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const returnedResponse = await callApiAndVerifyResponse(
        () =>
          ynab.transactions.createTransaction(
            budgetId,
            factories.saveTransactionWrapperFactory.build()
          ),
        factories.transactionResponseFactory.build()
      );

      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/transactions`, API_KEY, 1, "POST");
    });

    it("Should updateTransaction", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);
      const transactionId = "B5F12BF2-AFCD-4447-BE3E-1855D3B23ECC";
      const returnedResponse = await callApiAndVerifyResponse(
        () =>
          ynab.transactions.updateTransaction(
            budgetId,
            transactionId,
            factories.saveTransactionWrapperFactory.build()
          ),
        factories.transactionResponseFactory.build()
      );

      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/transactions/${transactionId}`, API_KEY, 1, "PUT");
    });

    it("Should bulkCreateTransactions", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);
      const transactionId = "B5F12BF2-AFCD-4447-BE3E-1855D3B23ECC";
      const returnedResponse = await callApiAndVerifyResponse(
        () =>
          ynab.transactions.bulkCreateTransactions(
            budgetId,
            factories.bulkTransactionsFactory.build()
          ),
        factories.bulkResponseFactory.build()
      );

      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/transactions/bulk`, API_KEY, 1, "POST");
    });
  });

  describe("/budgets/scheduled_transactions", () => {
    it("Should getScheduledTransactions and validate the request is sent correctly", async () => {
      const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

      const returnedResponse = await callApiAndVerifyResponse(
        () => ynab.scheduledTransactions.getScheduledTransactions(budgetId),
        factories.scheduledTransactionsResponseFactory.build()
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
        `${BASE_URL}/budgets/${budgetId}/scheduled_transactions/${scheduledTransactionId}`
      );
    });
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
  expect((<any>headers)["Accept"]).to.equal("application/json");
  if (bearerTokenExpected) {
    // Should we deep equals, or just check the Authorization header?
    expect((<any>headers)["Authorization"]).to.equal(
      `Bearer ${bearerTokenExpected}`
    );
  } else {
    expect((<any>headers)["Authorization"]).to.be.undefined;
  }
}

// Creates a UTC Date object for midnight UTC time
function getUTCDate(year: number, month: number, date: number): Date {
  return new Date(`${year}-${month}-${date}`);
}
