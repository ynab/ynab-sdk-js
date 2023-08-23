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
import { BudgetSettingsFromJSON, BudgetSettingsToJSON, } from './BudgetSettings';
/**
 * Check if a given object implements the BudgetSettingsResponseData interface.
 */
export function instanceOfBudgetSettingsResponseData(value) {
    var isInstance = true;
    isInstance = isInstance && "settings" in value;
    return isInstance;
}
export function BudgetSettingsResponseDataFromJSON(json) {
    return BudgetSettingsResponseDataFromJSONTyped(json, false);
}
export function BudgetSettingsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'settings': BudgetSettingsFromJSON(json['settings']),
    };
}
export function BudgetSettingsResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'settings': BudgetSettingsToJSON(value.settings),
    };
}
