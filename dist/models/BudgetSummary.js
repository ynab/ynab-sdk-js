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
exports.BudgetSummaryToJSONTyped = exports.BudgetSummaryToJSON = exports.BudgetSummaryFromJSONTyped = exports.BudgetSummaryFromJSON = exports.instanceOfBudgetSummary = void 0;
const Account_1 = require("./Account");
const CurrencyFormat_1 = require("./CurrencyFormat");
const DateFormat_1 = require("./DateFormat");
/**
 * Check if a given object implements the BudgetSummary interface.
 */
function instanceOfBudgetSummary(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
exports.instanceOfBudgetSummary = instanceOfBudgetSummary;
function BudgetSummaryFromJSON(json) {
    return BudgetSummaryFromJSONTyped(json, false);
}
exports.BudgetSummaryFromJSON = BudgetSummaryFromJSON;
function BudgetSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'last_modified_on': json['last_modified_on'] == null ? undefined : json['last_modified_on'],
        'first_month': json['first_month'] == null ? undefined : json['first_month'],
        'last_month': json['last_month'] == null ? undefined : json['last_month'],
        'date_format': json['date_format'] == null ? undefined : (0, DateFormat_1.DateFormatFromJSON)(json['date_format']),
        'currency_format': json['currency_format'] == null ? undefined : (0, CurrencyFormat_1.CurrencyFormatFromJSON)(json['currency_format']),
        'accounts': json['accounts'] == null ? undefined : (json['accounts'].map(Account_1.AccountFromJSON)),
    };
}
exports.BudgetSummaryFromJSONTyped = BudgetSummaryFromJSONTyped;
function BudgetSummaryToJSON(json) {
    return BudgetSummaryToJSONTyped(json, false);
}
exports.BudgetSummaryToJSON = BudgetSummaryToJSON;
function BudgetSummaryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'last_modified_on': value['last_modified_on'],
        'first_month': value['first_month'],
        'last_month': value['last_month'],
        'date_format': (0, DateFormat_1.DateFormatToJSON)(value['date_format']),
        'currency_format': (0, CurrencyFormat_1.CurrencyFormatToJSON)(value['currency_format']),
        'accounts': value['accounts'] == null ? undefined : (value['accounts'].map(Account_1.AccountToJSON)),
    };
}
exports.BudgetSummaryToJSONTyped = BudgetSummaryToJSONTyped;
