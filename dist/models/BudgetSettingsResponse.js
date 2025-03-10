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
exports.BudgetSettingsResponseToJSONTyped = exports.BudgetSettingsResponseToJSON = exports.BudgetSettingsResponseFromJSONTyped = exports.BudgetSettingsResponseFromJSON = exports.instanceOfBudgetSettingsResponse = void 0;
const BudgetSettingsResponseData_1 = require("./BudgetSettingsResponseData");
/**
 * Check if a given object implements the BudgetSettingsResponse interface.
 */
function instanceOfBudgetSettingsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfBudgetSettingsResponse = instanceOfBudgetSettingsResponse;
function BudgetSettingsResponseFromJSON(json) {
    return BudgetSettingsResponseFromJSONTyped(json, false);
}
exports.BudgetSettingsResponseFromJSON = BudgetSettingsResponseFromJSON;
function BudgetSettingsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, BudgetSettingsResponseData_1.BudgetSettingsResponseDataFromJSON)(json['data']),
    };
}
exports.BudgetSettingsResponseFromJSONTyped = BudgetSettingsResponseFromJSONTyped;
function BudgetSettingsResponseToJSON(json) {
    return BudgetSettingsResponseToJSONTyped(json, false);
}
exports.BudgetSettingsResponseToJSON = BudgetSettingsResponseToJSON;
function BudgetSettingsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, BudgetSettingsResponseData_1.BudgetSettingsResponseDataToJSON)(value['data']),
    };
}
exports.BudgetSettingsResponseToJSONTyped = BudgetSettingsResponseToJSONTyped;
