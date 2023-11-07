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
  ErrorResponse,
  PayeeLocationResponse,
  PayeeLocationsResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PayeeLocationResponseFromJSON,
    PayeeLocationResponseToJSON,
    PayeeLocationsResponseFromJSON,
    PayeeLocationsResponseToJSON,
} from '../models/index';

export interface GetPayeeLocationByIdRequest {
    budgetId: string;
    payeeLocationId: string;
}

export interface GetPayeeLocationsRequest {
    budgetId: string;
}

export interface GetPayeeLocationsByPayeeRequest {
    budgetId: string;
    payeeId: string;
}

/**
 * 
 */
export class PayeeLocationsApi extends runtime.BaseAPI {

    /**
     * Returns a single payee location
     * Single payee location
     */
    async getPayeeLocationByIdRaw(requestParameters: GetPayeeLocationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayeeLocationResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getPayeeLocationById.');
        }

        if (requestParameters.payeeLocationId === null || requestParameters.payeeLocationId === undefined) {
            throw new runtime.RequiredError('payeeLocationId','Required parameter requestParameters.payeeLocationId was null or undefined when calling getPayeeLocationById.');
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
            path: `/budgets/{budget_id}/payee_locations/{payee_location_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"payee_location_id"}}`, encodeURIComponent(String(requestParameters.payeeLocationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayeeLocationResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single payee location
     * Single payee location
     */
    async getPayeeLocationById(budgetId: string, payeeLocationId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayeeLocationResponse> {
        const response = await this.getPayeeLocationByIdRaw({ budgetId: budgetId, payeeLocationId: payeeLocationId }, initOverrides);
        return await response.value();
    }

    /**
     * Returns all payee locations
     * List payee locations
     */
    async getPayeeLocationsRaw(requestParameters: GetPayeeLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayeeLocationsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getPayeeLocations.');
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
            path: `/budgets/{budget_id}/payee_locations`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayeeLocationsResponseFromJSON(jsonValue));
    }

    /**
     * Returns all payee locations
     * List payee locations
     */
    async getPayeeLocations(budgetId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayeeLocationsResponse> {
        const response = await this.getPayeeLocationsRaw({ budgetId: budgetId }, initOverrides);
        return await response.value();
    }

    /**
     * Returns all payee locations for a specified payee
     * List locations for a payee
     */
    async getPayeeLocationsByPayeeRaw(requestParameters: GetPayeeLocationsByPayeeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayeeLocationsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getPayeeLocationsByPayee.');
        }

        if (requestParameters.payeeId === null || requestParameters.payeeId === undefined) {
            throw new runtime.RequiredError('payeeId','Required parameter requestParameters.payeeId was null or undefined when calling getPayeeLocationsByPayee.');
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
            path: `/budgets/{budget_id}/payees/{payee_id}/payee_locations`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"payee_id"}}`, encodeURIComponent(String(requestParameters.payeeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayeeLocationsResponseFromJSON(jsonValue));
    }

    /**
     * Returns all payee locations for a specified payee
     * List locations for a payee
     */
    async getPayeeLocationsByPayee(budgetId: string, payeeId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayeeLocationsResponse> {
        const response = await this.getPayeeLocationsByPayeeRaw({ budgetId: budgetId, payeeId: payeeId }, initOverrides);
        return await response.value();
    }

}