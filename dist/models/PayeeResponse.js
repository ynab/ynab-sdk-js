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
exports.PayeeResponseToJSON = exports.PayeeResponseFromJSONTyped = exports.PayeeResponseFromJSON = exports.instanceOfPayeeResponse = void 0;
const PayeeResponseData_1 = require("./PayeeResponseData");
/**
 * Check if a given object implements the PayeeResponse interface.
 */
function instanceOfPayeeResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfPayeeResponse = instanceOfPayeeResponse;
function PayeeResponseFromJSON(json) {
    return PayeeResponseFromJSONTyped(json, false);
}
exports.PayeeResponseFromJSON = PayeeResponseFromJSON;
function PayeeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, PayeeResponseData_1.PayeeResponseDataFromJSON)(json['data']),
    };
}
exports.PayeeResponseFromJSONTyped = PayeeResponseFromJSONTyped;
function PayeeResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, PayeeResponseData_1.PayeeResponseDataToJSON)(value['data']),
    };
}
exports.PayeeResponseToJSON = PayeeResponseToJSON;
