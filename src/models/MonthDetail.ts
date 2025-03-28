/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
    CategoryToJSONTyped,
} from './Category';

/**
 * 
 * @export
 * @interface MonthDetail
 */
export interface MonthDetail {
    /**
     * 
     * @type {string}
     * @memberof MonthDetail
     */
    month: string;
    /**
     * 
     * @type {string}
     * @memberof MonthDetail
     */
    note?: string | null;
    /**
     * The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month
     * @type {number}
     * @memberof MonthDetail
     */
    income: number;
    /**
     * The total amount budgeted in the month
     * @type {number}
     * @memberof MonthDetail
     */
    budgeted: number;
    /**
     * The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'
     * @type {number}
     * @memberof MonthDetail
     */
    activity: number;
    /**
     * The available amount for 'Ready to Assign'
     * @type {number}
     * @memberof MonthDetail
     */
    to_be_budgeted: number;
    /**
     * The Age of Money as of the month
     * @type {number}
     * @memberof MonthDetail
     */
    age_of_money?: number | null;
    /**
     * Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
     * @type {boolean}
     * @memberof MonthDetail
     */
    deleted: boolean;
    /**
     * The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.
     * @type {Array<Category>}
     * @memberof MonthDetail
     */
    categories: Array<Category>;
}

/**
 * Check if a given object implements the MonthDetail interface.
 */
export function instanceOfMonthDetail(value: object): value is MonthDetail {
    if (!('month' in value) || value['month'] === undefined) return false;
    if (!('income' in value) || value['income'] === undefined) return false;
    if (!('budgeted' in value) || value['budgeted'] === undefined) return false;
    if (!('activity' in value) || value['activity'] === undefined) return false;
    if (!('to_be_budgeted' in value) || value['to_be_budgeted'] === undefined) return false;
    if (!('deleted' in value) || value['deleted'] === undefined) return false;
    if (!('categories' in value) || value['categories'] === undefined) return false;
    return true;
}

export function MonthDetailFromJSON(json: any): MonthDetail {
    return MonthDetailFromJSONTyped(json, false);
}

export function MonthDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthDetail {
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
        'categories': ((json['categories'] as Array<any>).map(CategoryFromJSON)),
    };
}

export function MonthDetailToJSON(json: any): MonthDetail {
    return MonthDetailToJSONTyped(json, false);
}

export function MonthDetailToJSONTyped(value?: MonthDetail | null, ignoreDiscriminator: boolean = false): any {
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
        'categories': ((value['categories'] as Array<any>).map(CategoryToJSON)),
    };
}

