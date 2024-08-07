"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayeeLocationsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class PayeeLocationsApi extends runtime.BaseAPI {
    /**
     * Returns a single payee location
     * Single payee location
     */
    async getPayeeLocationByIdRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getPayeeLocationById.');
        }
        if (requestParameters.payeeLocationId === null || requestParameters.payeeLocationId === undefined) {
            throw new runtime.RequiredError('payeeLocationId', 'Required parameter requestParameters.payeeLocationId was null or undefined when calling getPayeeLocationById.');
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
            path: `/budgets/{budget_id}/payee_locations/{payee_location_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"payee_location_id"}}`, encodeURIComponent(String(requestParameters.payeeLocationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PayeeLocationResponseFromJSON)(jsonValue));
    }
    /**
     * Returns a single payee location
     * Single payee location
     */
    async getPayeeLocationById(budgetId, payeeLocationId, initOverrides) {
        const response = await this.getPayeeLocationByIdRaw({ budgetId: budgetId, payeeLocationId: payeeLocationId }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all payee locations
     * List payee locations
     */
    async getPayeeLocationsRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getPayeeLocations.');
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
            path: `/budgets/{budget_id}/payee_locations`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PayeeLocationsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all payee locations
     * List payee locations
     */
    async getPayeeLocations(budgetId, initOverrides) {
        const response = await this.getPayeeLocationsRaw({ budgetId: budgetId }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all payee locations for a specified payee
     * List locations for a payee
     */
    async getPayeeLocationsByPayeeRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getPayeeLocationsByPayee.');
        }
        if (requestParameters.payeeId === null || requestParameters.payeeId === undefined) {
            throw new runtime.RequiredError('payeeId', 'Required parameter requestParameters.payeeId was null or undefined when calling getPayeeLocationsByPayee.');
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
            path: `/budgets/{budget_id}/payees/{payee_id}/payee_locations`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"payee_id"}}`, encodeURIComponent(String(requestParameters.payeeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PayeeLocationsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all payee locations for a specified payee
     * List locations for a payee
     */
    async getPayeeLocationsByPayee(budgetId, payeeId, initOverrides) {
        const response = await this.getPayeeLocationsByPayeeRaw({ budgetId: budgetId, payeeId: payeeId }, initOverrides);
        return await response.value();
    }
}
exports.PayeeLocationsApi = PayeeLocationsApi;
