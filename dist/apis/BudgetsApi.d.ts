/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { BudgetDetailResponse, BudgetSettingsResponse, BudgetSummaryResponse } from '../models/index';
export interface GetBudgetByIdRequest {
    budgetId: string;
    lastKnowledgeOfServer?: number;
}
export interface GetBudgetSettingsByIdRequest {
    budgetId: string;
}
export interface GetBudgetsRequest {
    includeAccounts?: boolean;
}
/**
 *
 */
export declare class BudgetsApi extends runtime.BaseAPI {
    /**
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     * Single budget
     */
    getBudgetByIdRaw(requestParameters: GetBudgetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BudgetDetailResponse>>;
    /**
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     * Single budget
     */
    getBudgetById(budgetId: string, lastKnowledgeOfServer?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BudgetDetailResponse>;
    /**
     * Returns settings for a budget
     * Budget Settings
     */
    getBudgetSettingsByIdRaw(requestParameters: GetBudgetSettingsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BudgetSettingsResponse>>;
    /**
     * Returns settings for a budget
     * Budget Settings
     */
    getBudgetSettingsById(budgetId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BudgetSettingsResponse>;
    /**
     * Returns budgets list with summary information
     * List budgets
     */
    getBudgetsRaw(requestParameters: GetBudgetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BudgetSummaryResponse>>;
    /**
     * Returns budgets list with summary information
     * List budgets
     */
    getBudgets(includeAccounts?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BudgetSummaryResponse>;
}
