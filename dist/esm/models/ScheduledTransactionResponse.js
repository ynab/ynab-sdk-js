/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { ScheduledTransactionResponseDataFromJSON, ScheduledTransactionResponseDataToJSON, } from './ScheduledTransactionResponseData';
/**
 * Check if a given object implements the ScheduledTransactionResponse interface.
 */
export function instanceOfScheduledTransactionResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
export function ScheduledTransactionResponseFromJSON(json) {
    return ScheduledTransactionResponseFromJSONTyped(json, false);
}
export function ScheduledTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': ScheduledTransactionResponseDataFromJSON(json['data']),
    };
}
export function ScheduledTransactionResponseToJSON(json) {
    return ScheduledTransactionResponseToJSONTyped(json, false);
}
export function ScheduledTransactionResponseToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'data': ScheduledTransactionResponseDataToJSON(value['data']),
    };
}
