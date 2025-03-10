/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
    CategoryToJSONTyped,
} from './Category';

/**
 * 
 * @export
 * @interface CategoryGroupWithCategories
 */
export interface CategoryGroupWithCategories {
    /**
     * 
     * @type {string}
     * @memberof CategoryGroupWithCategories
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryGroupWithCategories
     */
    name: string;
    /**
     * Whether or not the category group is hidden
     * @type {boolean}
     * @memberof CategoryGroupWithCategories
     */
    hidden: boolean;
    /**
     * Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.
     * @type {boolean}
     * @memberof CategoryGroupWithCategories
     */
    deleted: boolean;
    /**
     * Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * @type {Array<Category>}
     * @memberof CategoryGroupWithCategories
     */
    categories: Array<Category>;
}

/**
 * Check if a given object implements the CategoryGroupWithCategories interface.
 */
export function instanceOfCategoryGroupWithCategories(value: object): value is CategoryGroupWithCategories {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('hidden' in value) || value['hidden'] === undefined) return false;
    if (!('deleted' in value) || value['deleted'] === undefined) return false;
    if (!('categories' in value) || value['categories'] === undefined) return false;
    return true;
}

export function CategoryGroupWithCategoriesFromJSON(json: any): CategoryGroupWithCategories {
    return CategoryGroupWithCategoriesFromJSONTyped(json, false);
}

export function CategoryGroupWithCategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryGroupWithCategories {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'hidden': json['hidden'],
        'deleted': json['deleted'],
        'categories': ((json['categories'] as Array<any>).map(CategoryFromJSON)),
    };
}

export function CategoryGroupWithCategoriesToJSON(json: any): CategoryGroupWithCategories {
    return CategoryGroupWithCategoriesToJSONTyped(json, false);
}

export function CategoryGroupWithCategoriesToJSONTyped(value?: CategoryGroupWithCategories | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'hidden': value['hidden'],
        'deleted': value['deleted'],
        'categories': ((value['categories'] as Array<any>).map(CategoryToJSON)),
    };
}

