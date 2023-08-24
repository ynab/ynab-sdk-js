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
import type { ScheduledSubTransaction } from './ScheduledSubTransaction';
/**
 *
 * @export
 * @interface ScheduledTransactionDetailAllOf
 */
export interface ScheduledTransactionDetailAllOf {
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetailAllOf
     */
    account_name: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetailAllOf
     */
    payee_name?: string | null;
    /**
     * The name of the category.  If a split scheduled transaction, this will be 'Split'.
     * @type {string}
     * @memberof ScheduledTransactionDetailAllOf
     */
    category_name?: string | null;
    /**
     * If a split scheduled transaction, the subtransactions.
     * @type {Array<ScheduledSubTransaction>}
     * @memberof ScheduledTransactionDetailAllOf
     */
    subtransactions: Array<ScheduledSubTransaction>;
}
/**
 * Check if a given object implements the ScheduledTransactionDetailAllOf interface.
 */
export declare function instanceOfScheduledTransactionDetailAllOf(value: object): boolean;
export declare function ScheduledTransactionDetailAllOfFromJSON(json: any): ScheduledTransactionDetailAllOf;
export declare function ScheduledTransactionDetailAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransactionDetailAllOf;
export declare function ScheduledTransactionDetailAllOfToJSON(value?: ScheduledTransactionDetailAllOf | null): any;
