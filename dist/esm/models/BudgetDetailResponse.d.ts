/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { BudgetDetailResponseData } from './BudgetDetailResponseData';
/**
 *
 * @export
 * @interface BudgetDetailResponse
 */
export interface BudgetDetailResponse {
    /**
     *
     * @type {BudgetDetailResponseData}
     * @memberof BudgetDetailResponse
     */
    data: BudgetDetailResponseData;
}
/**
 * Check if a given object implements the BudgetDetailResponse interface.
 */
export declare function instanceOfBudgetDetailResponse(value: object): value is BudgetDetailResponse;
export declare function BudgetDetailResponseFromJSON(json: any): BudgetDetailResponse;
export declare function BudgetDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetDetailResponse;
export declare function BudgetDetailResponseToJSON(json: any): BudgetDetailResponse;
export declare function BudgetDetailResponseToJSONTyped(value?: BudgetDetailResponse | null, ignoreDiscriminator?: boolean): any;
