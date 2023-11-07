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
 * Check if a given object implements the ScheduledSubTransaction interface.
 */
export function instanceOfScheduledSubTransaction(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "scheduled_transaction_id" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "deleted" in value;
    return isInstance;
}
export function ScheduledSubTransactionFromJSON(json) {
    return ScheduledSubTransactionFromJSONTyped(json, false);
}
export function ScheduledSubTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'scheduled_transaction_id': json['scheduled_transaction_id'],
        'amount': json['amount'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'payee_id': !exists(json, 'payee_id') ? undefined : json['payee_id'],
        'category_id': !exists(json, 'category_id') ? undefined : json['category_id'],
        'transfer_account_id': !exists(json, 'transfer_account_id') ? undefined : json['transfer_account_id'],
        'deleted': json['deleted'],
    };
}
export function ScheduledSubTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'scheduled_transaction_id': value.scheduled_transaction_id,
        'amount': value.amount,
        'memo': value.memo,
        'payee_id': value.payee_id,
        'category_id': value.category_id,
        'transfer_account_id': value.transfer_account_id,
        'deleted': value.deleted,
    };
}