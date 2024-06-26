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
import type { ScheduledTransactionDetail } from './ScheduledTransactionDetail';
/**
 *
 * @export
 * @interface ScheduledTransactionResponseData
 */
export interface ScheduledTransactionResponseData {
    /**
     *
     * @type {ScheduledTransactionDetail}
     * @memberof ScheduledTransactionResponseData
     */
    scheduled_transaction: ScheduledTransactionDetail;
}
/**
 * Check if a given object implements the ScheduledTransactionResponseData interface.
 */
export declare function instanceOfScheduledTransactionResponseData(value: object): value is ScheduledTransactionResponseData;
export declare function ScheduledTransactionResponseDataFromJSON(json: any): ScheduledTransactionResponseData;
export declare function ScheduledTransactionResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransactionResponseData;
export declare function ScheduledTransactionResponseDataToJSON(value?: ScheduledTransactionResponseData | null): any;
