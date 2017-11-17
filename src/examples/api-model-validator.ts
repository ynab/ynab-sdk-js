import * as ynabApi from "../index";
import { ResponseWrapper } from "../api";
import * as _ from "lodash";
//import { DateWithoutTime } from "./DateWithoutTime";
const Validator = require("swagger-model-validator");
let validator = new Validator();
let swaggerApiDef = require("../../ynab-api-swagger.json");

function checkForError(response: ResponseWrapper): void {
  const error = response.error;
  if (error) {
    throw new Error(`${error.id} - ${error.name}: ${error.description}`);
  }
}

async function main() {
  try {
    debugger;
    let validator = new Validator(swaggerApiDef);

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
    const getBudgetsResponse = await ynab.budgets.getBudgets(0);
    checkForError(getBudgetsResponse);
    const allBudgets = getBudgetsResponse.data.budgets;

    const pollWaitTimeInMs = 5000;
    console.log(`Validating...`);

    let validationResponse = swaggerApiDef.validateModel(
      "BudgetSummaryResponse",
      getBudgetsResponse
    );

    let formattedErrors: Array<{
      message: string;
      name: string;
    }> = validationResponse.GetFormattedErrors();
    if (formattedErrors) {
      console.error(
        `Validation response: ${JSON.stringify(
          validationResponse.GetFormattedErrors(),
          null,
          2
        )}`
      );
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
