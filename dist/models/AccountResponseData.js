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
exports.AccountResponseDataToJSONTyped = exports.AccountResponseDataToJSON = exports.AccountResponseDataFromJSONTyped = exports.AccountResponseDataFromJSON = exports.instanceOfAccountResponseData = void 0;
const Account_1 = require("./Account");
/**
 * Check if a given object implements the AccountResponseData interface.
 */
function instanceOfAccountResponseData(value) {
    if (!('account' in value) || value['account'] === undefined)
        return false;
    return true;
}
exports.instanceOfAccountResponseData = instanceOfAccountResponseData;
function AccountResponseDataFromJSON(json) {
    return AccountResponseDataFromJSONTyped(json, false);
}
exports.AccountResponseDataFromJSON = AccountResponseDataFromJSON;
function AccountResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'account': (0, Account_1.AccountFromJSON)(json['account']),
    };
}
exports.AccountResponseDataFromJSONTyped = AccountResponseDataFromJSONTyped;
function AccountResponseDataToJSON(json) {
    return AccountResponseDataToJSONTyped(json, false);
}
exports.AccountResponseDataToJSON = AccountResponseDataToJSON;
function AccountResponseDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'account': (0, Account_1.AccountToJSON)(value['account']),
    };
}
exports.AccountResponseDataToJSONTyped = AccountResponseDataToJSONTyped;
