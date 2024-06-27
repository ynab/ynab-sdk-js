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
exports.BudgetSettingsResponseDataToJSON = exports.BudgetSettingsResponseDataFromJSONTyped = exports.BudgetSettingsResponseDataFromJSON = exports.instanceOfBudgetSettingsResponseData = void 0;
const BudgetSettings_1 = require("./BudgetSettings");
/**
 * Check if a given object implements the BudgetSettingsResponseData interface.
 */
function instanceOfBudgetSettingsResponseData(value) {
    if (!('settings' in value) || value['settings'] === undefined)
        return false;
    return true;
}
exports.instanceOfBudgetSettingsResponseData = instanceOfBudgetSettingsResponseData;
function BudgetSettingsResponseDataFromJSON(json) {
    return BudgetSettingsResponseDataFromJSONTyped(json, false);
}
exports.BudgetSettingsResponseDataFromJSON = BudgetSettingsResponseDataFromJSON;
function BudgetSettingsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'settings': (0, BudgetSettings_1.BudgetSettingsFromJSON)(json['settings']),
    };
}
exports.BudgetSettingsResponseDataFromJSONTyped = BudgetSettingsResponseDataFromJSONTyped;
function BudgetSettingsResponseDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'settings': (0, BudgetSettings_1.BudgetSettingsToJSON)(value['settings']),
    };
}
exports.BudgetSettingsResponseDataToJSON = BudgetSettingsResponseDataToJSON;
