"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveSubTransactionToJSON = exports.SaveSubTransactionFromJSONTyped = exports.SaveSubTransactionFromJSON = exports.instanceOfSaveSubTransaction = void 0;
/**
 * Check if a given object implements the SaveSubTransaction interface.
 */
function instanceOfSaveSubTransaction(value) {
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    return true;
}
exports.instanceOfSaveSubTransaction = instanceOfSaveSubTransaction;
function SaveSubTransactionFromJSON(json) {
    return SaveSubTransactionFromJSONTyped(json, false);
}
exports.SaveSubTransactionFromJSON = SaveSubTransactionFromJSON;
function SaveSubTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'amount': json['amount'],
        'payee_id': json['payee_id'] == null ? undefined : json['payee_id'],
        'payee_name': json['payee_name'] == null ? undefined : json['payee_name'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'memo': json['memo'] == null ? undefined : json['memo'],
    };
}
exports.SaveSubTransactionFromJSONTyped = SaveSubTransactionFromJSONTyped;
function SaveSubTransactionToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'amount': value['amount'],
        'payee_id': value['payee_id'],
        'payee_name': value['payee_name'],
        'category_id': value['category_id'],
        'memo': value['memo'],
    };
}
exports.SaveSubTransactionToJSON = SaveSubTransactionToJSON;
