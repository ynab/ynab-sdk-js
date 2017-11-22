"use strict";
const api_1 = require("./api");
const configuration_1 = require("./configuration");
/**
 * ynabApi is the entrypoint to the YNAB API client.
 */
class ynabApi {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    constructor(accessToken, endpointUrl = "https://api.youneedabudget.com/v1", fetchFunction = undefined) {
        this.fetchFunction = fetchFunction;
        this._configuration = new configuration_1.Configuration({
            apiKey: `Bearer ${accessToken}`,
            basePath: endpointUrl
        });
    }
    get accounts() {
        if (!this._accounts) {
            this._accounts = new api_1.AccountsApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._accounts;
    }
    get budgets() {
        if (!this._budgets) {
            this._budgets = new api_1.BudgetsApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._budgets;
    }
    get categories() {
        if (!this._categories) {
            this._categories = new api_1.CategoriesApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._categories;
    }
    get months() {
        if (!this._months) {
            this._months = new api_1.MonthsApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._months;
    }
    get payees() {
        if (!this._payees) {
            this._payees = new api_1.PayeesApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._payees;
    }
    get payeeLocations() {
        if (!this._payeeLocations) {
            this._payeeLocations = new api_1.PayeeLocationsApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._payeeLocations;
    }
    get transactions() {
        if (!this._transactions) {
            this._transactions = new api_1.TransactionsApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._transactions;
    }
    get scheduledTransactions() {
        if (!this._scheduledTransactions) {
            this._scheduledTransactions = new api_1.ScheduledTransactionsApi(this._configuration, undefined, this.fetchFunction);
        }
        return this._scheduledTransactions;
    }
}
module.exports = ynabApi;
//# sourceMappingURL=index.js.map