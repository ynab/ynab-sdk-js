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
exports.TransactionSummaryDebtTransactionTypeToJSON = exports.TransactionSummaryDebtTransactionTypeFromJSONTyped = exports.TransactionSummaryDebtTransactionTypeFromJSON = exports.instanceOfTransactionSummaryDebtTransactionType = void 0;
/**
 * Check if a given object implements the TransactionSummaryDebtTransactionType interface.
 */
function instanceOfTransactionSummaryDebtTransactionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionSummaryDebtTransactionType = instanceOfTransactionSummaryDebtTransactionType;
function TransactionSummaryDebtTransactionTypeFromJSON(json) {
    return TransactionSummaryDebtTransactionTypeFromJSONTyped(json, false);
}
exports.TransactionSummaryDebtTransactionTypeFromJSON = TransactionSummaryDebtTransactionTypeFromJSON;
function TransactionSummaryDebtTransactionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TransactionSummaryDebtTransactionTypeFromJSONTyped = TransactionSummaryDebtTransactionTypeFromJSONTyped;
function TransactionSummaryDebtTransactionTypeToJSON(value) {
    return value;
}
exports.TransactionSummaryDebtTransactionTypeToJSON = TransactionSummaryDebtTransactionTypeToJSON;
