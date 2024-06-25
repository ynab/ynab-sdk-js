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
import type { BudgetSettingsResponseData } from './BudgetSettingsResponseData';
/**
 *
 * @export
 * @interface BudgetSettingsResponse
 */
export interface BudgetSettingsResponse {
    /**
     *
     * @type {BudgetSettingsResponseData}
     * @memberof BudgetSettingsResponse
     */
    data: BudgetSettingsResponseData;
}
/**
 * Check if a given object implements the BudgetSettingsResponse interface.
 */
export declare function instanceOfBudgetSettingsResponse(value: object): value is BudgetSettingsResponse;
export declare function BudgetSettingsResponseFromJSON(json: any): BudgetSettingsResponse;
export declare function BudgetSettingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetSettingsResponse;
export declare function BudgetSettingsResponseToJSON(value?: BudgetSettingsResponse | null): any;
