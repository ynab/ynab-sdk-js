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
import { SaveTransactionsResponseDataFromJSON, SaveTransactionsResponseDataToJSON, } from './SaveTransactionsResponseData';
/**
 * Check if a given object implements the SaveTransactionsResponse interface.
 */
export function instanceOfSaveTransactionsResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
export function SaveTransactionsResponseFromJSON(json) {
    return SaveTransactionsResponseFromJSONTyped(json, false);
}
export function SaveTransactionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': SaveTransactionsResponseDataFromJSON(json['data']),
    };
}
export function SaveTransactionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': SaveTransactionsResponseDataToJSON(value.data),
    };
}
