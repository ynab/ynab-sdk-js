/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { AccountsResponseDataFromJSON, AccountsResponseDataToJSON, } from './AccountsResponseData';
/**
 * Check if a given object implements the AccountsResponse interface.
 */
export function instanceOfAccountsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
export function AccountsResponseFromJSON(json) {
    return AccountsResponseFromJSONTyped(json, false);
}
export function AccountsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': AccountsResponseDataFromJSON(json['data']),
    };
}
export function AccountsResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': AccountsResponseDataToJSON(value['data']),
    };
}
