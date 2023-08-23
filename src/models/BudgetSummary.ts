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
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
} from './Account';
import type { CurrencyFormat } from './CurrencyFormat';
import {
    CurrencyFormatFromJSON,
    CurrencyFormatFromJSONTyped,
    CurrencyFormatToJSON,
} from './CurrencyFormat';
import type { DateFormat } from './DateFormat';
import {
    DateFormatFromJSON,
    DateFormatFromJSONTyped,
    DateFormatToJSON,
} from './DateFormat';

/**
 * 
 * @export
 * @interface BudgetSummary
 */
export interface BudgetSummary {
    /**
     * 
     * @type {string}
     * @memberof BudgetSummary
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BudgetSummary
     */
    name: string;
    /**
     * The last time any changes were made to the budget from either a web or mobile client
     * @type {string}
     * @memberof BudgetSummary
     */
    last_modified_on?: string;
    /**
     * The earliest budget month
     * @type {string}
     * @memberof BudgetSummary
     */
    first_month?: string;
    /**
     * The latest budget month
     * @type {string}
     * @memberof BudgetSummary
     */
    last_month?: string;
    /**
     * 
     * @type {DateFormat}
     * @memberof BudgetSummary
     */
    date_format?: DateFormat | null;
    /**
     * 
     * @type {CurrencyFormat}
     * @memberof BudgetSummary
     */
    currency_format?: CurrencyFormat | null;
    /**
     * The budget accounts (only included if `include_accounts=true` specified as query parameter)
     * @type {Array<Account>}
     * @memberof BudgetSummary
     */
    accounts?: Array<Account>;
}

/**
 * Check if a given object implements the BudgetSummary interface.
 */
export function instanceOfBudgetSummary(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function BudgetSummaryFromJSON(json: any): BudgetSummary {
    return BudgetSummaryFromJSONTyped(json, false);
}

export function BudgetSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'last_modified_on': !exists(json, 'last_modified_on') ? undefined : json['last_modified_on'],
        'first_month': !exists(json, 'first_month') ? undefined : json['first_month'],
        'last_month': !exists(json, 'last_month') ? undefined : json['last_month'],
        'date_format': !exists(json, 'date_format') ? undefined : DateFormatFromJSON(json['date_format']),
        'currency_format': !exists(json, 'currency_format') ? undefined : CurrencyFormatFromJSON(json['currency_format']),
        'accounts': !exists(json, 'accounts') ? undefined : ((json['accounts'] as Array<any>).map(AccountFromJSON)),
    };
}

export function BudgetSummaryToJSON(value?: BudgetSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'last_modified_on': value.last_modified_on,
        'first_month': value.first_month,
        'last_month': value.last_month,
        'date_format': DateFormatToJSON(value.date_format),
        'currency_format': CurrencyFormatToJSON(value.currency_format),
        'accounts': value.accounts === undefined ? undefined : ((value.accounts as Array<any>).map(AccountToJSON)),
    };
}

