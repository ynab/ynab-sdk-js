/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { AccountResponseData } from './AccountResponseData';
/**
 *
 * @export
 * @interface AccountResponse
 */
export interface AccountResponse {
    /**
     *
     * @type {AccountResponseData}
     * @memberof AccountResponse
     */
    data: AccountResponseData;
}
/**
 * Check if a given object implements the AccountResponse interface.
 */
export declare function instanceOfAccountResponse(value: object): value is AccountResponse;
export declare function AccountResponseFromJSON(json: any): AccountResponse;
export declare function AccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountResponse;
export declare function AccountResponseToJSON(json: any): AccountResponse;
export declare function AccountResponseToJSONTyped(value?: AccountResponse | null, ignoreDiscriminator?: boolean): any;
