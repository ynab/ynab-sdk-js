/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { BudgetSummaryResponseData } from './BudgetSummaryResponseData';
import {
    BudgetSummaryResponseDataFromJSON,
    BudgetSummaryResponseDataFromJSONTyped,
    BudgetSummaryResponseDataToJSON,
    BudgetSummaryResponseDataToJSONTyped,
} from './BudgetSummaryResponseData';

/**
 * 
 * @export
 * @interface BudgetSummaryResponse
 */
export interface BudgetSummaryResponse {
    /**
     * 
     * @type {BudgetSummaryResponseData}
     * @memberof BudgetSummaryResponse
     */
    data: BudgetSummaryResponseData;
}

/**
 * Check if a given object implements the BudgetSummaryResponse interface.
 */
export function instanceOfBudgetSummaryResponse(value: object): value is BudgetSummaryResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BudgetSummaryResponseFromJSON(json: any): BudgetSummaryResponse {
    return BudgetSummaryResponseFromJSONTyped(json, false);
}

export function BudgetSummaryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetSummaryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BudgetSummaryResponseDataFromJSON(json['data']),
    };
}

export function BudgetSummaryResponseToJSON(json: any): BudgetSummaryResponse {
    return BudgetSummaryResponseToJSONTyped(json, false);
}

export function BudgetSummaryResponseToJSONTyped(value?: BudgetSummaryResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BudgetSummaryResponseDataToJSON(value['data']),
    };
}

