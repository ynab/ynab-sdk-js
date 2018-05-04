"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./configuration");
const CodeGen = require("./api");
const utils_1 = require("./utils");
exports.utils = utils_1.default;
__export(require("./api"));
/**
 * The YNAB API client
 */
class api {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    constructor(accessToken, endpointUrl = "https://api.youneedabudget.com/v1") {
        this._configuration = new configuration_1.Configuration(accessToken, endpointUrl);
    }
    /**
     * /budgets endpoints interface
     */
    get budgets() {
        if (!this._budgets) {
            this._budgets = new CodeGen.BudgetsApi(this._configuration);
        }
        return this._budgets;
    }
    /**
     * /budgets/{budget_id}/accounts endpoints interface
     */
    get accounts() {
        if (!this._accounts) {
            this._accounts = new CodeGen.AccountsApi(this._configuration);
        }
        return this._accounts;
    }
    /**
     * /budgets/{budget_id}/categories endpoints interface
     */
    get categories() {
        if (!this._categories) {
            this._categories = new CodeGen.CategoriesApi(this._configuration);
        }
        return this._categories;
    }
    /**
     * /budgets/{budget_id}/months endpoints interface
     */
    get months() {
        if (!this._months) {
            this._months = new CodeGen.MonthsApi(this._configuration);
        }
        return this._months;
    }
    /**
     * /budgets/{budget_id}/payees endpoints interface
     */
    get payees() {
        if (!this._payees) {
            this._payees = new CodeGen.PayeesApi(this._configuration);
        }
        return this._payees;
    }
    /**
     * /budgets/{budget_id}/payee_locations endpoints interface
     */
    get payeeLocations() {
        if (!this._payeeLocations) {
            this._payeeLocations = new CodeGen.PayeeLocationsApi(this._configuration);
        }
        return this._payeeLocations;
    }
    /**
     * /budgets/{budget_id}/transactions endpoints interface
     */
    get transactions() {
        if (!this._transactions) {
            this._transactions = new CodeGen.TransactionsApi(this._configuration);
        }
        return this._transactions;
    }
    /**
     * /budgets/{budget_id}/scheduled_transactions endpoints interface
     */
    get scheduledTransactions() {
        if (!this._scheduledTransactions) {
            this._scheduledTransactions = new CodeGen.ScheduledTransactionsApi(this._configuration);
        }
        return this._scheduledTransactions;
    }
}
exports.api = api;
exports.API = api;
