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
exports.ScheduledTransactionsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class ScheduledTransactionsApi extends runtime.BaseAPI {
    /**
     * Returns a single scheduled transaction
     * Single scheduled transaction
     */
    async getScheduledTransactionByIdRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getScheduledTransactionById.');
        }
        if (requestParameters.scheduledTransactionId === null || requestParameters.scheduledTransactionId === undefined) {
            throw new runtime.RequiredError('scheduledTransactionId', 'Required parameter requestParameters.scheduledTransactionId was null or undefined when calling getScheduledTransactionById.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Accept'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"scheduled_transaction_id"}}`, encodeURIComponent(String(requestParameters.scheduledTransactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ScheduledTransactionResponseFromJSON)(jsonValue));
    }
    /**
     * Returns a single scheduled transaction
     * Single scheduled transaction
     */
    async getScheduledTransactionById(budgetId, scheduledTransactionId, initOverrides) {
        const response = await this.getScheduledTransactionByIdRaw({ budgetId: budgetId, scheduledTransactionId: scheduledTransactionId }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all scheduled transactions
     * List scheduled transactions
     */
    async getScheduledTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getScheduledTransactions.');
        }
        const queryParameters = {};
        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }
        const headerParameters = {};
        headerParameters['Accept'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/scheduled_transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ScheduledTransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all scheduled transactions
     * List scheduled transactions
     */
    async getScheduledTransactions(budgetId, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getScheduledTransactionsRaw({ budgetId: budgetId, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
}
exports.ScheduledTransactionsApi = ScheduledTransactionsApi;