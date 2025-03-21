/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { MonthSummaryFromJSON, MonthSummaryToJSON, } from './MonthSummary';
/**
 * Check if a given object implements the MonthSummariesResponseData interface.
 */
export function instanceOfMonthSummariesResponseData(value) {
    if (!('months' in value) || value['months'] === undefined)
        return false;
    if (!('server_knowledge' in value) || value['server_knowledge'] === undefined)
        return false;
    return true;
}
export function MonthSummariesResponseDataFromJSON(json) {
    return MonthSummariesResponseDataFromJSONTyped(json, false);
}
export function MonthSummariesResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'months': (json['months'].map(MonthSummaryFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}
export function MonthSummariesResponseDataToJSON(json) {
    return MonthSummariesResponseDataToJSONTyped(json, false);
}
export function MonthSummariesResponseDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'months': (value['months'].map(MonthSummaryToJSON)),
        'server_knowledge': value['server_knowledge'],
    };
}
