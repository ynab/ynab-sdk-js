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

import { exists, mapValues } from '../runtime';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';

/**
 * 
 * @export
 * @interface CategoryResponseData
 */
export interface CategoryResponseData {
    /**
     * 
     * @type {Category}
     * @memberof CategoryResponseData
     */
    category: Category;
}

/**
 * Check if a given object implements the CategoryResponseData interface.
 */
export function instanceOfCategoryResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "category" in value;

    return isInstance;
}

export function CategoryResponseDataFromJSON(json: any): CategoryResponseData {
    return CategoryResponseDataFromJSONTyped(json, false);
}

export function CategoryResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': CategoryFromJSON(json['category']),
    };
}

export function CategoryResponseDataToJSON(value?: CategoryResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': CategoryToJSON(value.category),
    };
}

