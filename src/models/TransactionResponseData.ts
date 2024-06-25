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
import type { TransactionDetail } from './TransactionDetail';
import {
    TransactionDetailFromJSON,
    TransactionDetailFromJSONTyped,
    TransactionDetailToJSON,
} from './TransactionDetail';

/**
 * 
 * @export
 * @interface TransactionResponseData
 */
export interface TransactionResponseData {
    /**
     * 
     * @type {TransactionDetail}
     * @memberof TransactionResponseData
     */
    transaction: TransactionDetail;
}

/**
 * Check if a given object implements the TransactionResponseData interface.
 */
export function instanceOfTransactionResponseData(value: object): value is TransactionResponseData {
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function TransactionResponseDataFromJSON(json: any): TransactionResponseData {
    return TransactionResponseDataFromJSONTyped(json, false);
}

export function TransactionResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'transaction': TransactionDetailFromJSON(json['transaction']),
    };
}

export function TransactionResponseDataToJSON(value?: TransactionResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'transaction': TransactionDetailToJSON(value['transaction']),
    };
}

