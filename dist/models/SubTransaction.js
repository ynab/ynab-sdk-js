"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubTransactionToJSONTyped = exports.SubTransactionToJSON = exports.SubTransactionFromJSONTyped = exports.SubTransactionFromJSON = exports.instanceOfSubTransaction = void 0;
/**
 * Check if a given object implements the SubTransaction interface.
 */
function instanceOfSubTransaction(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('transaction_id' in value) || value['transaction_id'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('deleted' in value) || value['deleted'] === undefined)
        return false;
    return true;
}
exports.instanceOfSubTransaction = instanceOfSubTransaction;
function SubTransactionFromJSON(json) {
    return SubTransactionFromJSONTyped(json, false);
}
exports.SubTransactionFromJSON = SubTransactionFromJSON;
function SubTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'transaction_id': json['transaction_id'],
        'amount': json['amount'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'payee_id': json['payee_id'] == null ? undefined : json['payee_id'],
        'payee_name': json['payee_name'] == null ? undefined : json['payee_name'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'category_name': json['category_name'] == null ? undefined : json['category_name'],
        'transfer_account_id': json['transfer_account_id'] == null ? undefined : json['transfer_account_id'],
        'transfer_transaction_id': json['transfer_transaction_id'] == null ? undefined : json['transfer_transaction_id'],
        'deleted': json['deleted'],
    };
}
exports.SubTransactionFromJSONTyped = SubTransactionFromJSONTyped;
function SubTransactionToJSON(json) {
    return SubTransactionToJSONTyped(json, false);
}
exports.SubTransactionToJSON = SubTransactionToJSON;
function SubTransactionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'transaction_id': value['transaction_id'],
        'amount': value['amount'],
        'memo': value['memo'],
        'payee_id': value['payee_id'],
        'payee_name': value['payee_name'],
        'category_id': value['category_id'],
        'category_name': value['category_name'],
        'transfer_account_id': value['transfer_account_id'],
        'transfer_transaction_id': value['transfer_transaction_id'],
        'deleted': value['deleted'],
    };
}
exports.SubTransactionToJSONTyped = SubTransactionToJSONTyped;
