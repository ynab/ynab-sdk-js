/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { AccountsResponseData } from './AccountsResponseData';
/**
 *
 * @export
 * @interface AccountsResponse
 */
export interface AccountsResponse {
    /**
     *
     * @type {AccountsResponseData}
     * @memberof AccountsResponse
     */
    data: AccountsResponseData;
}
/**
 * Check if a given object implements the AccountsResponse interface.
 */
export declare function instanceOfAccountsResponse(value: object): value is AccountsResponse;
export declare function AccountsResponseFromJSON(json: any): AccountsResponse;
export declare function AccountsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsResponse;
export declare function AccountsResponseToJSON(json: any): AccountsResponse;
export declare function AccountsResponseToJSONTyped(value?: AccountsResponse | null, ignoreDiscriminator?: boolean): any;
