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
exports.MonthSummariesResponseToJSON = exports.MonthSummariesResponseFromJSONTyped = exports.MonthSummariesResponseFromJSON = exports.instanceOfMonthSummariesResponse = void 0;
const MonthSummariesResponseData_1 = require("./MonthSummariesResponseData");
/**
 * Check if a given object implements the MonthSummariesResponse interface.
 */
function instanceOfMonthSummariesResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfMonthSummariesResponse = instanceOfMonthSummariesResponse;
function MonthSummariesResponseFromJSON(json) {
    return MonthSummariesResponseFromJSONTyped(json, false);
}
exports.MonthSummariesResponseFromJSON = MonthSummariesResponseFromJSON;
function MonthSummariesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, MonthSummariesResponseData_1.MonthSummariesResponseDataFromJSON)(json['data']),
    };
}
exports.MonthSummariesResponseFromJSONTyped = MonthSummariesResponseFromJSONTyped;
function MonthSummariesResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, MonthSummariesResponseData_1.MonthSummariesResponseDataToJSON)(value['data']),
    };
}
exports.MonthSummariesResponseToJSON = MonthSummariesResponseToJSON;
