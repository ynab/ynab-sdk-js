/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { ScheduledTransactionResponseData } from './ScheduledTransactionResponseData';
import {
    ScheduledTransactionResponseDataFromJSON,
    ScheduledTransactionResponseDataFromJSONTyped,
    ScheduledTransactionResponseDataToJSON,
    ScheduledTransactionResponseDataToJSONTyped,
} from './ScheduledTransactionResponseData';

/**
 * 
 * @export
 * @interface ScheduledTransactionResponse
 */
export interface ScheduledTransactionResponse {
    /**
     * 
     * @type {ScheduledTransactionResponseData}
     * @memberof ScheduledTransactionResponse
     */
    data: ScheduledTransactionResponseData;
}

/**
 * Check if a given object implements the ScheduledTransactionResponse interface.
 */
export function instanceOfScheduledTransactionResponse(value: object): value is ScheduledTransactionResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ScheduledTransactionResponseFromJSON(json: any): ScheduledTransactionResponse {
    return ScheduledTransactionResponseFromJSONTyped(json, false);
}

export function ScheduledTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransactionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ScheduledTransactionResponseDataFromJSON(json['data']),
    };
}

export function ScheduledTransactionResponseToJSON(json: any): ScheduledTransactionResponse {
    return ScheduledTransactionResponseToJSONTyped(json, false);
}

export function ScheduledTransactionResponseToJSONTyped(value?: ScheduledTransactionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ScheduledTransactionResponseDataToJSON(value['data']),
    };
}

