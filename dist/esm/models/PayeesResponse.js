/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { PayeesResponseDataFromJSON, PayeesResponseDataToJSON, } from './PayeesResponseData';
/**
 * Check if a given object implements the PayeesResponse interface.
 */
export function instanceOfPayeesResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
export function PayeesResponseFromJSON(json) {
    return PayeesResponseFromJSONTyped(json, false);
}
export function PayeesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': PayeesResponseDataFromJSON(json['data']),
    };
}
export function PayeesResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': PayeesResponseDataToJSON(value['data']),
    };
}
