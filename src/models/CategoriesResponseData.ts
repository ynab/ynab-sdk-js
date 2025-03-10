/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { CategoryGroupWithCategories } from './CategoryGroupWithCategories';
import {
    CategoryGroupWithCategoriesFromJSON,
    CategoryGroupWithCategoriesFromJSONTyped,
    CategoryGroupWithCategoriesToJSON,
    CategoryGroupWithCategoriesToJSONTyped,
} from './CategoryGroupWithCategories';

/**
 * 
 * @export
 * @interface CategoriesResponseData
 */
export interface CategoriesResponseData {
    /**
     * 
     * @type {Array<CategoryGroupWithCategories>}
     * @memberof CategoriesResponseData
     */
    category_groups: Array<CategoryGroupWithCategories>;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof CategoriesResponseData
     */
    server_knowledge: number;
}

/**
 * Check if a given object implements the CategoriesResponseData interface.
 */
export function instanceOfCategoriesResponseData(value: object): value is CategoriesResponseData {
    if (!('category_groups' in value) || value['category_groups'] === undefined) return false;
    if (!('server_knowledge' in value) || value['server_knowledge'] === undefined) return false;
    return true;
}

export function CategoriesResponseDataFromJSON(json: any): CategoriesResponseData {
    return CategoriesResponseDataFromJSONTyped(json, false);
}

export function CategoriesResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'category_groups': ((json['category_groups'] as Array<any>).map(CategoryGroupWithCategoriesFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}

export function CategoriesResponseDataToJSON(json: any): CategoriesResponseData {
    return CategoriesResponseDataToJSONTyped(json, false);
}

export function CategoriesResponseDataToJSONTyped(value?: CategoriesResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'category_groups': ((value['category_groups'] as Array<any>).map(CategoryGroupWithCategoriesToJSON)),
        'server_knowledge': value['server_knowledge'],
    };
}

