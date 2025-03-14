/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { PayeeLocation } from './PayeeLocation';
import {
    PayeeLocationFromJSON,
    PayeeLocationFromJSONTyped,
    PayeeLocationToJSON,
    PayeeLocationToJSONTyped,
} from './PayeeLocation';
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
    AccountToJSONTyped,
} from './Account';
import type { ScheduledTransactionSummary } from './ScheduledTransactionSummary';
import {
    ScheduledTransactionSummaryFromJSON,
    ScheduledTransactionSummaryFromJSONTyped,
    ScheduledTransactionSummaryToJSON,
    ScheduledTransactionSummaryToJSONTyped,
} from './ScheduledTransactionSummary';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
    CategoryToJSONTyped,
} from './Category';
import type { CurrencyFormat } from './CurrencyFormat';
import {
    CurrencyFormatFromJSON,
    CurrencyFormatFromJSONTyped,
    CurrencyFormatToJSON,
    CurrencyFormatToJSONTyped,
} from './CurrencyFormat';
import type { DateFormat } from './DateFormat';
import {
    DateFormatFromJSON,
    DateFormatFromJSONTyped,
    DateFormatToJSON,
    DateFormatToJSONTyped,
} from './DateFormat';
import type { SubTransaction } from './SubTransaction';
import {
    SubTransactionFromJSON,
    SubTransactionFromJSONTyped,
    SubTransactionToJSON,
    SubTransactionToJSONTyped,
} from './SubTransaction';
import type { MonthDetail } from './MonthDetail';
import {
    MonthDetailFromJSON,
    MonthDetailFromJSONTyped,
    MonthDetailToJSON,
    MonthDetailToJSONTyped,
} from './MonthDetail';
import type { Payee } from './Payee';
import {
    PayeeFromJSON,
    PayeeFromJSONTyped,
    PayeeToJSON,
    PayeeToJSONTyped,
} from './Payee';
import type { ScheduledSubTransaction } from './ScheduledSubTransaction';
import {
    ScheduledSubTransactionFromJSON,
    ScheduledSubTransactionFromJSONTyped,
    ScheduledSubTransactionToJSON,
    ScheduledSubTransactionToJSONTyped,
} from './ScheduledSubTransaction';
import type { TransactionSummary } from './TransactionSummary';
import {
    TransactionSummaryFromJSON,
    TransactionSummaryFromJSONTyped,
    TransactionSummaryToJSON,
    TransactionSummaryToJSONTyped,
} from './TransactionSummary';
import type { CategoryGroup } from './CategoryGroup';
import {
    CategoryGroupFromJSON,
    CategoryGroupFromJSONTyped,
    CategoryGroupToJSON,
    CategoryGroupToJSONTyped,
} from './CategoryGroup';

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
export function instanceOfBudgetDetail(value: object): value is BudgetDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function BudgetDetailFromJSON(json: any): BudgetDetail {
    return BudgetDetailFromJSONTyped(json, false);
}

export function BudgetDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'last_modified_on': json['last_modified_on'] == null ? undefined : json['last_modified_on'],
        'first_month': json['first_month'] == null ? undefined : json['first_month'],
        'last_month': json['last_month'] == null ? undefined : json['last_month'],
        'date_format': json['date_format'] == null ? undefined : DateFormatFromJSON(json['date_format']),
        'currency_format': json['currency_format'] == null ? undefined : CurrencyFormatFromJSON(json['currency_format']),
        'accounts': json['accounts'] == null ? undefined : ((json['accounts'] as Array<any>).map(AccountFromJSON)),
        'payees': json['payees'] == null ? undefined : ((json['payees'] as Array<any>).map(PayeeFromJSON)),
        'payee_locations': json['payee_locations'] == null ? undefined : ((json['payee_locations'] as Array<any>).map(PayeeLocationFromJSON)),
        'category_groups': json['category_groups'] == null ? undefined : ((json['category_groups'] as Array<any>).map(CategoryGroupFromJSON)),
        'categories': json['categories'] == null ? undefined : ((json['categories'] as Array<any>).map(CategoryFromJSON)),
        'months': json['months'] == null ? undefined : ((json['months'] as Array<any>).map(MonthDetailFromJSON)),
        'transactions': json['transactions'] == null ? undefined : ((json['transactions'] as Array<any>).map(TransactionSummaryFromJSON)),
        'subtransactions': json['subtransactions'] == null ? undefined : ((json['subtransactions'] as Array<any>).map(SubTransactionFromJSON)),
        'scheduled_transactions': json['scheduled_transactions'] == null ? undefined : ((json['scheduled_transactions'] as Array<any>).map(ScheduledTransactionSummaryFromJSON)),
        'scheduled_subtransactions': json['scheduled_subtransactions'] == null ? undefined : ((json['scheduled_subtransactions'] as Array<any>).map(ScheduledSubTransactionFromJSON)),
    };
}

export function BudgetDetailToJSON(json: any): BudgetDetail {
    return BudgetDetailToJSONTyped(json, false);
}

export function BudgetDetailToJSONTyped(value?: BudgetDetail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'last_modified_on': value['last_modified_on'],
        'first_month': value['first_month'],
        'last_month': value['last_month'],
        'date_format': DateFormatToJSON(value['date_format']),
        'currency_format': CurrencyFormatToJSON(value['currency_format']),
        'accounts': value['accounts'] == null ? undefined : ((value['accounts'] as Array<any>).map(AccountToJSON)),
        'payees': value['payees'] == null ? undefined : ((value['payees'] as Array<any>).map(PayeeToJSON)),
        'payee_locations': value['payee_locations'] == null ? undefined : ((value['payee_locations'] as Array<any>).map(PayeeLocationToJSON)),
        'category_groups': value['category_groups'] == null ? undefined : ((value['category_groups'] as Array<any>).map(CategoryGroupToJSON)),
        'categories': value['categories'] == null ? undefined : ((value['categories'] as Array<any>).map(CategoryToJSON)),
        'months': value['months'] == null ? undefined : ((value['months'] as Array<any>).map(MonthDetailToJSON)),
        'transactions': value['transactions'] == null ? undefined : ((value['transactions'] as Array<any>).map(TransactionSummaryToJSON)),
        'subtransactions': value['subtransactions'] == null ? undefined : ((value['subtransactions'] as Array<any>).map(SubTransactionToJSON)),
        'scheduled_transactions': value['scheduled_transactions'] == null ? undefined : ((value['scheduled_transactions'] as Array<any>).map(ScheduledTransactionSummaryToJSON)),
        'scheduled_subtransactions': value['scheduled_subtransactions'] == null ? undefined : ((value['scheduled_subtransactions'] as Array<any>).map(ScheduledSubTransactionToJSON)),
    };
}

