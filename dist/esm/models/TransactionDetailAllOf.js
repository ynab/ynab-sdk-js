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
import { SubTransactionFromJSON, SubTransactionToJSON, } from './SubTransaction';
/**
 * Check if a given object implements the TransactionDetailAllOf interface.
 */
export function instanceOfTransactionDetailAllOf(value) {
    var isInstance = true;
    isInstance = isInstance && "account_name" in value;
    isInstance = isInstance && "subtransactions" in value;
    return isInstance;
}
export function TransactionDetailAllOfFromJSON(json) {
    return TransactionDetailAllOfFromJSONTyped(json, false);
}
export function TransactionDetailAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account_name': json['account_name'],
        'payee_name': !exists(json, 'payee_name') ? undefined : json['payee_name'],
        'category_name': !exists(json, 'category_name') ? undefined : json['category_name'],
        'subtransactions': (json['subtransactions'].map(SubTransactionFromJSON)),
    };
}
export function TransactionDetailAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account_name': value.account_name,
        'payee_name': value.payee_name,
        'category_name': value.category_name,
        'subtransactions': (value.subtransactions.map(SubTransactionToJSON)),
    };
}
