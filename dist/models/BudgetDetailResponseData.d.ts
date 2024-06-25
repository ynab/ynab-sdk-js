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
import type { BudgetDetail } from './BudgetDetail';
/**
 *
 * @export
 * @interface BudgetDetailResponseData
 */
export interface BudgetDetailResponseData {
    /**
     *
     * @type {BudgetDetail}
     * @memberof BudgetDetailResponseData
     */
    budget: BudgetDetail;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof BudgetDetailResponseData
     */
    server_knowledge: number;
}
/**
 * Check if a given object implements the BudgetDetailResponseData interface.
 */
export declare function instanceOfBudgetDetailResponseData(value: object): value is BudgetDetailResponseData;
export declare function BudgetDetailResponseDataFromJSON(json: any): BudgetDetailResponseData;
export declare function BudgetDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetDetailResponseData;
export declare function BudgetDetailResponseDataToJSON(value?: BudgetDetailResponseData | null): any;
