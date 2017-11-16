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
const ynabApi = require("../index");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // You can get your API key from the My Account section of YNAB
            const API_KEY = process.env.YNAB_API_KEY;
            if (API_KEY == null || API_KEY == "") {
                console.warn("You will need to define the YNAB_API_KEY environment variable.");
                process.exit(1);
            }
            const ynab = new ynabApi.Api(API_KEY);
            console.log(`Fetching budgets...`);
            const allBudgetsResponse = yield ynab.budgets.getBudgets(0);
            const allBudgets = allBudgetsResponse.data.budgets;
            console.log(`This user has ${allBudgets.length} budgets.`);
            for (let budget of allBudgets) {
                let contents = yield ynab.budgets.getBudgetContents(budget.id);
                console.log(`\nHere are all accounts for budget '${budget.id}':`);
                const accountsResponse = yield ynab.accounts.getAccounts(budget.id);
                const accounts = accountsResponse.data.accounts;
                for (let account of accounts) {
                    console.log(`  ${JSON.stringify(account)}`);
                    let accountFetch = yield ynab.accounts.getAccountById(budget.id, account.id);
                    console.log(`And I got the account: ${JSON.stringify(accountFetch)}`);
                }
            }
        }
        catch (e) {
            // This is what an error might look like:
            //{"url":"http://localhost:3000/papi/v1/budgets","status":401,"statusText":"Unauthorized","headers":{"_headers":{"cache-control":["no-store"],"pragma":["no-cache"],"www-authenticate":["Bearer realm=\"Doorkeeper\", error=\"invalid_token\", error_description=\"The access token is invalid\""]}
            if (e instanceof Error) {
                console.error(`real error: ${e}`);
            }
            else {
                console.error(`Got error: ${JSON.stringify(e)}`);
            }
        }
    });
}
main();
