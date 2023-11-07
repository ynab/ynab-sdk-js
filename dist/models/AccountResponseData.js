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
exports.AccountResponseDataToJSON = exports.AccountResponseDataFromJSONTyped = exports.AccountResponseDataFromJSON = exports.instanceOfAccountResponseData = void 0;
const Account_1 = require("./Account");
/**
 * Check if a given object implements the AccountResponseData interface.
 */
function instanceOfAccountResponseData(value) {
    let isInstance = true;
    isInstance = isInstance && "account" in value;
    return isInstance;
}
exports.instanceOfAccountResponseData = instanceOfAccountResponseData;
function AccountResponseDataFromJSON(json) {
    return AccountResponseDataFromJSONTyped(json, false);
}
exports.AccountResponseDataFromJSON = AccountResponseDataFromJSON;
function AccountResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account': (0, Account_1.AccountFromJSON)(json['account']),
    };
}
exports.AccountResponseDataFromJSONTyped = AccountResponseDataFromJSONTyped;
function AccountResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account': (0, Account_1.AccountToJSON)(value.account),
    };
}
exports.AccountResponseDataToJSON = AccountResponseDataToJSON;