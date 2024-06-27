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
import type { TransactionsResponseData } from './TransactionsResponseData';
import {
    TransactionsResponseDataFromJSON,
    TransactionsResponseDataFromJSONTyped,
    TransactionsResponseDataToJSON,
} from './TransactionsResponseData';

/**
 * 
 * @export
 * @interface TransactionsResponse
 */
export interface TransactionsResponse {
    /**
     * 
     * @type {TransactionsResponseData}
     * @memberof TransactionsResponse
     */
    data: TransactionsResponseData;
}

/**
 * Check if a given object implements the TransactionsResponse interface.
 */
export function instanceOfTransactionsResponse(value: object): value is TransactionsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TransactionsResponseFromJSON(json: any): TransactionsResponse {
    return TransactionsResponseFromJSONTyped(json, false);
}

export function TransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': TransactionsResponseDataFromJSON(json['data']),
    };
}

export function TransactionsResponseToJSON(value?: TransactionsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': TransactionsResponseDataToJSON(value['data']),
    };
}

