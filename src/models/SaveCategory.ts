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
/**
 * 
 * @export
 * @interface SaveCategory
 */
export interface SaveCategory {
    /**
     * 
     * @type {string}
     * @memberof SaveCategory
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveCategory
     */
    note?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveCategory
     */
    category_group_id?: string;
}

/**
 * Check if a given object implements the SaveCategory interface.
 */
export function instanceOfSaveCategory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SaveCategoryFromJSON(json: any): SaveCategory {
    return SaveCategoryFromJSONTyped(json, false);
}

export function SaveCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'category_group_id': !exists(json, 'category_group_id') ? undefined : json['category_group_id'],
    };
}

export function SaveCategoryToJSON(value?: SaveCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'note': value.note,
        'category_group_id': value.category_group_id,
    };
}

