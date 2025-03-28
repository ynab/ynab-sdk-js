/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { BudgetSettingsFromJSON, BudgetSettingsToJSON, } from './BudgetSettings';
/**
 * Check if a given object implements the BudgetSettingsResponseData interface.
 */
export function instanceOfBudgetSettingsResponseData(value) {
    if (!('settings' in value) || value['settings'] === undefined)
        return false;
    return true;
}
export function BudgetSettingsResponseDataFromJSON(json) {
    return BudgetSettingsResponseDataFromJSONTyped(json, false);
}
export function BudgetSettingsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'settings': BudgetSettingsFromJSON(json['settings']),
    };
}
export function BudgetSettingsResponseDataToJSON(json) {
    return BudgetSettingsResponseDataToJSONTyped(json, false);
}
export function BudgetSettingsResponseDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'settings': BudgetSettingsToJSON(value['settings']),
    };
}
