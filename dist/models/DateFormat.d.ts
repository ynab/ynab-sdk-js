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
/**
 * The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
 * @export
 * @interface DateFormat
 */
export interface DateFormat {
    /**
     *
     * @type {string}
     * @memberof DateFormat
     */
    format: string;
}
/**
 * Check if a given object implements the DateFormat interface.
 */
export declare function instanceOfDateFormat(value: object): value is DateFormat;
export declare function DateFormatFromJSON(json: any): DateFormat;
export declare function DateFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateFormat;
export declare function DateFormatToJSON(value?: DateFormat | null): any;
