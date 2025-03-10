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
exports.MonthDetailResponseDataToJSONTyped = exports.MonthDetailResponseDataToJSON = exports.MonthDetailResponseDataFromJSONTyped = exports.MonthDetailResponseDataFromJSON = exports.instanceOfMonthDetailResponseData = void 0;
const MonthDetail_1 = require("./MonthDetail");
/**
 * Check if a given object implements the MonthDetailResponseData interface.
 */
function instanceOfMonthDetailResponseData(value) {
    if (!('month' in value) || value['month'] === undefined)
        return false;
    return true;
}
exports.instanceOfMonthDetailResponseData = instanceOfMonthDetailResponseData;
function MonthDetailResponseDataFromJSON(json) {
    return MonthDetailResponseDataFromJSONTyped(json, false);
}
exports.MonthDetailResponseDataFromJSON = MonthDetailResponseDataFromJSON;
function MonthDetailResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'month': (0, MonthDetail_1.MonthDetailFromJSON)(json['month']),
    };
}
exports.MonthDetailResponseDataFromJSONTyped = MonthDetailResponseDataFromJSONTyped;
function MonthDetailResponseDataToJSON(json) {
    return MonthDetailResponseDataToJSONTyped(json, false);
}
exports.MonthDetailResponseDataToJSON = MonthDetailResponseDataToJSON;
function MonthDetailResponseDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'month': (0, MonthDetail_1.MonthDetailToJSON)(value['month']),
    };
}
exports.MonthDetailResponseDataToJSONTyped = MonthDetailResponseDataToJSONTyped;
