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
exports.PutTransactionWrapperToJSONTyped = exports.PutTransactionWrapperToJSON = exports.PutTransactionWrapperFromJSONTyped = exports.PutTransactionWrapperFromJSON = exports.instanceOfPutTransactionWrapper = void 0;
const ExistingTransaction_1 = require("./ExistingTransaction");
/**
 * Check if a given object implements the PutTransactionWrapper interface.
 */
function instanceOfPutTransactionWrapper(value) {
    if (!('transaction' in value) || value['transaction'] === undefined)
        return false;
    return true;
}
exports.instanceOfPutTransactionWrapper = instanceOfPutTransactionWrapper;
function PutTransactionWrapperFromJSON(json) {
    return PutTransactionWrapperFromJSONTyped(json, false);
}
exports.PutTransactionWrapperFromJSON = PutTransactionWrapperFromJSON;
function PutTransactionWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'transaction': (0, ExistingTransaction_1.ExistingTransactionFromJSON)(json['transaction']),
    };
}
exports.PutTransactionWrapperFromJSONTyped = PutTransactionWrapperFromJSONTyped;
function PutTransactionWrapperToJSON(json) {
    return PutTransactionWrapperToJSONTyped(json, false);
}
exports.PutTransactionWrapperToJSON = PutTransactionWrapperToJSON;
function PutTransactionWrapperToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'transaction': (0, ExistingTransaction_1.ExistingTransactionToJSON)(value['transaction']),
    };
}
exports.PutTransactionWrapperToJSONTyped = PutTransactionWrapperToJSONTyped;
