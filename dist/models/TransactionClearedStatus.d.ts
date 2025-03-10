/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
/**
 * The cleared status of the transaction
 * @export
 */
export declare const TransactionClearedStatus: {
    readonly Cleared: "cleared";
    readonly Uncleared: "uncleared";
    readonly Reconciled: "reconciled";
};
export type TransactionClearedStatus = typeof TransactionClearedStatus[keyof typeof TransactionClearedStatus];
export declare function instanceOfTransactionClearedStatus(value: any): boolean;
export declare function TransactionClearedStatusFromJSON(json: any): TransactionClearedStatus;
export declare function TransactionClearedStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionClearedStatus;
export declare function TransactionClearedStatusToJSON(value?: TransactionClearedStatus | null): any;
export declare function TransactionClearedStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionClearedStatus;
