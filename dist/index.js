"use strict";
/* tslint:disable */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.utils = exports.API = void 0;
const apis = require("./apis");
const CustomTransactionsApi_1 = require("./apis/CustomTransactionsApi");
const utils_1 = require("./utils");
exports.utils = utils_1.default;
const runtime_1 = require("./runtime");
/* eslint-disable */
__exportStar(require("./runtime"), exports);
__exportStar(require("./apis"), exports);
__exportStar(require("./models"), exports);
class api {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    constructor(accessToken, endpointUrl = runtime_1.BASE_PATH) {
        this._configuration = new runtime_1.Configuration({
            accessToken,
            basePath: endpointUrl,
        });
    }
    /**
     * /user endpoints interface
     */
    get user() {
        if (!this._user) {
            this._user = new apis.UserApi(this._configuration);
        }
        return this._user;
    }
    /**
     * /budgets endpoints interface
     */
    get budgets() {
        if (!this._budgets) {
            this._budgets = new apis.BudgetsApi(this._configuration);
        }
        return this._budgets;
    }
    /**
     * /budgets/{budget_id}/accounts endpoints interface
     */
    get accounts() {
        if (!this._accounts) {
            this._accounts = new apis.AccountsApi(this._configuration);
        }
        return this._accounts;
    }
    /**
     * /budgets/{budget_id}/categories endpoints interface
     */
    get categories() {
        if (!this._categories) {
            this._categories = new apis.CategoriesApi(this._configuration);
        }
        return this._categories;
    }
    /**
     * /budgets/{budget_id}/months endpoints interface
     */
    get months() {
        if (!this._months) {
            this._months = new apis.MonthsApi(this._configuration);
        }
        return this._months;
    }
    /**
     * /budgets/{budget_id}/payees endpoints interface
     */
    get payees() {
        if (!this._payees) {
            this._payees = new apis.PayeesApi(this._configuration);
        }
        return this._payees;
    }
    /**
     * /budgets/{budget_id}/payee_locations endpoints interface
     */
    get payeeLocations() {
        if (!this._payeeLocations) {
            this._payeeLocations = new apis.PayeeLocationsApi(this._configuration);
        }
        return this._payeeLocations;
    }
    /**
     * /budgets/{budget_id}/transactions endpoints interface
     */
    get transactions() {
        if (!this._transactions) {
            this._transactions = new CustomTransactionsApi_1.CustomTransactionsApi(this._configuration);
        }
        return this._transactions;
    }
    /**
     * /budgets/{budget_id}/scheduled_transactions endpoints interface
     */
    get scheduledTransactions() {
        if (!this._scheduledTransactions) {
            this._scheduledTransactions = new apis.ScheduledTransactionsApi(this._configuration);
        }
        return this._scheduledTransactions;
    }
}
exports.api = api;
exports.API = api;
