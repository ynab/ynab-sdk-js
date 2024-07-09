/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
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
export function instanceOfMonthSummary(value: object): value is MonthSummary {
    if (!('month' in value) || value['month'] === undefined) return false;
    if (!('income' in value) || value['income'] === undefined) return false;
    if (!('budgeted' in value) || value['budgeted'] === undefined) return false;
    if (!('activity' in value) || value['activity'] === undefined) return false;
    if (!('to_be_budgeted' in value) || value['to_be_budgeted'] === undefined) return false;
    if (!('deleted' in value) || value['deleted'] === undefined) return false;
    return true;
}

export function MonthSummaryFromJSON(json: any): MonthSummary {
    return MonthSummaryFromJSONTyped(json, false);
}

export function MonthSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'month': json['month'],
        'note': json['note'] == null ? undefined : json['note'],
        'income': json['income'],
        'budgeted': json['budgeted'],
        'activity': json['activity'],
        'to_be_budgeted': json['to_be_budgeted'],
        'age_of_money': json['age_of_money'] == null ? undefined : json['age_of_money'],
        'deleted': json['deleted'],
    };
}

export function MonthSummaryToJSON(value?: MonthSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'month': value['month'],
        'note': value['note'],
        'income': value['income'],
        'budgeted': value['budgeted'],
        'activity': value['activity'],
        'to_be_budgeted': value['to_be_budgeted'],
        'age_of_money': value['age_of_money'],
        'deleted': value['deleted'],
    };
}

