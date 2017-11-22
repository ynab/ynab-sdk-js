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
  it("Should getBudgets and validate the request is sent correctly", async () => {
    const mockResponse = factories.budgetSummaryResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const getBudgetsResponse = await callApiAndVerifyResponse(
      () => ynab.budgets.getBudgets(0),
      mockResponse
    );
    verifyRequestDetails(`${BASE_URL}/budgets`);
  });

  it("Should getBudgetContents and validate the request is sent correctly", async () => {
    const mockResponse = factories.budgetDetailResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "1234";
    const lastKnowledgeOfServer = 5;
    const getBudgetsResponse = await callApiAndVerifyResponse(
      () => ynab.budgets.getBudgetContents(budgetId, lastKnowledgeOfServer),
      mockResponse
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}?last_knowledge_of_server=${
        lastKnowledgeOfServer
      }`
    );
  });

  it("Should getAccounts and validate the request is sent correctly", async () => {
    const mockResponse = factories.accountsResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "1234";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.accounts.getAccounts(budgetId),
      mockResponse
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/accounts`);
  });

  it("Should getAccountById and validate the request is sent correctly", async () => {
    const mockResponse = factories.accountResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "1234";
    const accountId = "DummyAccountId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.accounts.getAccountById(budgetId, accountId),
      mockResponse
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/accounts/${accountId}`
    );
  });

  it("Should escape Ids in the URL", async () => {
    const mockResponse = factories.accountResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "/://{}?";
    const accountId = "/://{}?";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.accounts.getAccountById(budgetId, accountId),
      mockResponse
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

    const budgetId = "1234";
    const accountId = "DummyAccountId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.categories.getCategories(budgetId),
      mockResponse
    );
    verifyRequestDetails(`${BASE_URL}/budgets/${budgetId}/categories`);
  });

  it("Should getCategoryById and validate the request is sent correctly", async () => {
    const mockResponse = factories.categoryResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "1234";
    const categoryId = "DummyCategoryId";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.categories.getCategoryById(budgetId, categoryId),
      mockResponse
    );
    verifyRequestDetails(
      `${BASE_URL}/budgets/${budgetId}/categories/${categoryId}`
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
