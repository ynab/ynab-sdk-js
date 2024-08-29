/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { HybridTransactionsResponseDataFromJSON, HybridTransactionsResponseDataToJSON, } from './HybridTransactionsResponseData';
/**
 * Check if a given object implements the HybridTransactionsResponse interface.
 */
export function instanceOfHybridTransactionsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
export function HybridTransactionsResponseFromJSON(json) {
    return HybridTransactionsResponseFromJSONTyped(json, false);
}
export function HybridTransactionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': HybridTransactionsResponseDataFromJSON(json['data']),
    };
}
export function HybridTransactionsResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': HybridTransactionsResponseDataToJSON(value['data']),
    };
}
