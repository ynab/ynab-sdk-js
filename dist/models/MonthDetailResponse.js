"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthDetailResponseToJSON = exports.MonthDetailResponseFromJSONTyped = exports.MonthDetailResponseFromJSON = exports.instanceOfMonthDetailResponse = void 0;
const MonthDetailResponseData_1 = require("./MonthDetailResponseData");
/**
 * Check if a given object implements the MonthDetailResponse interface.
 */
function instanceOfMonthDetailResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfMonthDetailResponse = instanceOfMonthDetailResponse;
function MonthDetailResponseFromJSON(json) {
    return MonthDetailResponseFromJSONTyped(json, false);
}
exports.MonthDetailResponseFromJSON = MonthDetailResponseFromJSON;
function MonthDetailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, MonthDetailResponseData_1.MonthDetailResponseDataFromJSON)(json['data']),
    };
}
exports.MonthDetailResponseFromJSONTyped = MonthDetailResponseFromJSONTyped;
function MonthDetailResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, MonthDetailResponseData_1.MonthDetailResponseDataToJSON)(value['data']),
    };
}
exports.MonthDetailResponseToJSON = MonthDetailResponseToJSON;
