"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledTransactionDetailToJSON = exports.ScheduledTransactionDetailFromJSONTyped = exports.ScheduledTransactionDetailFromJSON = exports.instanceOfScheduledTransactionDetail = exports.ScheduledTransactionDetailFrequencyEnum = void 0;
const TransactionFlagColor_1 = require("./TransactionFlagColor");
const ScheduledSubTransaction_1 = require("./ScheduledSubTransaction");
/**
 * @export
 */
exports.ScheduledTransactionDetailFrequencyEnum = {
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
function instanceOfScheduledTransactionDetail(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('date_first' in value) || value['date_first'] === undefined)
        return false;
    if (!('date_next' in value) || value['date_next'] === undefined)
        return false;
    if (!('frequency' in value) || value['frequency'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('account_id' in value) || value['account_id'] === undefined)
        return false;
    if (!('deleted' in value) || value['deleted'] === undefined)
        return false;
    if (!('account_name' in value) || value['account_name'] === undefined)
        return false;
    if (!('subtransactions' in value) || value['subtransactions'] === undefined)
        return false;
    return true;
}
exports.instanceOfScheduledTransactionDetail = instanceOfScheduledTransactionDetail;
function ScheduledTransactionDetailFromJSON(json) {
    return ScheduledTransactionDetailFromJSONTyped(json, false);
}
exports.ScheduledTransactionDetailFromJSON = ScheduledTransactionDetailFromJSON;
function ScheduledTransactionDetailFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'date_first': json['date_first'],
        'date_next': json['date_next'],
        'frequency': json['frequency'],
        'amount': json['amount'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'flag_color': json['flag_color'] == null ? undefined : (0, TransactionFlagColor_1.TransactionFlagColorFromJSON)(json['flag_color']),
        'flag_name': json['flag_name'] == null ? undefined : json['flag_name'],
        'account_id': json['account_id'],
        'payee_id': json['payee_id'] == null ? undefined : json['payee_id'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'transfer_account_id': json['transfer_account_id'] == null ? undefined : json['transfer_account_id'],
        'deleted': json['deleted'],
        'account_name': json['account_name'],
        'payee_name': json['payee_name'] == null ? undefined : json['payee_name'],
        'category_name': json['category_name'] == null ? undefined : json['category_name'],
        'subtransactions': (json['subtransactions'].map(ScheduledSubTransaction_1.ScheduledSubTransactionFromJSON)),
    };
}
exports.ScheduledTransactionDetailFromJSONTyped = ScheduledTransactionDetailFromJSONTyped;
function ScheduledTransactionDetailToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'date_first': value['date_first'],
        'date_next': value['date_next'],
        'frequency': value['frequency'],
        'amount': value['amount'],
        'memo': value['memo'],
        'flag_color': (0, TransactionFlagColor_1.TransactionFlagColorToJSON)(value['flag_color']),
        'flag_name': value['flag_name'],
        'account_id': value['account_id'],
        'payee_id': value['payee_id'],
        'category_id': value['category_id'],
        'transfer_account_id': value['transfer_account_id'],
        'deleted': value['deleted'],
        'account_name': value['account_name'],
        'payee_name': value['payee_name'],
        'category_name': value['category_name'],
        'subtransactions': (value['subtransactions'].map(ScheduledSubTransaction_1.ScheduledSubTransactionToJSON)),
    };
}
exports.ScheduledTransactionDetailToJSON = ScheduledTransactionDetailToJSON;
