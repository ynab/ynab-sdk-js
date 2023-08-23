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
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import type { CategoryGroup } from './CategoryGroup';
import {
    CategoryGroupFromJSON,
    CategoryGroupFromJSONTyped,
    CategoryGroupToJSON,
} from './CategoryGroup';
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
import type { MonthDetail } from './MonthDetail';
import {
    MonthDetailFromJSON,
    MonthDetailFromJSONTyped,
    MonthDetailToJSON,
} from './MonthDetail';
import type { Payee } from './Payee';
import {
    PayeeFromJSON,
    PayeeFromJSONTyped,
    PayeeToJSON,
} from './Payee';
import type { PayeeLocation } from './PayeeLocation';
import {
    PayeeLocationFromJSON,
    PayeeLocationFromJSONTyped,
    PayeeLocationToJSON,
} from './PayeeLocation';
import type { ScheduledSubTransaction } from './ScheduledSubTransaction';
import {
    ScheduledSubTransactionFromJSON,
    ScheduledSubTransactionFromJSONTyped,
    ScheduledSubTransactionToJSON,
} from './ScheduledSubTransaction';
import type { ScheduledTransactionSummary } from './ScheduledTransactionSummary';
import {
    ScheduledTransactionSummaryFromJSON,
    ScheduledTransactionSummaryFromJSONTyped,
    ScheduledTransactionSummaryToJSON,
} from './ScheduledTransactionSummary';
import type { SubTransaction } from './SubTransaction';
import {
    SubTransactionFromJSON,
    SubTransactionFromJSONTyped,
    SubTransactionToJSON,
} from './SubTransaction';
import type { TransactionSummary } from './TransactionSummary';
import {
    TransactionSummaryFromJSON,
    TransactionSummaryFromJSONTyped,
    TransactionSummaryToJSON,
} from './TransactionSummary';

/**
 * 
 * @export
 * @interface BudgetDetail
 */
export interface BudgetDetail {
    /**
     * 
     * @type {string}
     * @memberof BudgetDetail
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BudgetDetail
     */
    name: string;
    /**
     * The last time any changes were made to the budget from either a web or mobile client
     * @type {string}
     * @memberof BudgetDetail
     */
    last_modified_on?: string;
    /**
     * The earliest budget month
     * @type {string}
     * @memberof BudgetDetail
     */
    first_month?: string;
    /**
     * The latest budget month
     * @type {string}
     * @memberof BudgetDetail
     */
    last_month?: string;
    /**
     * 
     * @type {DateFormat}
     * @memberof BudgetDetail
     */
    date_format?: DateFormat | null;
    /**
     * 
     * @type {CurrencyFormat}
     * @memberof BudgetDetail
     */
    currency_format?: CurrencyFormat | null;
    /**
     * 
     * @type {Array<Account>}
     * @memberof BudgetDetail
     */
    accounts?: Array<Account>;
    /**
     * 
     * @type {Array<Payee>}
     * @memberof BudgetDetail
     */
    payees?: Array<Payee>;
    /**
     * 
     * @type {Array<PayeeLocation>}
     * @memberof BudgetDetail
     */
    payee_locations?: Array<PayeeLocation>;
    /**
     * 
     * @type {Array<CategoryGroup>}
     * @memberof BudgetDetail
     */
    category_groups?: Array<CategoryGroup>;
    /**
     * 
     * @type {Array<Category>}
     * @memberof BudgetDetail
     */
    categories?: Array<Category>;
    /**
     * 
     * @type {Array<MonthDetail>}
     * @memberof BudgetDetail
     */
    months?: Array<MonthDetail>;
    /**
     * 
     * @type {Array<TransactionSummary>}
     * @memberof BudgetDetail
     */
    transactions?: Array<TransactionSummary>;
    /**
     * 
     * @type {Array<SubTransaction>}
     * @memberof BudgetDetail
     */
    subtransactions?: Array<SubTransaction>;
    /**
     * 
     * @type {Array<ScheduledTransactionSummary>}
     * @memberof BudgetDetail
     */
    scheduled_transactions?: Array<ScheduledTransactionSummary>;
    /**
     * 
     * @type {Array<ScheduledSubTransaction>}
     * @memberof BudgetDetail
     */
    scheduled_subtransactions?: Array<ScheduledSubTransaction>;
}

/**
 * Check if a given object implements the BudgetDetail interface.
 */
export function instanceOfBudgetDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function BudgetDetailFromJSON(json: any): BudgetDetail {
    return BudgetDetailFromJSONTyped(json, false);
}

export function BudgetDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetDetail {
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
        'payees': !exists(json, 'payees') ? undefined : ((json['payees'] as Array<any>).map(PayeeFromJSON)),
        'payee_locations': !exists(json, 'payee_locations') ? undefined : ((json['payee_locations'] as Array<any>).map(PayeeLocationFromJSON)),
        'category_groups': !exists(json, 'category_groups') ? undefined : ((json['category_groups'] as Array<any>).map(CategoryGroupFromJSON)),
        'categories': !exists(json, 'categories') ? undefined : ((json['categories'] as Array<any>).map(CategoryFromJSON)),
        'months': !exists(json, 'months') ? undefined : ((json['months'] as Array<any>).map(MonthDetailFromJSON)),
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(TransactionSummaryFromJSON)),
        'subtransactions': !exists(json, 'subtransactions') ? undefined : ((json['subtransactions'] as Array<any>).map(SubTransactionFromJSON)),
        'scheduled_transactions': !exists(json, 'scheduled_transactions') ? undefined : ((json['scheduled_transactions'] as Array<any>).map(ScheduledTransactionSummaryFromJSON)),
        'scheduled_subtransactions': !exists(json, 'scheduled_subtransactions') ? undefined : ((json['scheduled_subtransactions'] as Array<any>).map(ScheduledSubTransactionFromJSON)),
    };
}

export function BudgetDetailToJSON(value?: BudgetDetail | null): any {
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
        'payees': value.payees === undefined ? undefined : ((value.payees as Array<any>).map(PayeeToJSON)),
        'payee_locations': value.payee_locations === undefined ? undefined : ((value.payee_locations as Array<any>).map(PayeeLocationToJSON)),
        'category_groups': value.category_groups === undefined ? undefined : ((value.category_groups as Array<any>).map(CategoryGroupToJSON)),
        'categories': value.categories === undefined ? undefined : ((value.categories as Array<any>).map(CategoryToJSON)),
        'months': value.months === undefined ? undefined : ((value.months as Array<any>).map(MonthDetailToJSON)),
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(TransactionSummaryToJSON)),
        'subtransactions': value.subtransactions === undefined ? undefined : ((value.subtransactions as Array<any>).map(SubTransactionToJSON)),
        'scheduled_transactions': value.scheduled_transactions === undefined ? undefined : ((value.scheduled_transactions as Array<any>).map(ScheduledTransactionSummaryToJSON)),
        'scheduled_subtransactions': value.scheduled_subtransactions === undefined ? undefined : ((value.scheduled_subtransactions as Array<any>).map(ScheduledSubTransactionToJSON)),
    };
}

