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
import { exists } from '../runtime';
import { BudgetSummaryFromJSON, BudgetSummaryToJSON, } from './BudgetSummary';
/**
 * Check if a given object implements the BudgetSummaryResponseData interface.
 */
export function instanceOfBudgetSummaryResponseData(value) {
    var isInstance = true;
    isInstance = isInstance && "budgets" in value;
    return isInstance;
}
export function BudgetSummaryResponseDataFromJSON(json) {
    return BudgetSummaryResponseDataFromJSONTyped(json, false);
}
export function BudgetSummaryResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'budgets': (json['budgets'].map(BudgetSummaryFromJSON)),
        'default_budget': !exists(json, 'default_budget') ? undefined : BudgetSummaryFromJSON(json['default_budget']),
    };
}
export function BudgetSummaryResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'budgets': (value.budgets.map(BudgetSummaryToJSON)),
        'default_budget': BudgetSummaryToJSON(value.default_budget),
    };
}
