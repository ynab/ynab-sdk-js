/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { BudgetSummary } from './BudgetSummary';
import {
    BudgetSummaryFromJSON,
    BudgetSummaryFromJSONTyped,
    BudgetSummaryToJSON,
    BudgetSummaryToJSONTyped,
} from './BudgetSummary';

/**
 * 
 * @export
 * @interface BudgetSummaryResponseData
 */
export interface BudgetSummaryResponseData {
    /**
     * 
     * @type {Array<BudgetSummary>}
     * @memberof BudgetSummaryResponseData
     */
    budgets: Array<BudgetSummary>;
    /**
     * 
     * @type {BudgetSummary}
     * @memberof BudgetSummaryResponseData
     */
    default_budget?: BudgetSummary;
}

/**
 * Check if a given object implements the BudgetSummaryResponseData interface.
 */
export function instanceOfBudgetSummaryResponseData(value: object): value is BudgetSummaryResponseData {
    if (!('budgets' in value) || value['budgets'] === undefined) return false;
    return true;
}

export function BudgetSummaryResponseDataFromJSON(json: any): BudgetSummaryResponseData {
    return BudgetSummaryResponseDataFromJSONTyped(json, false);
}

export function BudgetSummaryResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetSummaryResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'budgets': ((json['budgets'] as Array<any>).map(BudgetSummaryFromJSON)),
        'default_budget': json['default_budget'] == null ? undefined : BudgetSummaryFromJSON(json['default_budget']),
    };
}

export function BudgetSummaryResponseDataToJSON(json: any): BudgetSummaryResponseData {
    return BudgetSummaryResponseDataToJSONTyped(json, false);
}

export function BudgetSummaryResponseDataToJSONTyped(value?: BudgetSummaryResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'budgets': ((value['budgets'] as Array<any>).map(BudgetSummaryToJSON)),
        'default_budget': BudgetSummaryToJSON(value['default_budget']),
    };
}

