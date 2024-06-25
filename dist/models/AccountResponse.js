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
exports.AccountResponseToJSON = exports.AccountResponseFromJSONTyped = exports.AccountResponseFromJSON = exports.instanceOfAccountResponse = void 0;
const AccountResponseData_1 = require("./AccountResponseData");
/**
 * Check if a given object implements the AccountResponse interface.
 */
function instanceOfAccountResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfAccountResponse = instanceOfAccountResponse;
function AccountResponseFromJSON(json) {
    return AccountResponseFromJSONTyped(json, false);
}
exports.AccountResponseFromJSON = AccountResponseFromJSON;
function AccountResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, AccountResponseData_1.AccountResponseDataFromJSON)(json['data']),
    };
}
exports.AccountResponseFromJSONTyped = AccountResponseFromJSONTyped;
function AccountResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, AccountResponseData_1.AccountResponseDataToJSON)(value['data']),
    };
}
exports.AccountResponseToJSON = AccountResponseToJSON;
