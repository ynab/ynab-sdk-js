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

import { exists, mapValues } from '../runtime';
import type { ScheduledSubTransaction } from './ScheduledSubTransaction';
import {
    ScheduledSubTransactionFromJSON,
    ScheduledSubTransactionFromJSONTyped,
    ScheduledSubTransactionToJSON,
} from './ScheduledSubTransaction';
import type { TransactionFlagColor } from './TransactionFlagColor';
import {
    TransactionFlagColorFromJSON,
    TransactionFlagColorFromJSONTyped,
    TransactionFlagColorToJSON,
} from './TransactionFlagColor';

/**
 * 
 * @export
 * @interface ScheduledTransactionDetail
 */
export interface ScheduledTransactionDetail {
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    id: string;
    /**
     * The first date for which the Scheduled Transaction was scheduled.
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    date_first: string;
    /**
     * The next date for which the Scheduled Transaction is scheduled.
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    date_next: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    frequency: ScheduledTransactionDetailFrequencyEnum;
    /**
     * The scheduled transaction amount in milliunits format
     * @type {number}
     * @memberof ScheduledTransactionDetail
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    memo?: string | null;
    /**
     * 
     * @type {TransactionFlagColor}
     * @memberof ScheduledTransactionDetail
     */
    flag_color?: TransactionFlagColor | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    account_id: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    payee_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    category_id?: string | null;
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    transfer_account_id?: string | null;
    /**
     * Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
     * @type {boolean}
     * @memberof ScheduledTransactionDetail
     */
    deleted: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    account_name: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    payee_name?: string | null;
    /**
     * The name of the category.  If a split scheduled transaction, this will be 'Split'.
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    category_name?: string | null;
    /**
     * If a split scheduled transaction, the subtransactions.
     * @type {Array<ScheduledSubTransaction>}
     * @memberof ScheduledTransactionDetail
     */
    subtransactions: Array<ScheduledSubTransaction>;
}


/**
 * @export
 */
export const ScheduledTransactionDetailFrequencyEnum = {
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
export type ScheduledTransactionDetailFrequencyEnum = typeof ScheduledTransactionDetailFrequencyEnum[keyof typeof ScheduledTransactionDetailFrequencyEnum];


/**
 * Check if a given object implements the ScheduledTransactionDetail interface.
 */
export function instanceOfScheduledTransactionDetail(value: object): boolean {
    let isInstance = true;
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

export function ScheduledTransactionDetailFromJSON(json: any): ScheduledTransactionDetail {
    return ScheduledTransactionDetailFromJSONTyped(json, false);
}

export function ScheduledTransactionDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransactionDetail {
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
        'subtransactions': ((json['subtransactions'] as Array<any>).map(ScheduledSubTransactionFromJSON)),
    };
}

export function ScheduledTransactionDetailToJSON(value?: ScheduledTransactionDetail | null): any {
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
        'subtransactions': ((value.subtransactions as Array<any>).map(ScheduledSubTransactionToJSON)),
    };
}
