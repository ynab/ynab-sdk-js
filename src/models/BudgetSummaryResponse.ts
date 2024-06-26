/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BudgetSummaryResponseData } from './BudgetSummaryResponseData';
import {
    BudgetSummaryResponseDataFromJSON,
    BudgetSummaryResponseDataFromJSONTyped,
    BudgetSummaryResponseDataToJSON,
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

export function BudgetSummaryResponseToJSON(value?: BudgetSummaryResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': BudgetSummaryResponseDataToJSON(value['data']),
    };
}

