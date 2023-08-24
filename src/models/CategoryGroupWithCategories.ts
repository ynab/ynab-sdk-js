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
export function instanceOfCategoryGroupWithCategories(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "hidden" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "categories" in value;

    return isInstance;
}

export function CategoryGroupWithCategoriesFromJSON(json: any): CategoryGroupWithCategories {
    return CategoryGroupWithCategoriesFromJSONTyped(json, false);
}

export function CategoryGroupWithCategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryGroupWithCategories {
    if ((json === undefined) || (json === null)) {
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

export function CategoryGroupWithCategoriesToJSON(value?: CategoryGroupWithCategories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'hidden': value.hidden,
        'deleted': value.deleted,
        'categories': ((value.categories as Array<any>).map(CategoryToJSON)),
    };
}

