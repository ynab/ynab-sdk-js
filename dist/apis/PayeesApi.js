"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayeesApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class PayeesApi extends runtime.BaseAPI {
    /**
     * Returns a single payee
     * Single payee
     */
    async getPayeeByIdRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getPayeeById.');
        }
        if (requestParameters.payeeId === null || requestParameters.payeeId === undefined) {
            throw new runtime.RequiredError('payeeId', 'Required parameter requestParameters.payeeId was null or undefined when calling getPayeeById.');
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
            path: `/budgets/{budget_id}/payees/{payee_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"payee_id"}}`, encodeURIComponent(String(requestParameters.payeeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PayeeResponseFromJSON)(jsonValue));
    }
    /**
     * Returns a single payee
     * Single payee
     */
    async getPayeeById(budgetId, payeeId, initOverrides) {
        const response = await this.getPayeeByIdRaw({ budgetId: budgetId, payeeId: payeeId }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all payees
     * List payees
     */
    async getPayeesRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getPayees.');
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
            path: `/budgets/{budget_id}/payees`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PayeesResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all payees
     * List payees
     */
    async getPayees(budgetId, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getPayeesRaw({ budgetId: budgetId, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
    /**
     * Update a payee
     * Update a payee
     */
    async updatePayeeRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling updatePayee.');
        }
        if (requestParameters.payeeId === null || requestParameters.payeeId === undefined) {
            throw new runtime.RequiredError('payeeId', 'Required parameter requestParameters.payeeId was null or undefined when calling updatePayee.');
        }
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling updatePayee.');
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
            path: `/budgets/{budget_id}/payees/{payee_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"payee_id"}}`, encodeURIComponent(String(requestParameters.payeeId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.PatchPayeeWrapperToJSON)(requestParameters.data),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SavePayeeResponseFromJSON)(jsonValue));
    }
    /**
     * Update a payee
     * Update a payee
     */
    async updatePayee(budgetId, payeeId, data, initOverrides) {
        const response = await this.updatePayeeRaw({ budgetId: budgetId, payeeId: payeeId, data: data }, initOverrides);
        return await response.value();
    }
}
exports.PayeesApi = PayeesApi;
