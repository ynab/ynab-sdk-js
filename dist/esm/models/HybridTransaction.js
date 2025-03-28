/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { TransactionFlagColorFromJSON, TransactionFlagColorToJSON, } from './TransactionFlagColor';
import { TransactionClearedStatusFromJSON, TransactionClearedStatusToJSON, } from './TransactionClearedStatus';
/**
 * @export
 */
export var HybridTransactionDebtTransactionTypeEnum = {
    Payment: 'payment',
    Refund: 'refund',
    Fee: 'fee',
    Interest: 'interest',
    Escrow: 'escrow',
    BalanceAdjustment: 'balanceAdjustment',
    Credit: 'credit',
    Charge: 'charge'
};
/**
 * @export
 */
export var HybridTransactionTypeEnum = {
    Transaction: 'transaction',
    Subtransaction: 'subtransaction'
};
/**
 * Check if a given object implements the HybridTransaction interface.
 */
export function instanceOfHybridTransaction(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('date' in value) || value['date'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('cleared' in value) || value['cleared'] === undefined)
        return false;
    if (!('approved' in value) || value['approved'] === undefined)
        return false;
    if (!('account_id' in value) || value['account_id'] === undefined)
        return false;
    if (!('deleted' in value) || value['deleted'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('account_name' in value) || value['account_name'] === undefined)
        return false;
    return true;
}
export function HybridTransactionFromJSON(json) {
    return HybridTransactionFromJSONTyped(json, false);
}
export function HybridTransactionFromJSONTyped(json, ignoreDiscriminator) {
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
        'type': json['type'],
        'parent_transaction_id': json['parent_transaction_id'] == null ? undefined : json['parent_transaction_id'],
        'account_name': json['account_name'],
        'payee_name': json['payee_name'] == null ? undefined : json['payee_name'],
        'category_name': json['category_name'] == null ? undefined : json['category_name'],
    };
}
export function HybridTransactionToJSON(json) {
    return HybridTransactionToJSONTyped(json, false);
}
export function HybridTransactionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
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
        'type': value['type'],
        'parent_transaction_id': value['parent_transaction_id'],
        'account_name': value['account_name'],
        'payee_name': value['payee_name'],
        'category_name': value['category_name'],
    };
}
