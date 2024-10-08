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
exports.CategoriesApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class CategoriesApi extends runtime.BaseAPI {
    /**
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * List categories
     */
    async getCategoriesRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getCategories.');
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
            path: `/budgets/{budget_id}/categories`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CategoriesResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * List categories
     */
    async getCategories(budgetId, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getCategoriesRaw({ budgetId: budgetId, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
    /**
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category
     */
    async getCategoryByIdRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getCategoryById.');
        }
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId', 'Required parameter requestParameters.categoryId was null or undefined when calling getCategoryById.');
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
            path: `/budgets/{budget_id}/categories/{category_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CategoryResponseFromJSON)(jsonValue));
    }
    /**
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category
     */
    async getCategoryById(budgetId, categoryId, initOverrides) {
        const response = await this.getCategoryByIdRaw({ budgetId: budgetId, categoryId: categoryId }, initOverrides);
        return await response.value();
    }
    /**
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category for a specific budget month
     */
    async getMonthCategoryByIdRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getMonthCategoryById.');
        }
        if (requestParameters.month === null || requestParameters.month === undefined) {
            throw new runtime.RequiredError('month', 'Required parameter requestParameters.month was null or undefined when calling getMonthCategoryById.');
        }
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId', 'Required parameter requestParameters.categoryId was null or undefined when calling getMonthCategoryById.');
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
            path: `/budgets/{budget_id}/months/{month}/categories/{category_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"month"}}`, encodeURIComponent(String(requestParameters.month))).replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CategoryResponseFromJSON)(jsonValue));
    }
    /**
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category for a specific budget month
     */
    async getMonthCategoryById(budgetId, month, categoryId, initOverrides) {
        const response = await this.getMonthCategoryByIdRaw({ budgetId: budgetId, month: month, categoryId: categoryId }, initOverrides);
        return await response.value();
    }
    /**
     * Update a category
     * Update a category
     */
    async updateCategoryRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling updateCategory.');
        }
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId', 'Required parameter requestParameters.categoryId was null or undefined when calling updateCategory.');
        }
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling updateCategory.');
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
            path: `/budgets/{budget_id}/categories/{category_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.PatchCategoryWrapperToJSON)(requestParameters.data),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SaveCategoryResponseFromJSON)(jsonValue));
    }
    /**
     * Update a category
     * Update a category
     */
    async updateCategory(budgetId, categoryId, data, initOverrides) {
        const response = await this.updateCategoryRaw({ budgetId: budgetId, categoryId: categoryId, data: data }, initOverrides);
        return await response.value();
    }
    /**
     * Update a category for a specific month.  Only `budgeted` amount can be updated.
     * Update a category for a specific month
     */
    async updateMonthCategoryRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling updateMonthCategory.');
        }
        if (requestParameters.month === null || requestParameters.month === undefined) {
            throw new runtime.RequiredError('month', 'Required parameter requestParameters.month was null or undefined when calling updateMonthCategory.');
        }
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId', 'Required parameter requestParameters.categoryId was null or undefined when calling updateMonthCategory.');
        }
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling updateMonthCategory.');
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
            path: `/budgets/{budget_id}/months/{month}/categories/{category_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"month"}}`, encodeURIComponent(String(requestParameters.month))).replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.PatchMonthCategoryWrapperToJSON)(requestParameters.data),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SaveCategoryResponseFromJSON)(jsonValue));
    }
    /**
     * Update a category for a specific month.  Only `budgeted` amount can be updated.
     * Update a category for a specific month
     */
    async updateMonthCategory(budgetId, month, categoryId, data, initOverrides) {
        const response = await this.updateMonthCategoryRaw({ budgetId: budgetId, month: month, categoryId: categoryId, data: data }, initOverrides);
        return await response.value();
    }
}
exports.CategoriesApi = CategoriesApi;
