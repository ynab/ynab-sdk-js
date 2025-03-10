/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { PayeeFromJSON, PayeeToJSON, } from './Payee';
/**
 * Check if a given object implements the PayeeResponseData interface.
 */
export function instanceOfPayeeResponseData(value) {
    if (!('payee' in value) || value['payee'] === undefined)
        return false;
    return true;
}
export function PayeeResponseDataFromJSON(json) {
    return PayeeResponseDataFromJSONTyped(json, false);
}
export function PayeeResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'payee': PayeeFromJSON(json['payee']),
    };
}
export function PayeeResponseDataToJSON(json) {
    return PayeeResponseDataToJSONTyped(json, false);
}
export function PayeeResponseDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'payee': PayeeToJSON(value['payee']),
    };
}
