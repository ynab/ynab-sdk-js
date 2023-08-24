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
exports.PostTransactionsWrapperToJSON = exports.PostTransactionsWrapperFromJSONTyped = exports.PostTransactionsWrapperFromJSON = exports.instanceOfPostTransactionsWrapper = void 0;
const runtime_1 = require("../runtime");
const SaveTransaction_1 = require("./SaveTransaction");
/**
 * Check if a given object implements the PostTransactionsWrapper interface.
 */
function instanceOfPostTransactionsWrapper(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostTransactionsWrapper = instanceOfPostTransactionsWrapper;
function PostTransactionsWrapperFromJSON(json) {
    return PostTransactionsWrapperFromJSONTyped(json, false);
}
exports.PostTransactionsWrapperFromJSON = PostTransactionsWrapperFromJSON;
function PostTransactionsWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transaction': !(0, runtime_1.exists)(json, 'transaction') ? undefined : (0, SaveTransaction_1.SaveTransactionFromJSON)(json['transaction']),
        'transactions': !(0, runtime_1.exists)(json, 'transactions') ? undefined : (json['transactions'].map(SaveTransaction_1.SaveTransactionFromJSON)),
    };
}
exports.PostTransactionsWrapperFromJSONTyped = PostTransactionsWrapperFromJSONTyped;
function PostTransactionsWrapperToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transaction': (0, SaveTransaction_1.SaveTransactionToJSON)(value.transaction),
        'transactions': value.transactions === undefined ? undefined : (value.transactions.map(SaveTransaction_1.SaveTransactionToJSON)),
    };
}
exports.PostTransactionsWrapperToJSON = PostTransactionsWrapperToJSON;
