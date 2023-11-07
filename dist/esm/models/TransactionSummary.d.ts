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
import type { TransactionClearedStatus } from './TransactionClearedStatus';
import type { TransactionFlagColor } from './TransactionFlagColor';
/**
 *
 * @export
 * @interface TransactionSummary
 */
export interface TransactionSummary {
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    id: string;
    /**
     * The transaction date in ISO format (e.g. 2016-12-01)
     * @type {string}
     * @memberof TransactionSummary
     */
    date: string;
    /**
     * The transaction amount in milliunits format
     * @type {number}
     * @memberof TransactionSummary
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    memo?: string | null;
    /**
     *
     * @type {TransactionClearedStatus}
     * @memberof TransactionSummary
     */
    cleared: TransactionClearedStatus;
    /**
     * Whether or not the transaction is approved
     * @type {boolean}
     * @memberof TransactionSummary
     */
    approved: boolean;
    /**
     *
     * @type {TransactionFlagColor}
     * @memberof TransactionSummary
     */
    flag_color?: TransactionFlagColor | null;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    payee_id?: string | null;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    category_id?: string | null;
    /**
     * If a transfer transaction, the account to which it transfers
     * @type {string}
     * @memberof TransactionSummary
     */
    transfer_account_id?: string | null;
    /**
     * If a transfer transaction, the id of transaction on the other side of the transfer
     * @type {string}
     * @memberof TransactionSummary
     */
    transfer_transaction_id?: string | null;
    /**
     * If transaction is matched, the id of the matched transaction
     * @type {string}
     * @memberof TransactionSummary
     */
    matched_transaction_id?: string | null;
    /**
     * If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
     * @type {string}
     * @memberof TransactionSummary
     */
    import_id?: string | null;
    /**
     * If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules
     * @type {string}
     * @memberof TransactionSummary
     */
    import_payee_name?: string | null;
    /**
     * If the transaction was imported, the original payee name as it appeared on the statement
     * @type {string}
     * @memberof TransactionSummary
     */
    import_payee_name_original?: string | null;
    /**
     * If the transaction is a debt/loan account transaction, the type of transaction
     * @type {string}
     * @memberof TransactionSummary
     */
    debt_transaction_type?: TransactionSummaryDebtTransactionTypeEnum;
    /**
     * Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.
     * @type {boolean}
     * @memberof TransactionSummary
     */
    deleted: boolean;
}
/**
 * @export
 */
export declare const TransactionSummaryDebtTransactionTypeEnum: {
    readonly Payment: "payment";
    readonly Refund: "refund";
    readonly Fee: "fee";
    readonly Interest: "interest";
    readonly Escrow: "escrow";
    readonly BalanceAdjustment: "balanceAdjustment";
    readonly Credit: "credit";
    readonly Charge: "charge";
};
export declare type TransactionSummaryDebtTransactionTypeEnum = typeof TransactionSummaryDebtTransactionTypeEnum[keyof typeof TransactionSummaryDebtTransactionTypeEnum];
/**
 * Check if a given object implements the TransactionSummary interface.
 */
export declare function instanceOfTransactionSummary(value: object): boolean;
export declare function TransactionSummaryFromJSON(json: any): TransactionSummary;
export declare function TransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSummary;
export declare function TransactionSummaryToJSON(value?: TransactionSummary | null): any;
