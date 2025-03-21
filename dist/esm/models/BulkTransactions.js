/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { SaveTransactionWithOptionalFieldsFromJSON, SaveTransactionWithOptionalFieldsToJSON, } from './SaveTransactionWithOptionalFields';
/**
 * Check if a given object implements the BulkTransactions interface.
 */
export function instanceOfBulkTransactions(value) {
    if (!('transactions' in value) || value['transactions'] === undefined)
        return false;
    return true;
}
export function BulkTransactionsFromJSON(json) {
    return BulkTransactionsFromJSONTyped(json, false);
}
export function BulkTransactionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(SaveTransactionWithOptionalFieldsFromJSON)),
    };
}
export function BulkTransactionsToJSON(json) {
    return BulkTransactionsToJSONTyped(json, false);
}
export function BulkTransactionsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'transactions': (value['transactions'].map(SaveTransactionWithOptionalFieldsToJSON)),
    };
}
