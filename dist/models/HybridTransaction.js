"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HybridTransactionToJSON = exports.HybridTransactionFromJSONTyped = exports.HybridTransactionFromJSON = exports.instanceOfHybridTransaction = exports.HybridTransactionTypeEnum = exports.HybridTransactionDebtTransactionTypeEnum = exports.HybridTransactionFlagColorEnum = exports.HybridTransactionClearedEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.HybridTransactionClearedEnum = {
    Cleared: 'cleared',
    Uncleared: 'uncleared',
    Reconciled: 'reconciled'
};
/**
 * @export
 */
exports.HybridTransactionFlagColorEnum = {
    Red: 'red',
    Orange: 'orange',
    Yellow: 'yellow',
    Green: 'green',
    Blue: 'blue',
    Purple: 'purple',
    Null: 'null'
};
/**
 * @export
 */
exports.HybridTransactionDebtTransactionTypeEnum = {
    Payment: 'payment',
    Refund: 'refund',
    Fee: 'fee',
    Interest: 'interest',
    Escrow: 'escrow',
    BalancedAdjustment: 'balancedAdjustment',
    Credit: 'credit',
    Charge: 'charge',
    Null: 'null'
};
/**
 * @export
 */
exports.HybridTransactionTypeEnum = {
    Transaction: 'transaction',
    Subtransaction: 'subtransaction'
};
/**
 * Check if a given object implements the HybridTransaction interface.
 */
function instanceOfHybridTransaction(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "cleared" in value;
    isInstance = isInstance && "approved" in value;
    isInstance = isInstance && "account_id" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "account_name" in value;
    return isInstance;
}
exports.instanceOfHybridTransaction = instanceOfHybridTransaction;
function HybridTransactionFromJSON(json) {
    return HybridTransactionFromJSONTyped(json, false);
}
exports.HybridTransactionFromJSON = HybridTransactionFromJSON;
function HybridTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'date': json['date'],
        'amount': json['amount'],
        'memo': !(0, runtime_1.exists)(json, 'memo') ? undefined : json['memo'],
        'cleared': json['cleared'],
        'approved': json['approved'],
        'flag_color': !(0, runtime_1.exists)(json, 'flag_color') ? undefined : json['flag_color'],
        'account_id': json['account_id'],
        'payee_id': !(0, runtime_1.exists)(json, 'payee_id') ? undefined : json['payee_id'],
        'category_id': !(0, runtime_1.exists)(json, 'category_id') ? undefined : json['category_id'],
        'transfer_account_id': !(0, runtime_1.exists)(json, 'transfer_account_id') ? undefined : json['transfer_account_id'],
        'transfer_transaction_id': !(0, runtime_1.exists)(json, 'transfer_transaction_id') ? undefined : json['transfer_transaction_id'],
        'matched_transaction_id': !(0, runtime_1.exists)(json, 'matched_transaction_id') ? undefined : json['matched_transaction_id'],
        'import_id': !(0, runtime_1.exists)(json, 'import_id') ? undefined : json['import_id'],
        'import_payee_name': !(0, runtime_1.exists)(json, 'import_payee_name') ? undefined : json['import_payee_name'],
        'import_payee_name_original': !(0, runtime_1.exists)(json, 'import_payee_name_original') ? undefined : json['import_payee_name_original'],
        'debt_transaction_type': !(0, runtime_1.exists)(json, 'debt_transaction_type') ? undefined : json['debt_transaction_type'],
        'deleted': json['deleted'],
        'type': json['type'],
        'parent_transaction_id': !(0, runtime_1.exists)(json, 'parent_transaction_id') ? undefined : json['parent_transaction_id'],
        'account_name': json['account_name'],
        'payee_name': !(0, runtime_1.exists)(json, 'payee_name') ? undefined : json['payee_name'],
        'category_name': !(0, runtime_1.exists)(json, 'category_name') ? undefined : json['category_name'],
    };
}
exports.HybridTransactionFromJSONTyped = HybridTransactionFromJSONTyped;
function HybridTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'date': value.date,
        'amount': value.amount,
        'memo': value.memo,
        'cleared': value.cleared,
        'approved': value.approved,
        'flag_color': value.flag_color,
        'account_id': value.account_id,
        'payee_id': value.payee_id,
        'category_id': value.category_id,
        'transfer_account_id': value.transfer_account_id,
        'transfer_transaction_id': value.transfer_transaction_id,
        'matched_transaction_id': value.matched_transaction_id,
        'import_id': value.import_id,
        'import_payee_name': value.import_payee_name,
        'import_payee_name_original': value.import_payee_name_original,
        'debt_transaction_type': value.debt_transaction_type,
        'deleted': value.deleted,
        'type': value.type,
        'parent_transaction_id': value.parent_transaction_id,
        'account_name': value.account_name,
        'payee_name': value.payee_name,
        'category_name': value.category_name,
    };
}
exports.HybridTransactionToJSON = HybridTransactionToJSON;
