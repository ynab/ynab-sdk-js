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
exports.TransactionsResponseDataToJSON = exports.TransactionsResponseDataFromJSONTyped = exports.TransactionsResponseDataFromJSON = exports.instanceOfTransactionsResponseData = void 0;
const TransactionDetail_1 = require("./TransactionDetail");
/**
 * Check if a given object implements the TransactionsResponseData interface.
 */
function instanceOfTransactionsResponseData(value) {
    let isInstance = true;
    isInstance = isInstance && "transactions" in value;
    isInstance = isInstance && "server_knowledge" in value;
    return isInstance;
}
exports.instanceOfTransactionsResponseData = instanceOfTransactionsResponseData;
function TransactionsResponseDataFromJSON(json) {
    return TransactionsResponseDataFromJSONTyped(json, false);
}
exports.TransactionsResponseDataFromJSON = TransactionsResponseDataFromJSON;
function TransactionsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(TransactionDetail_1.TransactionDetailFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}
exports.TransactionsResponseDataFromJSONTyped = TransactionsResponseDataFromJSONTyped;
function TransactionsResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactions': (value.transactions.map(TransactionDetail_1.TransactionDetailToJSON)),
        'server_knowledge': value.server_knowledge,
    };
}
exports.TransactionsResponseDataToJSON = TransactionsResponseDataToJSON;