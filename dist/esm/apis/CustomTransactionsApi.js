/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { TransactionsApi } from "./TransactionsApi";
/**
 *
 */
var CustomTransactionsApi = /** @class */ (function (_super) {
    __extends(CustomTransactionsApi, _super);
    function CustomTransactionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns budget transactions by type
     * @summary List transactions
     * @param {string} budget_id - The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported.
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    CustomTransactionsApi.prototype.getTransactionsByType = function (budgetId, type, lastKnowledgeOfServer, options) {
        return this.getTransactions(budgetId, undefined, type, lastKnowledgeOfServer, options);
    };
    /**
     * Creates multiple transactions. Provide a body containing a 'transactions' array, multiple transactions will be created.
     * @summary Create a single transaction or multiple transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {SaveTransactionsWrapper} data - An object containing transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    CustomTransactionsApi.prototype.createTransactions = function (budgetId, data, options) {
        return this.createTransaction(budgetId, data, options);
    };
    return CustomTransactionsApi;
}(TransactionsApi));
export { CustomTransactionsApi };
