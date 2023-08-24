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
import type { Category } from './Category';
/**
 *
 * @export
 * @interface CategoryGroupWithCategoriesAllOf
 */
export interface CategoryGroupWithCategoriesAllOf {
    /**
     * Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
     * @type {Array<Category>}
     * @memberof CategoryGroupWithCategoriesAllOf
     */
    categories: Array<Category>;
}
/**
 * Check if a given object implements the CategoryGroupWithCategoriesAllOf interface.
 */
export declare function instanceOfCategoryGroupWithCategoriesAllOf(value: object): boolean;
export declare function CategoryGroupWithCategoriesAllOfFromJSON(json: any): CategoryGroupWithCategoriesAllOf;
export declare function CategoryGroupWithCategoriesAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryGroupWithCategoriesAllOf;
export declare function CategoryGroupWithCategoriesAllOfToJSON(value?: CategoryGroupWithCategoriesAllOf | null): any;
