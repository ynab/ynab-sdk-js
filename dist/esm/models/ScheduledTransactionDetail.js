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
import { ScheduledSubTransactionFromJSON, ScheduledSubTransactionToJSON, } from './ScheduledSubTransaction';
import { TransactionFlagColorFromJSON, TransactionFlagColorToJSON, } from './TransactionFlagColor';
/**
 * @export
 */
export var ScheduledTransactionDetailFrequencyEnum = {
    Never: 'never',
    Daily: 'daily',
    Weekly: 'weekly',
    EveryOtherWeek: 'everyOtherWeek',
    TwiceAMonth: 'twiceAMonth',
    Every4Weeks: 'every4Weeks',
    Monthly: 'monthly',
    EveryOtherMonth: 'everyOtherMonth',
    Every3Months: 'every3Months',
    Every4Months: 'every4Months',
    TwiceAYear: 'twiceAYear',
    Yearly: 'yearly',
    EveryOtherYear: 'everyOtherYear'
};
/**
 * Check if a given object implements the ScheduledTransactionDetail interface.
 */
export function instanceOfScheduledTransactionDetail(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "date_first" in value;
    isInstance = isInstance && "date_next" in value;
    isInstance = isInstance && "frequency" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "account_id" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "account_name" in value;
    isInstance = isInstance && "subtransactions" in value;
    return isInstance;
}
export function ScheduledTransactionDetailFromJSON(json) {
    return ScheduledTransactionDetailFromJSONTyped(json, false);
}
export function ScheduledTransactionDetailFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'date_first': json['date_first'],
        'date_next': json['date_next'],
        'frequency': json['frequency'],
        'amount': json['amount'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'flag_color': !exists(json, 'flag_color') ? undefined : TransactionFlagColorFromJSON(json['flag_color']),
        'account_id': json['account_id'],
        'payee_id': !exists(json, 'payee_id') ? undefined : json['payee_id'],
        'category_id': !exists(json, 'category_id') ? undefined : json['category_id'],
        'transfer_account_id': !exists(json, 'transfer_account_id') ? undefined : json['transfer_account_id'],
        'deleted': json['deleted'],
        'account_name': json['account_name'],
        'payee_name': !exists(json, 'payee_name') ? undefined : json['payee_name'],
        'category_name': !exists(json, 'category_name') ? undefined : json['category_name'],
        'subtransactions': (json['subtransactions'].map(ScheduledSubTransactionFromJSON)),
    };
}
export function ScheduledTransactionDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'date_first': value.date_first,
        'date_next': value.date_next,
        'frequency': value.frequency,
        'amount': value.amount,
        'memo': value.memo,
        'flag_color': TransactionFlagColorToJSON(value.flag_color),
        'account_id': value.account_id,
        'payee_id': value.payee_id,
        'category_id': value.category_id,
        'transfer_account_id': value.transfer_account_id,
        'deleted': value.deleted,
        'account_name': value.account_name,
        'payee_name': value.payee_name,
        'category_name': value.category_name,
        'subtransactions': (value.subtransactions.map(ScheduledSubTransactionToJSON)),
    };
}
