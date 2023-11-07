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
import type { CategoriesResponse, CategoryResponse, PatchCategoryWrapper, PatchMonthCategoryWrapper, SaveCategoryResponse } from '../models/index';
export interface GetCategoriesRequest {
    budgetId: string;
    lastKnowledgeOfServer?: number;
}
export interface GetCategoryByIdRequest {
    budgetId: string;
    categoryId: string;
}
export interface GetMonthCategoryByIdRequest {
    budgetId: string;
    month: string;
    categoryId: string;
}
export interface UpdateCategoryRequest {
    budgetId: string;
    categoryId: string;
    data: PatchCategoryWrapper;
}
export interface UpdateMonthCategoryRequest {
    budgetId: string;
    month: string;
    categoryId: string;
    data: PatchMonthCategoryWrapper;
}
/**
 *
 */
export declare class CategoriesApi extends runtime.BaseAPI {
    /**
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * List categories
     */
    getCategoriesRaw(requestParameters: GetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoriesResponse>>;
    /**
     * Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * List categories
     */
    getCategories(budgetId: string, lastKnowledgeOfServer?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoriesResponse>;
    /**
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category
     */
    getCategoryByIdRaw(requestParameters: GetCategoryByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryResponse>>;
    /**
     * Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category
     */
    getCategoryById(budgetId: string, categoryId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryResponse>;
    /**
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category for a specific budget month
     */
    getMonthCategoryByIdRaw(requestParameters: GetMonthCategoryByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryResponse>>;
    /**
     * Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * Single category for a specific budget month
     */
    getMonthCategoryById(budgetId: string, month: string, categoryId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryResponse>;
    /**
     * Update a category
     * Update a category
     */
    updateCategoryRaw(requestParameters: UpdateCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SaveCategoryResponse>>;
    /**
     * Update a category
     * Update a category
     */
    updateCategory(budgetId: string, categoryId: string, data: PatchCategoryWrapper, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SaveCategoryResponse>;
    /**
     * Update a category for a specific month.  Only `budgeted` amount can be updated.
     * Update a category for a specific month
     */
    updateMonthCategoryRaw(requestParameters: UpdateMonthCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SaveCategoryResponse>>;
    /**
     * Update a category for a specific month.  Only `budgeted` amount can be updated.
     * Update a category for a specific month
     */
    updateMonthCategory(budgetId: string, month: string, categoryId: string, data: PatchMonthCategoryWrapper, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SaveCategoryResponse>;
}