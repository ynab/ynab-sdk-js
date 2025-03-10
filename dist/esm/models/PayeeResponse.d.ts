/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
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
export declare function instanceOfPayeeResponse(value: object): value is PayeeResponse;
export declare function PayeeResponseFromJSON(json: any): PayeeResponse;
export declare function PayeeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeResponse;
export declare function PayeeResponseToJSON(json: any): PayeeResponse;
export declare function PayeeResponseToJSONTyped(value?: PayeeResponse | null, ignoreDiscriminator?: boolean): any;
