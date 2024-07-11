import * as ynab from "../src/index";
import * as chai from "chai";
import * as factories from "./factories";
import fetchMock from "fetch-mock";

const assert = chai.assert;
const expect = chai.expect;
chai.config.includeStack = true;

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

  describe("/user", () => {
    it("Should get user", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.user.getUser(),
        factories.userResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/user`);
    });
  });

  describe("/budgets", () => {
    it("Should throw the response it is sent back with a status of 400", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const errorObject = {
        error: {
          id: "401",
          name: "unauthorized",
          description: "Unauthorized",
        },
      };
      fetchMock.once("*", {
        status: 401,
        body: errorObject,
      });
      try {
        const lastKnowledgeOfServer = 5;
        await ynabAPI.budgets.getBudgetById(budgetId, lastKnowledgeOfServer);
        assert(false, "Expected the above method to throw an error");
      } catch (errorResponse: any) {
        expect(errorResponse).to.deep.equal(errorObject);
      }
    });

    it("Should getBudgets and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const getBudgetsResponse = await callApiAndVerifyResponse(
        () => ynabAPI.budgets.getBudgets(),
        factories.budgetSummaryResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets`);
    });

    it("Should getBudgetById and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const lastKnowledgeOfServer = 5;
      const getBudgetsResponse = await callApiAndVerifyResponse(
        () => ynabAPI.budgets.getBudgetById(budgetId, lastKnowledgeOfServer),
        factories.budgetDetailResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}?last_knowledge_of_server=${lastKnowledgeOfServer}`
      );
    });
  });

  describe("/budgets/accounts", () => {
    it("Should getAccounts and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.accounts.getAccounts(budgetId),
        factories.accountsResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/accounts`);
    });

    it("Should getAccountById and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const accountId = "DummyAccountId";
      await callApiAndVerifyResponse(
        () => ynabAPI.accounts.getAccountById(budgetId, accountId),
        factories.accountResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/accounts/${accountId}`
      );
    });

    it("Should create account", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () =>
          ynabAPI.accounts.createAccount(
            budgetId,
            factories.saveAccountWrapperFactory.build()
          ),
        factories.accountResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/accounts`,
        API_KEY,
        1,
        "POST"
      );
    });

    it("Should escape Ids in the URL", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const budgetId = "/://{}?";
      const accountId = "/://{}?";
      await callApiAndVerifyResponse(
        () => ynabAPI.accounts.getAccountById(budgetId, accountId),
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
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const accountId = "DummyAccountId";
      await callApiAndVerifyResponse(
        () => ynabAPI.categories.getCategories(budgetId),
        mockResponse
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/categories`);
    });

    it("Should getCategoryById and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const categoryId = "DummyCategoryId";
      await callApiAndVerifyResponse(
        () => ynabAPI.categories.getCategoryById(budgetId, categoryId),
        factories.categoryResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/categories/${categoryId}`
      );
    });
  });

  describe("/budgets/months", () => {
    it("Should getBudgetMonths and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.months.getBudgetMonths(budgetId),
        factories.monthSummariesResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months`);
    });

    it("Should getBudgetMonth and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const budgetMonth = getUTCDateString(2017, 1, 1);
      await callApiAndVerifyResponse(
        () => ynabAPI.months.getBudgetMonth(budgetId, budgetMonth),
        factories.monthDetailResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months/2017-01-01`);
    });

    it("Should getBudgetMonth with a string param and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.months.getBudgetMonth(budgetId, "2017-01"),
        factories.monthDetailResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months/2017-01`);
    });

    it("Should getBudgetMonth with a string param of 'current' and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.months.getBudgetMonth(budgetId, "current"),
        factories.monthDetailResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/months/current`);
    });
  });

  describe("/budgets/payees", () => {
    it("Should getPayees and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.payees.getPayees(budgetId),
        factories.payeesResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/payees`);
    });

    it("Should getPayeeById and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const payeeId = "payeeId";
      await callApiAndVerifyResponse(
        () => ynabAPI.payees.getPayeeById(budgetId, payeeId),
        factories.payeeResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/payees/${payeeId}`);
    });
  });

  describe("/budgets/payee_locations", () => {
    it("Should getPayeeLocations and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.payeeLocations.getPayeeLocations(budgetId),
        factories.payeeLocationsResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/payee_locations`);
    });

    it("Should getPayeeLocationById and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const payeeLocationId = "payeeLocationId";
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.payeeLocations.getPayeeLocationById(
            budgetId,
            payeeLocationId
          ),
        factories.payeeLocationResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/payee_locations/${payeeLocationId}`
      );
    });
  });

  describe("/budgets/transactions", () => {
    it("Should getTransactions and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.transactions.getTransactions(budgetId),
        factories.transactionsResponseFactory.build()
      );
      verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/transactions`);
    });

    it("Should getTransactionsByType and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.getTransactionsByType(budgetId, "uncategorized"),
        factories.transactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions?type=uncategorized`
      );
    });

    it("Should getTransactionById and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const transactionId = "TransactionId";
      await callApiAndVerifyResponse(
        () => ynabAPI.transactions.getTransactionById(budgetId, transactionId),
        factories.transactionResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions/${transactionId}`
      );
    });

    it("Should getTransactionsByAccount and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const accountId = "accountId";
      const sinceDate = getUTCDateString(2017, 1, 1);
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.getTransactionsByAccount(
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
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const accountId = "accountId";
      const sinceDate = "2017-02";
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.getTransactionsByAccount(
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
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const categoryId = "categoryId";
      const sinceDate = getUTCDateString(2017, 1, 1);
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.getTransactionsByCategory(
            budgetId,
            categoryId,
            sinceDate
          ),
        factories.hybridtransactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/categories/${categoryId}/transactions?since_date=2017-01-01`
      );
    });

    it("Should getTransactionsByMonth and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const month = "2024-07-01";
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.getTransactionsByMonth(
            budgetId, month
          ),
        factories.hybridtransactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/months/${month}/transactions`
      );
    });

    it("Should getTransactionsByCategory with a string `sinceDate` and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const categoryId = "categoryId";
      // Make sure we can pass a string as well
      const sinceDate = "2017-03";
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.getTransactionsByCategory(
            budgetId,
            categoryId,
            sinceDate
          ),
        factories.hybridtransactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/categories/${categoryId}/transactions?since_date=${sinceDate}`
      );
    });

    it("Should create a transaction", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.createTransaction(
            budgetId,
            factories.saveMultipleTransactionsWrapperFactory.build()
          ),
        factories.saveTransactionsResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions`,
        API_KEY,
        1,
        "POST"
      );
    });

    it("Should create multple transactions", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.createTransaction(
            budgetId,
            factories.saveMultipleTransactionsWrapperFactory.build()
          ),
        factories.saveTransactionsResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions`,
        API_KEY,
        1,
        "POST"
      );
    });

    it("Should create multple transactions via alias", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.createTransaction(
            budgetId,
            factories.saveMultipleTransactionsWrapperFactory.build()
          ),
        factories.saveTransactionsResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions`,
        API_KEY,
        1,
        "POST"
      );
    });

    it("Should update a transaction", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      const transactionId = "B5F12BF2-AFCD-4447-BE3E-1855D3B23ECC";
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.updateTransaction(
            budgetId,
            transactionId,
            factories.updateSingleTransactionWrapperFactory.build()
          ),
        factories.transactionResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions/${transactionId}`,
        API_KEY,
        1,
        "PUT"
      );
    });

    it("Should update multiple transactions", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.transactions.updateTransactions(
            budgetId,
            factories.updateMultipleTransactionsWrapperFactory.build()
          ),
        factories.saveTransactionsResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions`,
        API_KEY,
        1,
        "PATCH"
      );
    });

    it("Should import transactions", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      await callApiAndVerifyResponse(
        () => ynabAPI.transactions.importTransactions(budgetId),
        factories.importTransactionsResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions/import`,
        API_KEY,
        1,
        "POST"
      );
    });

    it("Should delete a transaction ", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      const transactionId = "B5F12BF2-AFCD-4447-BE3E-1855D3B23ECC";
      await callApiAndVerifyResponse(
        () => ynabAPI.transactions.deleteTransaction(budgetId, transactionId),
        factories.transactionResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/transactions/${transactionId}`,
        API_KEY,
        1,
        "DELETE"
      );
    });
  });

  describe("/budgets/scheduled_transactions", () => {
    it("Should getScheduledTransactions and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      await callApiAndVerifyResponse(
        () => ynabAPI.scheduledTransactions.getScheduledTransactions(budgetId),
        factories.scheduledTransactionsResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/scheduled_transactions`
      );
    });

    it("Should getScheduledTransactionById and validate the request is sent correctly", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);

      const scheduledTransactionId = "scheduledTransactionId";
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.scheduledTransactions.getScheduledTransactionById(
            budgetId,
            scheduledTransactionId
          ),
        factories.scheduledTransactionDetailResponseFactory.build()
      );
      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/scheduled_transactions/${scheduledTransactionId}`
      );
    });

    it("Should create a scheduled transaction", async () => {
      const ynabAPI = new ynab.API(API_KEY, BASE_URL);
      await callApiAndVerifyResponse(
        () =>
          ynabAPI.scheduledTransactions.createScheduledTransaction(
            budgetId,
            factories.saveSingleScheduledTransactionWrapperFactory.build()
          ),
        factories.scheduledTransactionDetailResponseFactory.build()
      );

      verifyRequestDetails(
        `${BASE_URL}/budgets/${budgetId}/scheduled_transactions`,
        API_KEY,
        1,
        "POST"
      );
    });
  });
});

async function callApiAndVerifyResponse<ResponseType>(
  promiseFunc: () => Promise<ResponseType>,
  mockResponse: ResponseType
) {
  fetchMock.once("*", {
    body: mockResponse,
  });
  let actualResponse = await promiseFunc();

  // Remove fields that are undefined from the mockResponse
  const mockResponseSansUndefinedKeys: any = mockResponse;
  Object.keys(mockResponseSansUndefinedKeys).forEach((key) =>
    mockResponseSansUndefinedKeys[key] === undefined
      ? delete mockResponseSansUndefinedKeys[key]
      : {}
  );

  expect(mockResponseSansUndefinedKeys).to.deep.equal(mockResponse);
  return actualResponse;
}

function verifyRequestDetails(
  url: string,
  bearerTokenExpected: string = API_KEY,
  numCalls: number = 1,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET"
) {
  // TODO: Lastest version of @types/fetch-mock has incorrect type for calls(); once updated, remove this forced cast
  const calls = <Array<string>>(<any>fetchMock.calls());

  expect(calls.length, "fetchMock calls").to.equal(numCalls);
  expect(fetchMock.lastUrl()).to.equal(url);
  expect(fetchMock.lastOptions()!.method).to.equal(method);
  const headers = fetchMock.lastOptions()!.headers;
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
function getUTCDateString(year: number, month: number, date: number): string {
  return `${year}-${month < 10 ? "0" : ""}${month}-${
    date < 10 ? "0" : ""
  }${date}`;
}
