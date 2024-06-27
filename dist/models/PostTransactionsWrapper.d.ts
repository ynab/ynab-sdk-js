/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { NewTransaction } from './NewTransaction';
/**
 *
 * @export
 * @interface PostTransactionsWrapper
 */
export interface PostTransactionsWrapper {
    /**
     *
     * @type {NewTransaction}
     * @memberof PostTransactionsWrapper
     */
    transaction?: NewTransaction;
    /**
     *
     * @type {Array<NewTransaction>}
     * @memberof PostTransactionsWrapper
     */
    transactions?: Array<NewTransaction>;
}
/**
 * Check if a given object implements the PostTransactionsWrapper interface.
 */
export declare function instanceOfPostTransactionsWrapper(value: object): value is PostTransactionsWrapper;
export declare function PostTransactionsWrapperFromJSON(json: any): PostTransactionsWrapper;
export declare function PostTransactionsWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostTransactionsWrapper;
export declare function PostTransactionsWrapperToJSON(value?: PostTransactionsWrapper | null): any;
