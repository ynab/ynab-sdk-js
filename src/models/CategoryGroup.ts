/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CategoryGroup
 */
export interface CategoryGroup {
    /**
     * 
     * @type {string}
     * @memberof CategoryGroup
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryGroup
     */
    name: string;
    /**
     * Whether or not the category group is hidden
     * @type {boolean}
     * @memberof CategoryGroup
     */
    hidden: boolean;
    /**
     * Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
     * @type {boolean}
     * @memberof CategoryGroup
     */
    deleted: boolean;
}

/**
 * Check if a given object implements the CategoryGroup interface.
 */
export function instanceOfCategoryGroup(value: object): value is CategoryGroup {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('hidden' in value) || value['hidden'] === undefined) return false;
    if (!('deleted' in value) || value['deleted'] === undefined) return false;
    return true;
}

export function CategoryGroupFromJSON(json: any): CategoryGroup {
    return CategoryGroupFromJSONTyped(json, false);
}

export function CategoryGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'hidden': json['hidden'],
        'deleted': json['deleted'],
    };
}

export function CategoryGroupToJSON(value?: CategoryGroup | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'hidden': value['hidden'],
        'deleted': value['deleted'],
    };
}

