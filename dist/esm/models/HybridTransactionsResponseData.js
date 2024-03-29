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
import { HybridTransactionFromJSON, HybridTransactionToJSON, } from './HybridTransaction';
/**
 * Check if a given object implements the HybridTransactionsResponseData interface.
 */
export function instanceOfHybridTransactionsResponseData(value) {
    var isInstance = true;
    isInstance = isInstance && "transactions" in value;
    return isInstance;
}
export function HybridTransactionsResponseDataFromJSON(json) {
    return HybridTransactionsResponseDataFromJSONTyped(json, false);
}
export function HybridTransactionsResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'transactions': (json['transactions'].map(HybridTransactionFromJSON)),
        'server_knowledge': !exists(json, 'server_knowledge') ? undefined : json['server_knowledge'],
    };
}
export function HybridTransactionsResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'transactions': (value.transactions.map(HybridTransactionToJSON)),
        'server_knowledge': value.server_knowledge,
    };
}
