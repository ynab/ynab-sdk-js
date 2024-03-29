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
exports.ScheduledTransactionResponseToJSON = exports.ScheduledTransactionResponseFromJSONTyped = exports.ScheduledTransactionResponseFromJSON = exports.instanceOfScheduledTransactionResponse = void 0;
const ScheduledTransactionResponseData_1 = require("./ScheduledTransactionResponseData");
/**
 * Check if a given object implements the ScheduledTransactionResponse interface.
 */
function instanceOfScheduledTransactionResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfScheduledTransactionResponse = instanceOfScheduledTransactionResponse;
function ScheduledTransactionResponseFromJSON(json) {
    return ScheduledTransactionResponseFromJSONTyped(json, false);
}
exports.ScheduledTransactionResponseFromJSON = ScheduledTransactionResponseFromJSON;
function ScheduledTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, ScheduledTransactionResponseData_1.ScheduledTransactionResponseDataFromJSON)(json['data']),
    };
}
exports.ScheduledTransactionResponseFromJSONTyped = ScheduledTransactionResponseFromJSONTyped;
function ScheduledTransactionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, ScheduledTransactionResponseData_1.ScheduledTransactionResponseDataToJSON)(value.data),
    };
}
exports.ScheduledTransactionResponseToJSON = ScheduledTransactionResponseToJSON;
