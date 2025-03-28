/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { MonthDetailResponseData } from './MonthDetailResponseData';
/**
 *
 * @export
 * @interface MonthDetailResponse
 */
export interface MonthDetailResponse {
    /**
     *
     * @type {MonthDetailResponseData}
     * @memberof MonthDetailResponse
     */
    data: MonthDetailResponseData;
}
/**
 * Check if a given object implements the MonthDetailResponse interface.
 */
export declare function instanceOfMonthDetailResponse(value: object): value is MonthDetailResponse;
export declare function MonthDetailResponseFromJSON(json: any): MonthDetailResponse;
export declare function MonthDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthDetailResponse;
export declare function MonthDetailResponseToJSON(json: any): MonthDetailResponse;
export declare function MonthDetailResponseToJSONTyped(value?: MonthDetailResponse | null, ignoreDiscriminator?: boolean): any;
