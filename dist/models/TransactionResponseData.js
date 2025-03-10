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
exports.TransactionResponseDataToJSONTyped = exports.TransactionResponseDataToJSON = exports.TransactionResponseDataFromJSONTyped = exports.TransactionResponseDataFromJSON = exports.instanceOfTransactionResponseData = void 0;
const TransactionDetail_1 = require("./TransactionDetail");
/**
 * Check if a given object implements the TransactionResponseData interface.
 */
function instanceOfTransactionResponseData(value) {
    if (!('transaction' in value) || value['transaction'] === undefined)
        return false;
    return true;
}
exports.instanceOfTransactionResponseData = instanceOfTransactionResponseData;
function TransactionResponseDataFromJSON(json) {
    return TransactionResponseDataFromJSONTyped(json, false);
}
exports.TransactionResponseDataFromJSON = TransactionResponseDataFromJSON;
function TransactionResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'transaction': (0, TransactionDetail_1.TransactionDetailFromJSON)(json['transaction']),
    };
}
exports.TransactionResponseDataFromJSONTyped = TransactionResponseDataFromJSONTyped;
function TransactionResponseDataToJSON(json) {
    return TransactionResponseDataToJSONTyped(json, false);
}
exports.TransactionResponseDataToJSON = TransactionResponseDataToJSON;
function TransactionResponseDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'transaction': (0, TransactionDetail_1.TransactionDetailToJSON)(value['transaction']),
    };
}
exports.TransactionResponseDataToJSONTyped = TransactionResponseDataToJSONTyped;
