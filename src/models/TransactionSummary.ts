/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { TransactionFlagColor } from './TransactionFlagColor';
import {
    TransactionFlagColorFromJSON,
    TransactionFlagColorFromJSONTyped,
    TransactionFlagColorToJSON,
    TransactionFlagColorToJSONTyped,
} from './TransactionFlagColor';
import type { TransactionClearedStatus } from './TransactionClearedStatus';
import {
    TransactionClearedStatusFromJSON,
    TransactionClearedStatusFromJSONTyped,
    TransactionClearedStatusToJSON,
    TransactionClearedStatusToJSONTyped,
} from './TransactionClearedStatus';

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
     * The customized name of a transaction flag
     * @type {string}
     * @memberof TransactionSummary
     */
    flag_name?: string | null;
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
    debt_transaction_type?: TransactionSummaryDebtTransactionTypeEnum | null;
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
export const TransactionSummaryDebtTransactionTypeEnum = {
    Payment: 'payment',
    Refund: 'refund',
    Fee: 'fee',
    Interest: 'interest',
    Escrow: 'escrow',
    BalanceAdjustment: 'balanceAdjustment',
    Credit: 'credit',
    Charge: 'charge'
} as const;
export type TransactionSummaryDebtTransactionTypeEnum = typeof TransactionSummaryDebtTransactionTypeEnum[keyof typeof TransactionSummaryDebtTransactionTypeEnum];


/**
 * Check if a given object implements the TransactionSummary interface.
 */
export function instanceOfTransactionSummary(value: object): value is TransactionSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('cleared' in value) || value['cleared'] === undefined) return false;
    if (!('approved' in value) || value['approved'] === undefined) return false;
    if (!('account_id' in value) || value['account_id'] === undefined) return false;
    if (!('deleted' in value) || value['deleted'] === undefined) return false;
    return true;
}

export function TransactionSummaryFromJSON(json: any): TransactionSummary {
    return TransactionSummaryFromJSONTyped(json, false);
}

export function TransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'date': json['date'],
        'amount': json['amount'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'cleared': TransactionClearedStatusFromJSON(json['cleared']),
        'approved': json['approved'],
        'flag_color': json['flag_color'] == null ? undefined : TransactionFlagColorFromJSON(json['flag_color']),
        'flag_name': json['flag_name'] == null ? undefined : json['flag_name'],
        'account_id': json['account_id'],
        'payee_id': json['payee_id'] == null ? undefined : json['payee_id'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'transfer_account_id': json['transfer_account_id'] == null ? undefined : json['transfer_account_id'],
        'transfer_transaction_id': json['transfer_transaction_id'] == null ? undefined : json['transfer_transaction_id'],
        'matched_transaction_id': json['matched_transaction_id'] == null ? undefined : json['matched_transaction_id'],
        'import_id': json['import_id'] == null ? undefined : json['import_id'],
        'import_payee_name': json['import_payee_name'] == null ? undefined : json['import_payee_name'],
        'import_payee_name_original': json['import_payee_name_original'] == null ? undefined : json['import_payee_name_original'],
        'debt_transaction_type': json['debt_transaction_type'] == null ? undefined : json['debt_transaction_type'],
        'deleted': json['deleted'],
    };
}

export function TransactionSummaryToJSON(json: any): TransactionSummary {
    return TransactionSummaryToJSONTyped(json, false);
}

export function TransactionSummaryToJSONTyped(value?: TransactionSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'date': value['date'],
        'amount': value['amount'],
        'memo': value['memo'],
        'cleared': TransactionClearedStatusToJSON(value['cleared']),
        'approved': value['approved'],
        'flag_color': TransactionFlagColorToJSON(value['flag_color']),
        'flag_name': value['flag_name'],
        'account_id': value['account_id'],
        'payee_id': value['payee_id'],
        'category_id': value['category_id'],
        'transfer_account_id': value['transfer_account_id'],
        'transfer_transaction_id': value['transfer_transaction_id'],
        'matched_transaction_id': value['matched_transaction_id'],
        'import_id': value['import_id'],
        'import_payee_name': value['import_payee_name'],
        'import_payee_name_original': value['import_payee_name_original'],
        'debt_transaction_type': value['debt_transaction_type'],
        'deleted': value['deleted'],
    };
}

