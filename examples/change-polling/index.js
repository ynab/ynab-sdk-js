"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../dist/index.js");
const _ = require("lodash");
const DateWithoutTime_1 = require("./DateWithoutTime");
const Validator = require("swagger-model-validator");
let validator = new Validator();
function checkForError(response) {
    const error = response.error;
    if (error) {
        throw new Error(`${error.id} - ${error.name}: ${error.description}`);
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // You can get your API key from the My Account section of YNAB
            const API_KEY = process.env.YNAB_API_KEY;
            if (API_KEY == null || API_KEY == "") {
                console.warn("You will need to define the YNAB_API_KEY environment variable.");
                process.exit(1);
            }
            const ynab = new index_js_1.Api(API_KEY, "http://localhost:3000/papi/v1");
            console.log(`Fetching budgets...`);
            const getBudgetsResponse = yield ynab.budgets.getBudgets(0);
            checkForError(getBudgetsResponse);
            const allBudgets = getBudgetsResponse.data.budgets;
            const pollWaitTimeInMs = 5000;
            if (allBudgets.length > 0) {
                let budgetToFetch = null;
                const budgetNameToFetch = "My Budget";
                for (let tempBudget of allBudgets) {
                    if (tempBudget.name == budgetNameToFetch) {
                        budgetToFetch = tempBudget;
                        break;
                    }
                }
                if (!budgetToFetch) {
                    throw new Error(`Could not find budget named ${budgetNameToFetch}`);
                }
                console.log(`Fetching contents of budget: ${budgetToFetch.name} - ${budgetToFetch.id}`);
                const budgetContents = yield ynab.budgets.getBudgetContents(budgetToFetch.id);
                checkForError(budgetContents);
                const categories = budgetContents.data.budget.categories;
                console.log(`Here is the budget data for the current month: `);
                const currentMonth = DateWithoutTime_1.DateWithoutTime.createForCurrentMonth();
                const monthDetailForCurrentMonth = _.find(budgetContents.data.budget.months, (month) => {
                    const monthDate = DateWithoutTime_1.DateWithoutTime.createFromISOString(month.month);
                    if (monthDate.equalsByMonth(currentMonth)) {
                        return true;
                    }
                });
                if (monthDetailForCurrentMonth) {
                    console.log(`${JSON.stringify(monthDetailForCurrentMonth, null, 2)}`);
                }
                else {
                    console.error(`Could not find monthDetail for the current month: ${currentMonth}`);
                }
                let lastServerKnowledge = budgetContents.server_knowledge;
                function queueUpPoll() {
                    console.log(`Current server knowledge is: ${lastServerKnowledge}`);
                    console.log(`Will poll for changes in ${pollWaitTimeInMs}ms...`);
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                        console.log("Polling for changes now...");
                        const budgetChangesResponse = yield ynab.budgets.getBudgetContents(budgetToFetch.id, lastServerKnowledge);
                        checkForError(budgetChangesResponse);
                        console.log(`Current server knowledge is now : ${budgetChangesResponse.server_knowledge}`);
                        if (budgetChangesResponse.server_knowledge > lastServerKnowledge) {
                            lastServerKnowledge = budgetChangesResponse.server_knowledge;
                            console.log(`There have been some changes to the following entities: `);
                            console.log(JSON.stringify(budgetChangesResponse.data.budget, null, 2));
                        }
                        else {
                            console.log("No changes found");
                        }
                        queueUpPoll();
                    }), pollWaitTimeInMs);
                }
                queueUpPoll();
            }
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(`Error: ${e}`);
            }
            else if (e.status && e.statusText) {
                // This is what an error might look like:
                //{"url":"http://localhost:3000/papi/v1/budgets","status":401,"statusText":"Unauthorized","headers":{"_headers":{"cache-control":["no-store"],"pragma":["no-cache"],"www-authenticate":["Bearer realm=\"Doorkeeper\", error=\"invalid_token\", error_description=\"The access token is invalid\""]}
                console.error(`Error: ${e.status} - ${e.statusText}`);
            }
            else {
                console.error(`Error: ${JSON.stringify(e)}`);
            }
        }
    });
}
main();
