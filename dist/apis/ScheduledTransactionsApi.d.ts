/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import * as runtime from '../runtime';
import type { PostScheduledTransactionWrapper, ScheduledTransactionResponse, ScheduledTransactionsResponse } from '../models/index';
export interface CreateScheduledTransactionRequest {
    budgetId: string;
    data: PostScheduledTransactionWrapper;
}
export interface GetScheduledTransactionByIdRequest {
    budgetId: string;
    scheduledTransactionId: string;
}
export interface GetScheduledTransactionsRequest {
    budgetId: string;
    lastKnowledgeOfServer?: number;
}
/**
 *
 */
export declare class ScheduledTransactionsApi extends runtime.BaseAPI {
    /**
     * Creates a single scheduled transaction.
     * Create a single scheduled transaction
     */
    createScheduledTransactionRaw(requestParameters: CreateScheduledTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScheduledTransactionResponse>>;
    /**
     * Creates a single scheduled transaction.
     * Create a single scheduled transaction
     */
    createScheduledTransaction(budgetId: string, data: PostScheduledTransactionWrapper, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScheduledTransactionResponse>;
    /**
     * Returns a single scheduled transaction
     * Single scheduled transaction
     */
    getScheduledTransactionByIdRaw(requestParameters: GetScheduledTransactionByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScheduledTransactionResponse>>;
    /**
     * Returns a single scheduled transaction
     * Single scheduled transaction
     */
    getScheduledTransactionById(budgetId: string, scheduledTransactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScheduledTransactionResponse>;
    /**
     * Returns all scheduled transactions
     * List scheduled transactions
     */
    getScheduledTransactionsRaw(requestParameters: GetScheduledTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScheduledTransactionsResponse>>;
    /**
     * Returns all scheduled transactions
     * List scheduled transactions
     */
    getScheduledTransactions(budgetId: string, lastKnowledgeOfServer?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScheduledTransactionsResponse>;
}
