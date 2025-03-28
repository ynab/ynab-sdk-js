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
 * @interface PayeesResponseData
 */
export interface PayeesResponseData {
    /**
     *
     * @type {Array<Payee>}
     * @memberof PayeesResponseData
     */
    payees: Array<Payee>;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof PayeesResponseData
     */
    server_knowledge: number;
}
/**
 * Check if a given object implements the PayeesResponseData interface.
 */
export declare function instanceOfPayeesResponseData(value: object): value is PayeesResponseData;
export declare function PayeesResponseDataFromJSON(json: any): PayeesResponseData;
export declare function PayeesResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeesResponseData;
export declare function PayeesResponseDataToJSON(json: any): PayeesResponseData;
export declare function PayeesResponseDataToJSONTyped(value?: PayeesResponseData | null, ignoreDiscriminator?: boolean): any;
