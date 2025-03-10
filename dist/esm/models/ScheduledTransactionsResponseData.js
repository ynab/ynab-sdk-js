/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { ScheduledTransactionDetailFromJSON, ScheduledTransactionDetailToJSON, } from './ScheduledTransactionDetail';
/**
 * Check if a given object implements the ScheduledTransactionsResponseData interface.
 */
export function instanceOfScheduledTransactionsResponseData(value) {
    if (!('scheduled_transactions' in value) || value['scheduled_transactions'] === undefined)
        return false;
    if (!('server_knowledge' in value) || value['server_knowledge'] === undefined)
        return false;
    return true;
}
export function ScheduledTransactionsResponseDataFromJSON(json) {
    return ScheduledTransactionsResponseDataFromJSONTyped(json, false);
}
export function ScheduledTransactionsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'scheduled_transactions': (json['scheduled_transactions'].map(ScheduledTransactionDetailFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}
export function ScheduledTransactionsResponseDataToJSON(json) {
    return ScheduledTransactionsResponseDataToJSONTyped(json, false);
}
export function ScheduledTransactionsResponseDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'scheduled_transactions': (value['scheduled_transactions'].map(ScheduledTransactionDetailToJSON)),
        'server_knowledge': value['server_knowledge'],
    };
}
