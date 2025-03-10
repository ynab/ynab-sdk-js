/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { AccountTypeFromJSON, AccountTypeToJSON, } from './AccountType';
/**
 * Check if a given object implements the SaveAccount interface.
 */
export function instanceOfSaveAccount(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('balance' in value) || value['balance'] === undefined)
        return false;
    return true;
}
export function SaveAccountFromJSON(json) {
    return SaveAccountFromJSONTyped(json, false);
}
export function SaveAccountFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'type': AccountTypeFromJSON(json['type']),
        'balance': json['balance'],
    };
}
export function SaveAccountToJSON(json) {
    return SaveAccountToJSONTyped(json, false);
}
export function SaveAccountToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'type': AccountTypeToJSON(value['type']),
        'balance': value['balance'],
    };
}
