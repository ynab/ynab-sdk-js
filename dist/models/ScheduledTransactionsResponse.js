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
exports.ScheduledTransactionsResponseToJSON = exports.ScheduledTransactionsResponseFromJSONTyped = exports.ScheduledTransactionsResponseFromJSON = exports.instanceOfScheduledTransactionsResponse = void 0;
const ScheduledTransactionsResponseData_1 = require("./ScheduledTransactionsResponseData");
/**
 * Check if a given object implements the ScheduledTransactionsResponse interface.
 */
function instanceOfScheduledTransactionsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfScheduledTransactionsResponse = instanceOfScheduledTransactionsResponse;
function ScheduledTransactionsResponseFromJSON(json) {
    return ScheduledTransactionsResponseFromJSONTyped(json, false);
}
exports.ScheduledTransactionsResponseFromJSON = ScheduledTransactionsResponseFromJSON;
function ScheduledTransactionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, ScheduledTransactionsResponseData_1.ScheduledTransactionsResponseDataFromJSON)(json['data']),
    };
}
exports.ScheduledTransactionsResponseFromJSONTyped = ScheduledTransactionsResponseFromJSONTyped;
function ScheduledTransactionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, ScheduledTransactionsResponseData_1.ScheduledTransactionsResponseDataToJSON)(value.data),
    };
}
exports.ScheduledTransactionsResponseToJSON = ScheduledTransactionsResponseToJSON;
