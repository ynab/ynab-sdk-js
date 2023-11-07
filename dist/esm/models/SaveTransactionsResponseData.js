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
import { exists } from '../runtime';
import { TransactionDetailFromJSON, TransactionDetailToJSON, } from './TransactionDetail';
/**
 * Check if a given object implements the SaveTransactionsResponseData interface.
 */
export function instanceOfSaveTransactionsResponseData(value) {
    var isInstance = true;
    isInstance = isInstance && "transaction_ids" in value;
    isInstance = isInstance && "server_knowledge" in value;
    return isInstance;
}
export function SaveTransactionsResponseDataFromJSON(json) {
    return SaveTransactionsResponseDataFromJSONTyped(json, false);
}
export function SaveTransactionsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transaction_ids': json['transaction_ids'],
        'transaction': !exists(json, 'transaction') ? undefined : TransactionDetailFromJSON(json['transaction']),
        'transactions': !exists(json, 'transactions') ? undefined : (json['transactions'].map(TransactionDetailFromJSON)),
        'duplicate_import_ids': !exists(json, 'duplicate_import_ids') ? undefined : json['duplicate_import_ids'],
        'server_knowledge': json['server_knowledge'],
    };
}
export function SaveTransactionsResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transaction_ids': value.transaction_ids,
        'transaction': TransactionDetailToJSON(value.transaction),
        'transactions': value.transactions === undefined ? undefined : (value.transactions.map(TransactionDetailToJSON)),
        'duplicate_import_ids': value.duplicate_import_ids,
        'server_knowledge': value.server_knowledge,
    };
}