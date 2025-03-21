/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { SaveAccountFromJSON, SaveAccountToJSON, } from './SaveAccount';
/**
 * Check if a given object implements the PostAccountWrapper interface.
 */
export function instanceOfPostAccountWrapper(value) {
    if (!('account' in value) || value['account'] === undefined)
        return false;
    return true;
}
export function PostAccountWrapperFromJSON(json) {
    return PostAccountWrapperFromJSONTyped(json, false);
}
export function PostAccountWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'account': SaveAccountFromJSON(json['account']),
    };
}
export function PostAccountWrapperToJSON(json) {
    return PostAccountWrapperToJSONTyped(json, false);
}
export function PostAccountWrapperToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'account': SaveAccountToJSON(value['account']),
    };
}
