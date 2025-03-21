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
exports.TransactionsImportResponseToJSONTyped = exports.TransactionsImportResponseToJSON = exports.TransactionsImportResponseFromJSONTyped = exports.TransactionsImportResponseFromJSON = exports.instanceOfTransactionsImportResponse = void 0;
const TransactionsImportResponseData_1 = require("./TransactionsImportResponseData");
/**
 * Check if a given object implements the TransactionsImportResponse interface.
 */
function instanceOfTransactionsImportResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfTransactionsImportResponse = instanceOfTransactionsImportResponse;
function TransactionsImportResponseFromJSON(json) {
    return TransactionsImportResponseFromJSONTyped(json, false);
}
exports.TransactionsImportResponseFromJSON = TransactionsImportResponseFromJSON;
function TransactionsImportResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, TransactionsImportResponseData_1.TransactionsImportResponseDataFromJSON)(json['data']),
    };
}
exports.TransactionsImportResponseFromJSONTyped = TransactionsImportResponseFromJSONTyped;
function TransactionsImportResponseToJSON(json) {
    return TransactionsImportResponseToJSONTyped(json, false);
}
exports.TransactionsImportResponseToJSON = TransactionsImportResponseToJSON;
function TransactionsImportResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, TransactionsImportResponseData_1.TransactionsImportResponseDataToJSON)(value['data']),
    };
}
exports.TransactionsImportResponseToJSONTyped = TransactionsImportResponseToJSONTyped;
