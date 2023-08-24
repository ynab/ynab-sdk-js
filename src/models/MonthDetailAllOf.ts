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
 * @interface MonthDetailAllOf
 */
export interface MonthDetailAllOf {
    /**
     * The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.
     * @type {Array<Category>}
     * @memberof MonthDetailAllOf
     */
    categories: Array<Category>;
}

/**
 * Check if a given object implements the MonthDetailAllOf interface.
 */
export function instanceOfMonthDetailAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "categories" in value;

    return isInstance;
}

export function MonthDetailAllOfFromJSON(json: any): MonthDetailAllOf {
    return MonthDetailAllOfFromJSONTyped(json, false);
}

export function MonthDetailAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthDetailAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categories': ((json['categories'] as Array<any>).map(CategoryFromJSON)),
    };
}

export function MonthDetailAllOfToJSON(value?: MonthDetailAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categories': ((value.categories as Array<any>).map(CategoryToJSON)),
    };
}

