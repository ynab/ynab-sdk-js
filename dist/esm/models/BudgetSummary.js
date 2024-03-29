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
import { CurrencyFormatFromJSON, CurrencyFormatToJSON, } from './CurrencyFormat';
import { DateFormatFromJSON, DateFormatToJSON, } from './DateFormat';
/**
 * Check if a given object implements the BudgetSummary interface.
 */
export function instanceOfBudgetSummary(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function BudgetSummaryFromJSON(json) {
    return BudgetSummaryFromJSONTyped(json, false);
}
export function BudgetSummaryFromJSONTyped(json, ignoreDiscriminator) {
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
    };
}
export function BudgetSummaryToJSON(value) {
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
    };
}
