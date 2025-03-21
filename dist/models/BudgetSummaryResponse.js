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
exports.BudgetSummaryResponseToJSONTyped = exports.BudgetSummaryResponseToJSON = exports.BudgetSummaryResponseFromJSONTyped = exports.BudgetSummaryResponseFromJSON = exports.instanceOfBudgetSummaryResponse = void 0;
const BudgetSummaryResponseData_1 = require("./BudgetSummaryResponseData");
/**
 * Check if a given object implements the BudgetSummaryResponse interface.
 */
function instanceOfBudgetSummaryResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfBudgetSummaryResponse = instanceOfBudgetSummaryResponse;
function BudgetSummaryResponseFromJSON(json) {
    return BudgetSummaryResponseFromJSONTyped(json, false);
}
exports.BudgetSummaryResponseFromJSON = BudgetSummaryResponseFromJSON;
function BudgetSummaryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, BudgetSummaryResponseData_1.BudgetSummaryResponseDataFromJSON)(json['data']),
    };
}
exports.BudgetSummaryResponseFromJSONTyped = BudgetSummaryResponseFromJSONTyped;
function BudgetSummaryResponseToJSON(json) {
    return BudgetSummaryResponseToJSONTyped(json, false);
}
exports.BudgetSummaryResponseToJSON = BudgetSummaryResponseToJSON;
function BudgetSummaryResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, BudgetSummaryResponseData_1.BudgetSummaryResponseDataToJSON)(value['data']),
    };
}
exports.BudgetSummaryResponseToJSONTyped = BudgetSummaryResponseToJSONTyped;
