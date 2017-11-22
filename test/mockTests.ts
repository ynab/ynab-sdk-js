import ynabApi = require("../src/index");
import { ErrorResponse, BudgetDetail, BudgetDetailWrapper } from "../src/api";
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

const budgetSummaryFactory = Factory.makeFactory<api.BudgetSummaryResponse>({
  data: {
    budgets: Factory.makeFactory<api.BudgetSummary>({
      id: Factory.each(i => `${i}`),
      name: Factory.each(i => `Budget ${i}`),
      last_accessed_on: new Date(),
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
      last_accessed_on: new Date(),
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
});

describe("Mock tests", () => {
  it("Should getBudgets and validate the request is sent correctly", async () => {
    let budgetSummary = budgetSummaryFactory.build();
    fetchMock.mock("*", budgetSummary);
    let ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const getBudgetsResponse = await ynab.budgets.getBudgets(0);

    expect(fetchMock.calls().matched.length, "fetchMock calls").to.equal(1);
    expect(fetchMock.lastUrl()).to.equal(`${BASE_URL}/budgets`);
    expect(fetchMock.lastOptions().method).to.equal("GET");
    expect(fetchMock.lastOptions().headers).to.deep.equal({
      Authorization: "Bearer API_KEY"
    });
  });

  it("Should getBudgetContents and validate the request is sent correctly", async () => {
    let response = budgetDetailResponseFactory.build();
    fetchMock.mock("*", response);
    let ynab: ynabApi = new ynabApi(API_KEY, BASE_URL);

    const budgetId = "1234";
    const lastKnowledgeOfServer = 5;
    const getBudgetsResponse = await ynab.budgets.getBudgetContents(
      budgetId,
      lastKnowledgeOfServer
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
});
