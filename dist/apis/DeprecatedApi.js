"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeprecatedApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class DeprecatedApi extends runtime.BaseAPI {
    /**
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use \'POST /budgets/{budget_id}/transactions\' to create multiple transactions.
     * Bulk create transactions
     */
    async bulkCreateTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling bulkCreateTransactions.');
        }
        if (requestParameters.transactions === null || requestParameters.transactions === undefined) {
            throw new runtime.RequiredError('transactions', 'Required parameter requestParameters.transactions was null or undefined when calling bulkCreateTransactions.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Accept'] = 'application/json';
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions/bulk`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.BulkTransactionsToJSON)(requestParameters.transactions),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BulkResponseFromJSON)(jsonValue));
    }
    /**
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use \'POST /budgets/{budget_id}/transactions\' to create multiple transactions.
     * Bulk create transactions
     */
    async bulkCreateTransactions(budgetId, transactions, initOverrides) {
        const response = await this.bulkCreateTransactionsRaw({ budgetId: budgetId, transactions: transactions }, initOverrides);
        return await response.value();
    }
}
exports.DeprecatedApi = DeprecatedApi;
