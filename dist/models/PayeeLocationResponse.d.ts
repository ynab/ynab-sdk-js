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
import type { PayeeLocationResponseData } from './PayeeLocationResponseData';
/**
 *
 * @export
 * @interface PayeeLocationResponse
 */
export interface PayeeLocationResponse {
    /**
     *
     * @type {PayeeLocationResponseData}
     * @memberof PayeeLocationResponse
     */
    data: PayeeLocationResponseData;
}
/**
 * Check if a given object implements the PayeeLocationResponse interface.
 */
export declare function instanceOfPayeeLocationResponse(value: object): boolean;
export declare function PayeeLocationResponseFromJSON(json: any): PayeeLocationResponse;
export declare function PayeeLocationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeLocationResponse;
export declare function PayeeLocationResponseToJSON(value?: PayeeLocationResponse | null): any;