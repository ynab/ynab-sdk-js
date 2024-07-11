/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { Payee } from './Payee';
/**
 *
 * @export
 * @interface PayeeResponseData
 */
export interface PayeeResponseData {
    /**
     *
     * @type {Payee}
     * @memberof PayeeResponseData
     */
    payee: Payee;
}
/**
 * Check if a given object implements the PayeeResponseData interface.
 */
export declare function instanceOfPayeeResponseData(value: object): value is PayeeResponseData;
export declare function PayeeResponseDataFromJSON(json: any): PayeeResponseData;
export declare function PayeeResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeResponseData;
export declare function PayeeResponseDataToJSON(value?: PayeeResponseData | null): any;
