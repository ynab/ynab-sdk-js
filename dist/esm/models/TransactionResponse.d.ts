/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { TransactionResponseData } from './TransactionResponseData';
/**
 *
 * @export
 * @interface TransactionResponse
 */
export interface TransactionResponse {
    /**
     *
     * @type {TransactionResponseData}
     * @memberof TransactionResponse
     */
    data: TransactionResponseData;
}
/**
 * Check if a given object implements the TransactionResponse interface.
 */
export declare function instanceOfTransactionResponse(value: object): value is TransactionResponse;
export declare function TransactionResponseFromJSON(json: any): TransactionResponse;
export declare function TransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResponse;
export declare function TransactionResponseToJSON(json: any): TransactionResponse;
export declare function TransactionResponseToJSONTyped(value?: TransactionResponse | null, ignoreDiscriminator?: boolean): any;
