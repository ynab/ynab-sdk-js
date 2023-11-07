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
/**
 * Check if a given object implements the SaveSubTransaction interface.
 */
export function instanceOfSaveSubTransaction(value) {
    var isInstance = true;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
export function SaveSubTransactionFromJSON(json) {
    return SaveSubTransactionFromJSONTyped(json, false);
}
export function SaveSubTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'payee_id': !exists(json, 'payee_id') ? undefined : json['payee_id'],
        'payee_name': !exists(json, 'payee_name') ? undefined : json['payee_name'],
        'category_id': !exists(json, 'category_id') ? undefined : json['category_id'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
    };
}
export function SaveSubTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'payee_id': value.payee_id,
        'payee_name': value.payee_name,
        'category_id': value.category_id,
        'memo': value.memo,
    };
}