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
import { SaveTransactionFromJSON, SaveTransactionToJSON, } from './SaveTransaction';
/**
 * Check if a given object implements the BulkTransactions interface.
 */
export function instanceOfBulkTransactions(value) {
    var isInstance = true;
    isInstance = isInstance && "transactions" in value;
    return isInstance;
}
export function BulkTransactionsFromJSON(json) {
    return BulkTransactionsFromJSONTyped(json, false);
}
export function BulkTransactionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(SaveTransactionFromJSON)),
    };
}
export function BulkTransactionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactions': (value.transactions.map(SaveTransactionToJSON)),
    };
}