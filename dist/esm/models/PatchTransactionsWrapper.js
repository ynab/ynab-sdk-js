/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { SaveTransactionWithIdOrImportIdFromJSON, SaveTransactionWithIdOrImportIdToJSON, } from './SaveTransactionWithIdOrImportId';
/**
 * Check if a given object implements the PatchTransactionsWrapper interface.
 */
export function instanceOfPatchTransactionsWrapper(value) {
    if (!('transactions' in value) || value['transactions'] === undefined)
        return false;
    return true;
}
export function PatchTransactionsWrapperFromJSON(json) {
    return PatchTransactionsWrapperFromJSONTyped(json, false);
}
export function PatchTransactionsWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(SaveTransactionWithIdOrImportIdFromJSON)),
    };
}
export function PatchTransactionsWrapperToJSON(json) {
    return PatchTransactionsWrapperToJSONTyped(json, false);
}
export function PatchTransactionsWrapperToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'transactions': (value['transactions'].map(SaveTransactionWithIdOrImportIdToJSON)),
    };
}
