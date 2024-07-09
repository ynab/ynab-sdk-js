/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { TransactionFlagColor } from './TransactionFlagColor';
import {
    TransactionFlagColorFromJSON,
    TransactionFlagColorFromJSONTyped,
    TransactionFlagColorToJSON,
} from './TransactionFlagColor';

/**
 * 
 * @export
 * @interface ScheduledTransactionSummary
 */
export interface ScheduledTransactionSummary {
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    id: string;
    /**
     * The first date for which the Scheduled Transaction was scheduled.
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    date_first: string;
    /**
     * The next date for which the Scheduled Transaction is scheduled.
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    date_next: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    frequency: ScheduledTransactionSummaryFrequencyEnum;
    /**
     * The scheduled transaction amount in milliunits format
     * @type {number}
     * @memberof ScheduledTransactionSummary
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    memo?: string | null;
    /**
     * 
     * @type {TransactionFlagColor}
     * @memberof ScheduledTransactionSummary
     */
    flag_color?: TransactionFlagColor | null;
    /**
     * The customized name of a transaction flag
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    flag_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    account_id: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    payee_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    category_id?: string | null;
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    transfer_account_id?: string | null;
    /**
     * Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
     * @type {boolean}
     * @memberof ScheduledTransactionSummary
     */
    deleted: boolean;
}


/**
 * @export
 */
export const ScheduledTransactionSummaryFrequencyEnum = {
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
} as const;
export type ScheduledTransactionSummaryFrequencyEnum = typeof ScheduledTransactionSummaryFrequencyEnum[keyof typeof ScheduledTransactionSummaryFrequencyEnum];


/**
 * Check if a given object implements the ScheduledTransactionSummary interface.
 */
export function instanceOfScheduledTransactionSummary(value: object): value is ScheduledTransactionSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('date_first' in value) || value['date_first'] === undefined) return false;
    if (!('date_next' in value) || value['date_next'] === undefined) return false;
    if (!('frequency' in value) || value['frequency'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('account_id' in value) || value['account_id'] === undefined) return false;
    if (!('deleted' in value) || value['deleted'] === undefined) return false;
    return true;
}

export function ScheduledTransactionSummaryFromJSON(json: any): ScheduledTransactionSummary {
    return ScheduledTransactionSummaryFromJSONTyped(json, false);
}

export function ScheduledTransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransactionSummary {
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
        'flag_color': json['flag_color'] == null ? undefined : TransactionFlagColorFromJSON(json['flag_color']),
        'flag_name': json['flag_name'] == null ? undefined : json['flag_name'],
        'account_id': json['account_id'],
        'payee_id': json['payee_id'] == null ? undefined : json['payee_id'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'transfer_account_id': json['transfer_account_id'] == null ? undefined : json['transfer_account_id'],
        'deleted': json['deleted'],
    };
}

export function ScheduledTransactionSummaryToJSON(value?: ScheduledTransactionSummary | null): any {
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
        'flag_color': TransactionFlagColorToJSON(value['flag_color']),
        'flag_name': value['flag_name'],
        'account_id': value['account_id'],
        'payee_id': value['payee_id'],
        'category_id': value['category_id'],
        'transfer_account_id': value['transfer_account_id'],
        'deleted': value['deleted'],
    };
}

