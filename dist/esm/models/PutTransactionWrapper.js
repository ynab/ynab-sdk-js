/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { ExistingTransactionFromJSON, ExistingTransactionToJSON, } from './ExistingTransaction';
/**
 * Check if a given object implements the PutTransactionWrapper interface.
 */
export function instanceOfPutTransactionWrapper(value) {
    if (!('transaction' in value) || value['transaction'] === undefined)
        return false;
    return true;
}
export function PutTransactionWrapperFromJSON(json) {
    return PutTransactionWrapperFromJSONTyped(json, false);
}
export function PutTransactionWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'transaction': ExistingTransactionFromJSON(json['transaction']),
    };
}
export function PutTransactionWrapperToJSON(json) {
    return PutTransactionWrapperToJSONTyped(json, false);
}
export function PutTransactionWrapperToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'transaction': ExistingTransactionToJSON(value['transaction']),
    };
}
