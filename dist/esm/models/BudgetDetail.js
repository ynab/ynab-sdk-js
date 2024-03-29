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
import { AccountFromJSON, AccountToJSON, } from './Account';
import { CategoryFromJSON, CategoryToJSON, } from './Category';
import { CategoryGroupFromJSON, CategoryGroupToJSON, } from './CategoryGroup';
import { CurrencyFormatFromJSON, CurrencyFormatToJSON, } from './CurrencyFormat';
import { DateFormatFromJSON, DateFormatToJSON, } from './DateFormat';
import { MonthDetailFromJSON, MonthDetailToJSON, } from './MonthDetail';
import { PayeeFromJSON, PayeeToJSON, } from './Payee';
import { PayeeLocationFromJSON, PayeeLocationToJSON, } from './PayeeLocation';
import { ScheduledSubTransactionFromJSON, ScheduledSubTransactionToJSON, } from './ScheduledSubTransaction';
import { ScheduledTransactionSummaryFromJSON, ScheduledTransactionSummaryToJSON, } from './ScheduledTransactionSummary';
import { SubTransactionFromJSON, SubTransactionToJSON, } from './SubTransaction';
import { TransactionSummaryFromJSON, TransactionSummaryToJSON, } from './TransactionSummary';
/**
 * Check if a given object implements the BudgetDetail interface.
 */
export function instanceOfBudgetDetail(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function BudgetDetailFromJSON(json) {
    return BudgetDetailFromJSONTyped(json, false);
}
export function BudgetDetailFromJSONTyped(json, ignoreDiscriminator) {
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
        'accounts': !exists(json, 'accounts') ? undefined : (json['accounts'].map(AccountFromJSON)),
        'payees': !exists(json, 'payees') ? undefined : (json['payees'].map(PayeeFromJSON)),
        'payee_locations': !exists(json, 'payee_locations') ? undefined : (json['payee_locations'].map(PayeeLocationFromJSON)),
        'category_groups': !exists(json, 'category_groups') ? undefined : (json['category_groups'].map(CategoryGroupFromJSON)),
        'categories': !exists(json, 'categories') ? undefined : (json['categories'].map(CategoryFromJSON)),
        'months': !exists(json, 'months') ? undefined : (json['months'].map(MonthDetailFromJSON)),
        'transactions': !exists(json, 'transactions') ? undefined : (json['transactions'].map(TransactionSummaryFromJSON)),
        'subtransactions': !exists(json, 'subtransactions') ? undefined : (json['subtransactions'].map(SubTransactionFromJSON)),
        'scheduled_transactions': !exists(json, 'scheduled_transactions') ? undefined : (json['scheduled_transactions'].map(ScheduledTransactionSummaryFromJSON)),
        'scheduled_subtransactions': !exists(json, 'scheduled_subtransactions') ? undefined : (json['scheduled_subtransactions'].map(ScheduledSubTransactionFromJSON)),
    };
}
export function BudgetDetailToJSON(value) {
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
        'accounts': value.accounts === undefined ? undefined : (value.accounts.map(AccountToJSON)),
        'payees': value.payees === undefined ? undefined : (value.payees.map(PayeeToJSON)),
        'payee_locations': value.payee_locations === undefined ? undefined : (value.payee_locations.map(PayeeLocationToJSON)),
        'category_groups': value.category_groups === undefined ? undefined : (value.category_groups.map(CategoryGroupToJSON)),
        'categories': value.categories === undefined ? undefined : (value.categories.map(CategoryToJSON)),
        'months': value.months === undefined ? undefined : (value.months.map(MonthDetailToJSON)),
        'transactions': value.transactions === undefined ? undefined : (value.transactions.map(TransactionSummaryToJSON)),
        'subtransactions': value.subtransactions === undefined ? undefined : (value.subtransactions.map(SubTransactionToJSON)),
        'scheduled_transactions': value.scheduled_transactions === undefined ? undefined : (value.scheduled_transactions.map(ScheduledTransactionSummaryToJSON)),
        'scheduled_subtransactions': value.scheduled_subtransactions === undefined ? undefined : (value.scheduled_subtransactions.map(ScheduledSubTransactionToJSON)),
    };
}
