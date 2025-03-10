/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
/**
 *
 * @export
 * @interface SaveMonthCategory
 */
export interface SaveMonthCategory {
    /**
     * Budgeted amount in milliunits format
     * @type {number}
     * @memberof SaveMonthCategory
     */
    budgeted: number;
}
/**
 * Check if a given object implements the SaveMonthCategory interface.
 */
export declare function instanceOfSaveMonthCategory(value: object): value is SaveMonthCategory;
export declare function SaveMonthCategoryFromJSON(json: any): SaveMonthCategory;
export declare function SaveMonthCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveMonthCategory;
export declare function SaveMonthCategoryToJSON(json: any): SaveMonthCategory;
export declare function SaveMonthCategoryToJSONTyped(value?: SaveMonthCategory | null, ignoreDiscriminator?: boolean): any;
