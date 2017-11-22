import ynabApi = require("../src/index");
import { ErrorResponse, BudgetDetail } from "../src/api";
import * as _ from "lodash";
import chai = require("chai");

const Validator = require("swagger-model-validator");
const swaggerApiDef = require("../ynab-api-swagger.json");
const validator = new Validator(swaggerApiDef);
const assert = chai.assert;
const expect = chai.expect;
chai.config.includeStack = true;

import * as Factory from "factory.ts";
import * as api from "../src/api";

import * as fetchMock from "fetch-mock";

const BASE_URL = "http://localhost:3000/papi/v1";

const budgetFactory = Factory.makeFactory<api.BudgetSummary>({
  id: Factory.each(i => `${i}`),
  name: Factory.each(i => `Budget ${i}`),
  last_accessed_on: new Date(),
  date_format: { locale: "en-us" },
  currency_format: { locale: "en-us" }
});

const budgetSummaryFactory = Factory.makeFactory<api.BudgetSummaryResponse>({
  data: {
    budgets: budgetFactory.buildList(3)
  }
});

// You can get your API key from the My Account section of YNAB
const API_KEY = "API_KEY";

before(async () => {});

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
});
