/* tslint:disable */
import * as apis from "./apis";
import { CustomTransactionsApi } from "./apis/CustomTransactionsApi";
import utils from "./utils";
import { BASE_PATH, Configuration } from "./runtime";
/* eslint-disable */
export * from "./runtime";
export * from "./apis";
export * from "./models";
export { api as API };
export { utils };
var api = /** @class */ (function () {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    function api(accessToken, endpointUrl) {
        if (endpointUrl === void 0) { endpointUrl = BASE_PATH; }
        this._configuration = new Configuration({
            accessToken: accessToken,
            basePath: endpointUrl,
        });
    }
    Object.defineProperty(api.prototype, "user", {
        /**
         * /user endpoints interface
         */
        get: function () {
            if (!this._user) {
                this._user = new apis.UserApi(this._configuration);
            }
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "budgets", {
        /**
         * /budgets endpoints interface
         */
        get: function () {
            if (!this._budgets) {
                this._budgets = new apis.BudgetsApi(this._configuration);
            }
            return this._budgets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "accounts", {
        /**
         * /budgets/{budget_id}/accounts endpoints interface
         */
        get: function () {
            if (!this._accounts) {
                this._accounts = new apis.AccountsApi(this._configuration);
            }
            return this._accounts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "categories", {
        /**
         * /budgets/{budget_id}/categories endpoints interface
         */
        get: function () {
            if (!this._categories) {
                this._categories = new apis.CategoriesApi(this._configuration);
            }
            return this._categories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "months", {
        /**
         * /budgets/{budget_id}/months endpoints interface
         */
        get: function () {
            if (!this._months) {
                this._months = new apis.MonthsApi(this._configuration);
            }
            return this._months;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "payees", {
        /**
         * /budgets/{budget_id}/payees endpoints interface
         */
        get: function () {
            if (!this._payees) {
                this._payees = new apis.PayeesApi(this._configuration);
            }
            return this._payees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "payeeLocations", {
        /**
         * /budgets/{budget_id}/payee_locations endpoints interface
         */
        get: function () {
            if (!this._payeeLocations) {
                this._payeeLocations = new apis.PayeeLocationsApi(this._configuration);
            }
            return this._payeeLocations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "transactions", {
        /**
         * /budgets/{budget_id}/transactions endpoints interface
         */
        get: function () {
            if (!this._transactions) {
                this._transactions = new CustomTransactionsApi(this._configuration);
            }
            return this._transactions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(api.prototype, "scheduledTransactions", {
        /**
         * /budgets/{budget_id}/scheduled_transactions endpoints interface
         */
        get: function () {
            if (!this._scheduledTransactions) {
                this._scheduledTransactions = new apis.ScheduledTransactionsApi(this._configuration);
            }
            return this._scheduledTransactions;
        },
        enumerable: false,
        configurable: true
    });
    return api;
}());
export { api };
