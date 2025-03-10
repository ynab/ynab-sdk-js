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
exports.ScheduledTransactionResponseDataToJSONTyped = exports.ScheduledTransactionResponseDataToJSON = exports.ScheduledTransactionResponseDataFromJSONTyped = exports.ScheduledTransactionResponseDataFromJSON = exports.instanceOfScheduledTransactionResponseData = void 0;
const ScheduledTransactionDetail_1 = require("./ScheduledTransactionDetail");
/**
 * Check if a given object implements the ScheduledTransactionResponseData interface.
 */
function instanceOfScheduledTransactionResponseData(value) {
    if (!('scheduled_transaction' in value) || value['scheduled_transaction'] === undefined)
        return false;
    return true;
}
exports.instanceOfScheduledTransactionResponseData = instanceOfScheduledTransactionResponseData;
function ScheduledTransactionResponseDataFromJSON(json) {
    return ScheduledTransactionResponseDataFromJSONTyped(json, false);
}
exports.ScheduledTransactionResponseDataFromJSON = ScheduledTransactionResponseDataFromJSON;
function ScheduledTransactionResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'scheduled_transaction': (0, ScheduledTransactionDetail_1.ScheduledTransactionDetailFromJSON)(json['scheduled_transaction']),
    };
}
exports.ScheduledTransactionResponseDataFromJSONTyped = ScheduledTransactionResponseDataFromJSONTyped;
function ScheduledTransactionResponseDataToJSON(json) {
    return ScheduledTransactionResponseDataToJSONTyped(json, false);
}
exports.ScheduledTransactionResponseDataToJSON = ScheduledTransactionResponseDataToJSON;
function ScheduledTransactionResponseDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'scheduled_transaction': (0, ScheduledTransactionDetail_1.ScheduledTransactionDetailToJSON)(value['scheduled_transaction']),
    };
}
exports.ScheduledTransactionResponseDataToJSONTyped = ScheduledTransactionResponseDataToJSONTyped;
