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
exports.BudgetSummaryToJSON = exports.BudgetSummaryFromJSONTyped = exports.BudgetSummaryFromJSON = exports.instanceOfBudgetSummary = void 0;
const runtime_1 = require("../runtime");
const Account_1 = require("./Account");
const CurrencyFormat_1 = require("./CurrencyFormat");
const DateFormat_1 = require("./DateFormat");
/**
 * Check if a given object implements the BudgetSummary interface.
 */
function instanceOfBudgetSummary(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfBudgetSummary = instanceOfBudgetSummary;
function BudgetSummaryFromJSON(json) {
    return BudgetSummaryFromJSONTyped(json, false);
}
exports.BudgetSummaryFromJSON = BudgetSummaryFromJSON;
function BudgetSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'last_modified_on': !(0, runtime_1.exists)(json, 'last_modified_on') ? undefined : json['last_modified_on'],
        'first_month': !(0, runtime_1.exists)(json, 'first_month') ? undefined : json['first_month'],
        'last_month': !(0, runtime_1.exists)(json, 'last_month') ? undefined : json['last_month'],
        'date_format': !(0, runtime_1.exists)(json, 'date_format') ? undefined : (0, DateFormat_1.DateFormatFromJSON)(json['date_format']),
        'currency_format': !(0, runtime_1.exists)(json, 'currency_format') ? undefined : (0, CurrencyFormat_1.CurrencyFormatFromJSON)(json['currency_format']),
        'accounts': !(0, runtime_1.exists)(json, 'accounts') ? undefined : (json['accounts'].map(Account_1.AccountFromJSON)),
    };
}
exports.BudgetSummaryFromJSONTyped = BudgetSummaryFromJSONTyped;
function BudgetSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'last_modified_on': value.last_modified_on,
        'first_month': value.first_month,
        'last_month': value.last_month,
        'date_format': (0, DateFormat_1.DateFormatToJSON)(value.date_format),
        'currency_format': (0, CurrencyFormat_1.CurrencyFormatToJSON)(value.currency_format),
        'accounts': value.accounts === undefined ? undefined : (value.accounts.map(Account_1.AccountToJSON)),
    };
}
exports.BudgetSummaryToJSON = BudgetSummaryToJSON;
