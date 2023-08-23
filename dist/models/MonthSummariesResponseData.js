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
exports.MonthSummariesResponseDataToJSON = exports.MonthSummariesResponseDataFromJSONTyped = exports.MonthSummariesResponseDataFromJSON = exports.instanceOfMonthSummariesResponseData = void 0;
const MonthSummary_1 = require("./MonthSummary");
/**
 * Check if a given object implements the MonthSummariesResponseData interface.
 */
function instanceOfMonthSummariesResponseData(value) {
    let isInstance = true;
    isInstance = isInstance && "months" in value;
    isInstance = isInstance && "server_knowledge" in value;
    return isInstance;
}
exports.instanceOfMonthSummariesResponseData = instanceOfMonthSummariesResponseData;
function MonthSummariesResponseDataFromJSON(json) {
    return MonthSummariesResponseDataFromJSONTyped(json, false);
}
exports.MonthSummariesResponseDataFromJSON = MonthSummariesResponseDataFromJSON;
function MonthSummariesResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'months': (json['months'].map(MonthSummary_1.MonthSummaryFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}
exports.MonthSummariesResponseDataFromJSONTyped = MonthSummariesResponseDataFromJSONTyped;
function MonthSummariesResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'months': (value.months.map(MonthSummary_1.MonthSummaryToJSON)),
        'server_knowledge': value.server_knowledge,
    };
}
exports.MonthSummariesResponseDataToJSON = MonthSummariesResponseDataToJSON;
