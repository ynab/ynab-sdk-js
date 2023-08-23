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
import type { PayeeResponseData } from './PayeeResponseData';
/**
 *
 * @export
 * @interface PayeeResponse
 */
export interface PayeeResponse {
    /**
     *
     * @type {PayeeResponseData}
     * @memberof PayeeResponse
     */
    data: PayeeResponseData;
}
/**
 * Check if a given object implements the PayeeResponse interface.
 */
export declare function instanceOfPayeeResponse(value: object): boolean;
export declare function PayeeResponseFromJSON(json: any): PayeeResponse;
export declare function PayeeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeResponse;
export declare function PayeeResponseToJSON(value?: PayeeResponse | null): any;
