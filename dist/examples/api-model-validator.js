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
//import { DateWithoutTime } from "./DateWithoutTime";
const Validator = require("swagger-model-validator");
const swaggerApiDef = require("../../ynab-api-swagger.json");
const validator = new Validator(swaggerApiDef);
function callAndValidateResponse(promise, modelToValidateAgainst = null) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield promise;
        checkForError(response);
        if (modelToValidateAgainst) {
            let validationResponse = swaggerApiDef.validateModel(modelToValidateAgainst, response);
            if (validationResponse && !validationResponse.valid) {
                let formattedErrors = validationResponse.GetFormattedErrors();
                if (formattedErrors) {
                    const errorMessage = `Error when validating a '${modelToValidateAgainst}' response: ${JSON.stringify(validationResponse.GetFormattedErrors(), null, 2)}`;
                    console.error(errorMessage);
                    //throw new Error(errorMessage);
                }
            }
        }
        return response;
    });
}
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
            const API_KEY = process.env.YNAB_API_KEY ||
                "25ee717d85595f31f5a431fcae1f7d57f2e55bcbc24053bcac44596aa1bdca23";
            if (API_KEY == null || API_KEY == "") {
                console.warn("You will need to define the YNAB_API_KEY environment variable.");
                process.exit(1);
            }
            const ynab = new ynabApi.Api(API_KEY);
            debugger;
            console.log(`Fetching budgets...`);
            const getBudgetsResponse = yield callAndValidateResponse(ynab.budgets.getBudgets(0), "BudgetSummaryResponse");
            const allBudgets = getBudgetsResponse.data.budgets;
            for (let budget of allBudgets) {
                const budgetDetailResponse = yield callAndValidateResponse(ynab.budgets.getBudgetContents(budget.id), "BudgetDetailResponse");
                const accountsResponse = yield callAndValidateResponse(ynab.accounts.getAccounts(budget.id), "AccountsResponse");
                for (let account of accountsResponse.data.accounts) {
                    const accountResponse = yield callAndValidateResponse(ynab.accounts.getAccountById(budget.id, account.id), "AccountResponse");
                    const transactionResponse = yield callAndValidateResponse(ynab.transactions.getTransactionsByAccount(budget.id, account.id), "TransactionsSummariesResponse");
                    break;
                }
                const getCategoriesResponse = yield callAndValidateResponse(ynab.categories.getCategories(budget.id), "CategoriesResponse");
                for (let category_group of getCategoriesResponse.data.category_groups) {
                    // TODO: Is it expected that I can't get a category group by ID?
                    // const categoryResponse = await callAndValidateResponse(
                    //   ynab.categories.getCategoryById(budget.id, category_group.id),
                    //   "CategoryResponse"
                    // );
                    if (category_group.categories) {
                        for (let category of category_group.categories) {
                            const categoryResponse = yield callAndValidateResponse(ynab.categories.getCategoryById(budget.id, category.id), "CategoryResponse");
                            const transactionResponse = yield callAndValidateResponse(ynab.transactions.getTransactionsByCategory(budget.id, category.id), "TransactionsSummariesResponse");
                            break;
                        }
                    }
                }
                const getBudgetMonthsResponse = yield callAndValidateResponse(ynab.months.getBudgetMonths(budget.id), "MonthSummariesResponse");
                for (let month of getBudgetMonthsResponse.data.months) {
                    const monthResponse = yield callAndValidateResponse(ynab.months.getBudgetMonthById(budget.id, month.month), "MonthResponse");
                    break;
                }
                const getPayeeLocationsResponse = yield callAndValidateResponse(ynab.payeeLocations.getPayeeLocations(budget.id), "PayeeLocationsResponse");
                for (let payeeLocation of getPayeeLocationsResponse.data
                    .payee_locations) {
                    const payeeResponse = yield callAndValidateResponse(ynab.payeeLocations.getPayeeLocationById(budget.id, payeeLocation.id), "PayeeLocationResponse");
                    break;
                }
                const getPayeesResponse = yield callAndValidateResponse(ynab.payees.getPayees(budget.id), "PayeesResponse");
                for (let payee of getPayeesResponse.data.payees) {
                    const payeeResponse = yield callAndValidateResponse(ynab.payees.getPayeeById(budget.id, payee.id), "PayeeResponse");
                    const payeeLocationResponse = yield callAndValidateResponse(ynab.payeeLocations.getPayeeLocationsByPayee(budget.id, payee.id), "PayeeLocationsResponse");
                    break;
                }
                const getScheduledTransactionsResponse = yield callAndValidateResponse(ynab.scheduledTransactions.getScheduledTransactions(budget.id), "ScheduledTransactionsSummariesResponse");
                for (let scheduledTransaction of getScheduledTransactionsResponse.data
                    .scheduled_transactions) {
                    const scheduledTransactionResponse = yield callAndValidateResponse(ynab.scheduledTransactions.getScheduledTransactionById(budget.id, scheduledTransaction.id), "ScheduledTransactionDetailResponse");
                    break;
                }
                const getTransactionsResponse = yield callAndValidateResponse(ynab.transactions.getTransactions(budget.id), "TransactionsSummariesResponse");
                // TODO: Rename getTransactionsById to getTransactionById
                for (let transaction of getTransactionsResponse.data.transactions) {
                    const transactionResponse = yield callAndValidateResponse(ynab.transactions.getTransactionsById(budget.id, transaction.id), "TransactionDetailResponse");
                    break;
                }
                break;
            }
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(`Error: ${e.stack}`);
            }
            else if (e.status && e.statusText) {
                // This is what an error might look like:
                //{"url":"http://localhost:3000/papi/v1/budgets","status":401,"statusText":"Unauthorized","headers":{"_headers":{"cache-control":["no-store"],"pragma":["no-cache"],"www-authenticate":["Bearer realm=\"Doorkeeper\", error=\"invalid_token\", error_description=\"The access token is invalid\""]}
                console.error(`Error: ${e.status} - ${e.statusText} - ${e.url}`);
            }
            else {
                console.error(`Error: ${JSON.stringify(e)}`);
            }
        }
    });
}
main();
//# sourceMappingURL=api-model-validator.js.map