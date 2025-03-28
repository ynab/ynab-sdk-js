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
exports.AccountsResponseDataToJSONTyped = exports.AccountsResponseDataToJSON = exports.AccountsResponseDataFromJSONTyped = exports.AccountsResponseDataFromJSON = exports.instanceOfAccountsResponseData = void 0;
const Account_1 = require("./Account");
/**
 * Check if a given object implements the AccountsResponseData interface.
 */
function instanceOfAccountsResponseData(value) {
    if (!('accounts' in value) || value['accounts'] === undefined)
        return false;
    if (!('server_knowledge' in value) || value['server_knowledge'] === undefined)
        return false;
    return true;
}
exports.instanceOfAccountsResponseData = instanceOfAccountsResponseData;
function AccountsResponseDataFromJSON(json) {
    return AccountsResponseDataFromJSONTyped(json, false);
}
exports.AccountsResponseDataFromJSON = AccountsResponseDataFromJSON;
function AccountsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accounts': (json['accounts'].map(Account_1.AccountFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}
exports.AccountsResponseDataFromJSONTyped = AccountsResponseDataFromJSONTyped;
function AccountsResponseDataToJSON(json) {
    return AccountsResponseDataToJSONTyped(json, false);
}
exports.AccountsResponseDataToJSON = AccountsResponseDataToJSON;
function AccountsResponseDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'accounts': (value['accounts'].map(Account_1.AccountToJSON)),
        'server_knowledge': value['server_knowledge'],
    };
}
exports.AccountsResponseDataToJSONTyped = AccountsResponseDataToJSONTyped;
