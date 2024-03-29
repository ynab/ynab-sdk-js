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
/**
 * 
 * @export
 * @interface MonthSummary
 */
export interface MonthSummary {
    /**
     * 
     * @type {string}
     * @memberof MonthSummary
     */
    month: string;
    /**
     * 
     * @type {string}
     * @memberof MonthSummary
     */
    note?: string | null;
    /**
     * The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month
     * @type {number}
     * @memberof MonthSummary
     */
    income: number;
    /**
     * The total amount budgeted in the month
     * @type {number}
     * @memberof MonthSummary
     */
    budgeted: number;
    /**
     * The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'
     * @type {number}
     * @memberof MonthSummary
     */
    activity: number;
    /**
     * The available amount for 'Ready to Assign'
     * @type {number}
     * @memberof MonthSummary
     */
    to_be_budgeted: number;
    /**
     * The Age of Money as of the month
     * @type {number}
     * @memberof MonthSummary
     */
    age_of_money?: number | null;
    /**
     * Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
     * @type {boolean}
     * @memberof MonthSummary
     */
    deleted: boolean;
}

/**
 * Check if a given object implements the MonthSummary interface.
 */
export function instanceOfMonthSummary(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "month" in value;
    isInstance = isInstance && "income" in value;
    isInstance = isInstance && "budgeted" in value;
    isInstance = isInstance && "activity" in value;
    isInstance = isInstance && "to_be_budgeted" in value;
    isInstance = isInstance && "deleted" in value;

    return isInstance;
}

export function MonthSummaryFromJSON(json: any): MonthSummary {
    return MonthSummaryFromJSONTyped(json, false);
}

export function MonthSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthSummary {
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

export function MonthSummaryToJSON(value?: MonthSummary | null): any {
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

