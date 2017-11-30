"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ynabApi = require("../../dist/index.js");
const _ = require("lodash");
const DateWithoutTime_1 = require("./DateWithoutTime");
const Validator = require("swagger-model-validator");
let validator = new Validator();
async function main() {
    try {
        // You can get your API key from the My Account section of YNAB
        const API_KEY = process.env.YNAB_API_ACCESS_TOKEN;
        if (API_KEY == null || API_KEY == "") {
            console.warn("You will need to define the YNAB_API_ACCESS_TOKEN environment variable.");
            process.exit(1);
        }
        const ynab = new ynabApi(API_KEY);
        console.log(`Fetching budgets...`);
        const getBudgetsResponse = await ynab.budgets.getBudgets();
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
            const budgetContents = await ynab.budgets.getBudgetContents(budgetToFetch.id);
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
            let lastServerKnowledge = budgetContents.data.server_knowledge;
            function queueUpPoll() {
                console.log(`Current server knowledge is: ${lastServerKnowledge}`);
                console.log(`Will poll for changes in ${pollWaitTimeInMs}ms...`);
                setTimeout(async () => {
                    console.log("Polling for changes now...");
                    const budgetChangesResponse = await ynab.budgets.getBudgetContents(budgetToFetch.id, lastServerKnowledge);
                    console.log(`Current server knowledge is now : ${budgetChangesResponse.data.server_knowledge}`);
                    if (budgetChangesResponse.data.server_knowledge > lastServerKnowledge) {
                        lastServerKnowledge = budgetChangesResponse.data.server_knowledge;
                        console.log(`There have been some changes to the following entities: `);
                        console.log(JSON.stringify(budgetChangesResponse.data.budget, null, 2));
                    }
                    else {
                        console.log("No changes found");
                    }
                    queueUpPoll();
                }, pollWaitTimeInMs);
            }
            queueUpPoll();
        }
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(`Error: ${e}`);
        }
        else {
            console.error(`Error: ${JSON.stringify(e)}`);
        }
    }
}
main();
