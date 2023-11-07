/* tslint:disable */
/* eslint-disable */
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


/**
 * The cleared status of the transaction
 * @export
 */
export const TransactionClearedStatus = {
    Cleared: 'cleared',
    Uncleared: 'uncleared',
    Reconciled: 'reconciled'
} as const;
export type TransactionClearedStatus = typeof TransactionClearedStatus[keyof typeof TransactionClearedStatus];


export function TransactionClearedStatusFromJSON(json: any): TransactionClearedStatus {
    return TransactionClearedStatusFromJSONTyped(json, false);
}

export function TransactionClearedStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionClearedStatus {
    return json as TransactionClearedStatus;
}

export function TransactionClearedStatusToJSON(value?: TransactionClearedStatus | null): any {
    return value as any;
}

