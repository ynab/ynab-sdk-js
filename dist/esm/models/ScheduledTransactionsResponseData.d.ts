/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { ScheduledTransactionDetail } from './ScheduledTransactionDetail';
/**
 *
 * @export
 * @interface ScheduledTransactionsResponseData
 */
export interface ScheduledTransactionsResponseData {
    /**
     *
     * @type {Array<ScheduledTransactionDetail>}
     * @memberof ScheduledTransactionsResponseData
     */
    scheduled_transactions: Array<ScheduledTransactionDetail>;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof ScheduledTransactionsResponseData
     */
    server_knowledge: number;
}
/**
 * Check if a given object implements the ScheduledTransactionsResponseData interface.
 */
export declare function instanceOfScheduledTransactionsResponseData(value: object): value is ScheduledTransactionsResponseData;
export declare function ScheduledTransactionsResponseDataFromJSON(json: any): ScheduledTransactionsResponseData;
export declare function ScheduledTransactionsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransactionsResponseData;
export declare function ScheduledTransactionsResponseDataToJSON(json: any): ScheduledTransactionsResponseData;
export declare function ScheduledTransactionsResponseDataToJSONTyped(value?: ScheduledTransactionsResponseData | null, ignoreDiscriminator?: boolean): any;
