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

import * as fetchMock from "fetch-mock";

const BASE_URL = "http://localhost:3000/papi/v1";

const budgetSummaryFactory = Factory.makeFactory<api.BudgetSummary>({
  id: Factory.each(i => `${i}`),
  name: Factory.each(i => `Budget ${i}`),
  last_accessed_on: new Date().toISOString(),
  date_format: { locale: "en-us" },
  currency_format: { locale: "en-us" }
})

// TODO: I'd like to be able to extend the budgetSummaryFactory with another typed factory
// That would make it easier to make the budgetSummaryResponse for example

const budgetSummaryResponseFactory = Factory.makeFactory<api.BudgetSummaryResponse>({
  data: {
    budgets: Factory.makeFactory<api.BudgetSummary>({
      id: Factory.each(i => `${i}`),
      name: Factory.each(i => `Budget ${i}`),
      last_accessed_on: new Date().toISOString(),
      date_format: { locale: "en-us" },
      currency_format: { locale: "en-us" }
    }).buildList(3)
  }
});

const budgetDetailResponseFactory = Factory.makeFactory<
  api.BudgetDetailResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each(i => i),
    budget: Factory.makeFactory<api.BudgetDetail>({
      id: Factory.each(i => `${i}`),
      name: Factory.each(i => `Budget ${i}`),
      last_accessed_on: new Date().toISOString(),
      date_format: { locale: "en-us" },
      currency_format: { locale: "en-us" },
      accounts: [], //Array<Account>,
      payees: [], //Array<Payee>,
      payee_locations: [], //Array<PayeeLocation>,
      category_groups: [], //Array<CategoryGroup>,
      categories: [], //Array<Category>,
      months: [], //Array<MonthDetail>,
      transactions: [], //Array<TransactionSummary>,
      subtransactions: [], //Array<SubTransaction>,
      scheduled_transactions: [], //Array<ScheduledTransactionSummary>,
      scheduled_subtransactions: [] //Array<ScheduledSubTransaction>,
    })
  })
});

// You can get your API key from the My Account section of YNAB
const API_KEY = "API_KEY";

before(async () => {});

beforeEach(async () => {
  fetchMock.reset();
  fetchMock.restore();
});

describe("Mock tests", () => {
  it("Should getBudgets and validate the request is sent correctly", async () => {
    const mockResponse = budgetSummaryResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);
    const getBudgetsResponse = await callApiAndVerifyResponse(
      () => ynab.budgets.getBudgets(0),
      mockResponse
    );

    expect(fetchMock.calls().matched.length, "fetchMock calls").to.equal(1);
    expect(fetchMock.lastUrl()).to.equal(`${BASE_URL}/budgets`);
    expect(fetchMock.lastOptions().method).to.equal("GET");
    expect(fetchMock.lastOptions().headers).to.deep.equal({
      Authorization: "Bearer API_KEY"
    });
  });

  it("Should getBudgetContents and validate the request is sent correctly", async () => {
    const mockResponse = budgetDetailResponseFactory.build();
    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "1234";
    const lastKnowledgeOfServer = 5;
    const getBudgetsResponse = await callApiAndVerifyResponse(
      () => ynab.budgets.getBudgetContents(budgetId, lastKnowledgeOfServer),
      mockResponse
    );

    expect(fetchMock.calls().matched.length, "fetchMock calls").to.equal(1);
    expect(fetchMock.lastUrl()).to.equal(
      `${BASE_URL}/budgets/${budgetId}?last_knowledge_of_server=${
        lastKnowledgeOfServer
      }`
    );
    expect(fetchMock.lastOptions().method).to.equal("GET");
    expect(fetchMock.lastOptions().headers).to.deep.equal({
      Authorization: "Bearer API_KEY"
    });
  });

  it("Should getAccounts and validate the request is sent correctly", async () => {
    const mockResponse = Factory.makeFactory<api.AccountsResponse>({
      data: Factory.makeFactory({
        accounts: Factory.makeFactory({
          id: Factory.each(i => `AccountID${i}`),
          name: Factory.each(i => `Account ${i}`),
          type: "checking",
          on_budget: true,
          closed: false,
          note: Factory.each(i => `Note #${i}`),
          balance: 5000
        }).buildList(5)
      })
    }).build();

    const ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "1234";
    const returnedResponse = await callApiAndVerifyResponse(
      () => ynab.accounts.getAccounts(budgetId),
      mockResponse
    );

    expect(fetchMock.calls().matched.length, "fetchMock calls").to.equal(1);
    expect(fetchMock.lastUrl()).to.equal(
      `${BASE_URL}/budgets/${budgetId}/accounts`
    );
    expect(fetchMock.lastOptions().method).to.equal("GET");
    expect(fetchMock.lastOptions().headers).to.deep.equal({
      Authorization: "Bearer API_KEY"
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

  function verifyFetchCalls(
    numCalls: number,
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH",
    bearerTokenExpected: string = null
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
});
