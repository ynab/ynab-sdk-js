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
exports.HybridTransactionsResponseToJSONTyped = exports.HybridTransactionsResponseToJSON = exports.HybridTransactionsResponseFromJSONTyped = exports.HybridTransactionsResponseFromJSON = exports.instanceOfHybridTransactionsResponse = void 0;
const HybridTransactionsResponseData_1 = require("./HybridTransactionsResponseData");
/**
 * Check if a given object implements the HybridTransactionsResponse interface.
 */
function instanceOfHybridTransactionsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfHybridTransactionsResponse = instanceOfHybridTransactionsResponse;
function HybridTransactionsResponseFromJSON(json) {
    return HybridTransactionsResponseFromJSONTyped(json, false);
}
exports.HybridTransactionsResponseFromJSON = HybridTransactionsResponseFromJSON;
function HybridTransactionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, HybridTransactionsResponseData_1.HybridTransactionsResponseDataFromJSON)(json['data']),
    };
}
exports.HybridTransactionsResponseFromJSONTyped = HybridTransactionsResponseFromJSONTyped;
function HybridTransactionsResponseToJSON(json) {
    return HybridTransactionsResponseToJSONTyped(json, false);
}
exports.HybridTransactionsResponseToJSON = HybridTransactionsResponseToJSON;
function HybridTransactionsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, HybridTransactionsResponseData_1.HybridTransactionsResponseDataToJSON)(value['data']),
    };
}
exports.HybridTransactionsResponseToJSONTyped = HybridTransactionsResponseToJSONTyped;
