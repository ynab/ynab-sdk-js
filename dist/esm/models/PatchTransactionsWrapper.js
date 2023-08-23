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
import { SaveTransactionWithIdFromJSON, SaveTransactionWithIdToJSON, } from './SaveTransactionWithId';
/**
 * Check if a given object implements the PatchTransactionsWrapper interface.
 */
export function instanceOfPatchTransactionsWrapper(value) {
    var isInstance = true;
    isInstance = isInstance && "transactions" in value;
    return isInstance;
}
export function PatchTransactionsWrapperFromJSON(json) {
    return PatchTransactionsWrapperFromJSONTyped(json, false);
}
export function PatchTransactionsWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(SaveTransactionWithIdFromJSON)),
    };
}
export function PatchTransactionsWrapperToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactions': (value.transactions.map(SaveTransactionWithIdToJSON)),
    };
}
