/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { BudgetDetailResponseDataFromJSON, BudgetDetailResponseDataToJSON, } from './BudgetDetailResponseData';
/**
 * Check if a given object implements the BudgetDetailResponse interface.
 */
export function instanceOfBudgetDetailResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
export function BudgetDetailResponseFromJSON(json) {
    return BudgetDetailResponseFromJSONTyped(json, false);
}
export function BudgetDetailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': BudgetDetailResponseDataFromJSON(json['data']),
    };
}
export function BudgetDetailResponseToJSON(json) {
    return BudgetDetailResponseToJSONTyped(json, false);
}
export function BudgetDetailResponseToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'data': BudgetDetailResponseDataToJSON(value['data']),
    };
}
