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
import { TransactionDetailFromJSON, TransactionDetailToJSON, } from './TransactionDetail';
/**
 * Check if a given object implements the TransactionResponseData interface.
 */
export function instanceOfTransactionResponseData(value) {
    var isInstance = true;
    isInstance = isInstance && "transaction" in value;
    return isInstance;
}
export function TransactionResponseDataFromJSON(json) {
    return TransactionResponseDataFromJSONTyped(json, false);
}
export function TransactionResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transaction': TransactionDetailFromJSON(json['transaction']),
    };
}
export function TransactionResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transaction': TransactionDetailToJSON(value.transaction),
    };
}
