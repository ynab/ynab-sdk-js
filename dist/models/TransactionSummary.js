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
exports.TransactionSummaryToJSON = exports.TransactionSummaryFromJSONTyped = exports.TransactionSummaryFromJSON = exports.instanceOfTransactionSummary = exports.TransactionSummaryDebtTransactionTypeEnum = void 0;
const runtime_1 = require("../runtime");
const TransactionClearedStatus_1 = require("./TransactionClearedStatus");
const TransactionFlagColor_1 = require("./TransactionFlagColor");
/**
 * @export
 */
exports.TransactionSummaryDebtTransactionTypeEnum = {
    Payment: 'payment',
    Refund: 'refund',
    Fee: 'fee',
    Interest: 'interest',
    Escrow: 'escrow',
    BalanceAdjustment: 'balanceAdjustment',
    Credit: 'credit',
    Charge: 'charge',
};
/**
 * Check if a given object implements the TransactionSummary interface.
 */
function instanceOfTransactionSummary(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "cleared" in value;
    isInstance = isInstance && "approved" in value;
    isInstance = isInstance && "account_id" in value;
    isInstance = isInstance && "deleted" in value;
    return isInstance;
}
exports.instanceOfTransactionSummary = instanceOfTransactionSummary;
function TransactionSummaryFromJSON(json) {
    return TransactionSummaryFromJSONTyped(json, false);
}
exports.TransactionSummaryFromJSON = TransactionSummaryFromJSON;
function TransactionSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'date': json['date'],
        'amount': json['amount'],
        'memo': !(0, runtime_1.exists)(json, 'memo') ? undefined : json['memo'],
        'cleared': (0, TransactionClearedStatus_1.TransactionClearedStatusFromJSON)(json['cleared']),
        'approved': json['approved'],
        'flag_color': !(0, runtime_1.exists)(json, 'flag_color') ? undefined : (0, TransactionFlagColor_1.TransactionFlagColorFromJSON)(json['flag_color']),
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
    };
}
exports.TransactionSummaryFromJSONTyped = TransactionSummaryFromJSONTyped;
function TransactionSummaryToJSON(value) {
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
        'cleared': (0, TransactionClearedStatus_1.TransactionClearedStatusToJSON)(value.cleared),
        'approved': value.approved,
        'flag_color': (0, TransactionFlagColor_1.TransactionFlagColorToJSON)(value.flag_color),
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
    };
}
exports.TransactionSummaryToJSON = TransactionSummaryToJSON;
