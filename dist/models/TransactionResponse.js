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
exports.TransactionResponseToJSONTyped = exports.TransactionResponseToJSON = exports.TransactionResponseFromJSONTyped = exports.TransactionResponseFromJSON = exports.instanceOfTransactionResponse = void 0;
const TransactionResponseData_1 = require("./TransactionResponseData");
/**
 * Check if a given object implements the TransactionResponse interface.
 */
function instanceOfTransactionResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfTransactionResponse = instanceOfTransactionResponse;
function TransactionResponseFromJSON(json) {
    return TransactionResponseFromJSONTyped(json, false);
}
exports.TransactionResponseFromJSON = TransactionResponseFromJSON;
function TransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, TransactionResponseData_1.TransactionResponseDataFromJSON)(json['data']),
    };
}
exports.TransactionResponseFromJSONTyped = TransactionResponseFromJSONTyped;
function TransactionResponseToJSON(json) {
    return TransactionResponseToJSONTyped(json, false);
}
exports.TransactionResponseToJSON = TransactionResponseToJSON;
function TransactionResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, TransactionResponseData_1.TransactionResponseDataToJSON)(value['data']),
    };
}
exports.TransactionResponseToJSONTyped = TransactionResponseToJSONTyped;
