/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PayeeLocationResponseDataFromJSON, PayeeLocationResponseDataToJSON, } from './PayeeLocationResponseData';
/**
 * Check if a given object implements the PayeeLocationResponse interface.
 */
export function instanceOfPayeeLocationResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
export function PayeeLocationResponseFromJSON(json) {
    return PayeeLocationResponseFromJSONTyped(json, false);
}
export function PayeeLocationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': PayeeLocationResponseDataFromJSON(json['data']),
    };
}
export function PayeeLocationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': PayeeLocationResponseDataToJSON(value.data),
    };
}
