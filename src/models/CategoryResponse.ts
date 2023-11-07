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
import type { CategoryResponseData } from './CategoryResponseData';
import {
    CategoryResponseDataFromJSON,
    CategoryResponseDataFromJSONTyped,
    CategoryResponseDataToJSON,
} from './CategoryResponseData';

/**
 * 
 * @export
 * @interface CategoryResponse
 */
export interface CategoryResponse {
    /**
     * 
     * @type {CategoryResponseData}
     * @memberof CategoryResponse
     */
    data: CategoryResponseData;
}

/**
 * Check if a given object implements the CategoryResponse interface.
 */
export function instanceOfCategoryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CategoryResponseFromJSON(json: any): CategoryResponse {
    return CategoryResponseFromJSONTyped(json, false);
}

export function CategoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CategoryResponseDataFromJSON(json['data']),
    };
}

export function CategoryResponseToJSON(value?: CategoryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CategoryResponseDataToJSON(value.data),
    };
}
