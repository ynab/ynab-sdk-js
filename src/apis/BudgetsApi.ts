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


import * as runtime from '../runtime';
import type {
  BudgetDetailResponse,
  BudgetSettingsResponse,
  BudgetSummaryResponse,
  ErrorResponse,
} from '../models/index';
import {
    BudgetDetailResponseFromJSON,
    BudgetDetailResponseToJSON,
    BudgetSettingsResponseFromJSON,
    BudgetSettingsResponseToJSON,
    BudgetSummaryResponseFromJSON,
    BudgetSummaryResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

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
export class BudgetsApi extends runtime.BaseAPI {

    /**
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     * Single budget
     */
    async getBudgetByIdRaw(requestParameters: GetBudgetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BudgetDetailResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getBudgetById.');
        }

        const queryParameters: any = {};

        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetDetailResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     * Single budget
     */
    async getBudgetById(requestParameters: GetBudgetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BudgetDetailResponse> {
        const response = await this.getBudgetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns settings for a budget
     * Budget Settings
     */
    async getBudgetSettingsByIdRaw(requestParameters: GetBudgetSettingsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BudgetSettingsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getBudgetSettingsById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/settings`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetSettingsResponseFromJSON(jsonValue));
    }

    /**
     * Returns settings for a budget
     * Budget Settings
     */
    async getBudgetSettingsById(requestParameters: GetBudgetSettingsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BudgetSettingsResponse> {
        const response = await this.getBudgetSettingsByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns budgets list with summary information
     * List budgets
     */
    async getBudgetsRaw(requestParameters: GetBudgetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BudgetSummaryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.includeAccounts !== undefined) {
            queryParameters['include_accounts'] = requestParameters.includeAccounts;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BudgetSummaryResponseFromJSON(jsonValue));
    }

    /**
     * Returns budgets list with summary information
     * List budgets
     */
    async getBudgets(requestParameters: GetBudgetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BudgetSummaryResponse> {
        const response = await this.getBudgetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
