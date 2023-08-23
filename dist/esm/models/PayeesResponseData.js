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
import { PayeeFromJSON, PayeeToJSON, } from './Payee';
/**
 * Check if a given object implements the PayeesResponseData interface.
 */
export function instanceOfPayeesResponseData(value) {
    var isInstance = true;
    isInstance = isInstance && "payees" in value;
    isInstance = isInstance && "server_knowledge" in value;
    return isInstance;
}
export function PayeesResponseDataFromJSON(json) {
    return PayeesResponseDataFromJSONTyped(json, false);
}
export function PayeesResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payees': (json['payees'].map(PayeeFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}
export function PayeesResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payees': (value.payees.map(PayeeToJSON)),
        'server_knowledge': value.server_knowledge,
    };
}
