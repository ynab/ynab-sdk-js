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
 * Check if a given object implements the MonthSummary interface.
 */
export function instanceOfMonthSummary(value) {
    var isInstance = true;
    isInstance = isInstance && "month" in value;
    isInstance = isInstance && "income" in value;
    isInstance = isInstance && "budgeted" in value;
    isInstance = isInstance && "activity" in value;
    isInstance = isInstance && "to_be_budgeted" in value;
    isInstance = isInstance && "deleted" in value;
    return isInstance;
}
export function MonthSummaryFromJSON(json) {
    return MonthSummaryFromJSONTyped(json, false);
}
export function MonthSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'month': json['month'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'income': json['income'],
        'budgeted': json['budgeted'],
        'activity': json['activity'],
        'to_be_budgeted': json['to_be_budgeted'],
        'age_of_money': !exists(json, 'age_of_money') ? undefined : json['age_of_money'],
        'deleted': json['deleted'],
    };
}
export function MonthSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'month': value.month,
        'note': value.note,
        'income': value.income,
        'budgeted': value.budgeted,
        'activity': value.activity,
        'to_be_budgeted': value.to_be_budgeted,
        'age_of_money': value.age_of_money,
        'deleted': value.deleted,
    };
}
