/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { SaveScheduledTransaction } from './SaveScheduledTransaction';
/**
 *
 * @export
 * @interface PostScheduledTransactionWrapper
 */
export interface PostScheduledTransactionWrapper {
    /**
     *
     * @type {SaveScheduledTransaction}
     * @memberof PostScheduledTransactionWrapper
     */
    scheduled_transaction: SaveScheduledTransaction;
}
/**
 * Check if a given object implements the PostScheduledTransactionWrapper interface.
 */
export declare function instanceOfPostScheduledTransactionWrapper(value: object): value is PostScheduledTransactionWrapper;
export declare function PostScheduledTransactionWrapperFromJSON(json: any): PostScheduledTransactionWrapper;
export declare function PostScheduledTransactionWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostScheduledTransactionWrapper;
export declare function PostScheduledTransactionWrapperToJSON(json: any): PostScheduledTransactionWrapper;
export declare function PostScheduledTransactionWrapperToJSONTyped(value?: PostScheduledTransactionWrapper | null, ignoreDiscriminator?: boolean): any;
