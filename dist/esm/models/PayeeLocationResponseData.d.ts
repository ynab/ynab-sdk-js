/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { PayeeLocation } from './PayeeLocation';
/**
 *
 * @export
 * @interface PayeeLocationResponseData
 */
export interface PayeeLocationResponseData {
    /**
     *
     * @type {PayeeLocation}
     * @memberof PayeeLocationResponseData
     */
    payee_location: PayeeLocation;
}
/**
 * Check if a given object implements the PayeeLocationResponseData interface.
 */
export declare function instanceOfPayeeLocationResponseData(value: object): value is PayeeLocationResponseData;
export declare function PayeeLocationResponseDataFromJSON(json: any): PayeeLocationResponseData;
export declare function PayeeLocationResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeLocationResponseData;
export declare function PayeeLocationResponseDataToJSON(json: any): PayeeLocationResponseData;
export declare function PayeeLocationResponseDataToJSONTyped(value?: PayeeLocationResponseData | null, ignoreDiscriminator?: boolean): any;
