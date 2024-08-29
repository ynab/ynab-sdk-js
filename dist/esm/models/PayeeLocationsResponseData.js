/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { PayeeLocationFromJSON, PayeeLocationToJSON, } from './PayeeLocation';
/**
 * Check if a given object implements the PayeeLocationsResponseData interface.
 */
export function instanceOfPayeeLocationsResponseData(value) {
    if (!('payee_locations' in value) || value['payee_locations'] === undefined)
        return false;
    return true;
}
export function PayeeLocationsResponseDataFromJSON(json) {
    return PayeeLocationsResponseDataFromJSONTyped(json, false);
}
export function PayeeLocationsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'payee_locations': (json['payee_locations'].map(PayeeLocationFromJSON)),
    };
}
export function PayeeLocationsResponseDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'payee_locations': (value['payee_locations'].map(PayeeLocationToJSON)),
    };
}
