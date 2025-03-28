/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { HybridTransaction } from './HybridTransaction';
import {
    HybridTransactionFromJSON,
    HybridTransactionFromJSONTyped,
    HybridTransactionToJSON,
    HybridTransactionToJSONTyped,
} from './HybridTransaction';

/**
 * 
 * @export
 * @interface HybridTransactionsResponseData
 */
export interface HybridTransactionsResponseData {
    /**
     * 
     * @type {Array<HybridTransaction>}
     * @memberof HybridTransactionsResponseData
     */
    transactions: Array<HybridTransaction>;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof HybridTransactionsResponseData
     */
    server_knowledge?: number;
}

/**
 * Check if a given object implements the HybridTransactionsResponseData interface.
 */
export function instanceOfHybridTransactionsResponseData(value: object): value is HybridTransactionsResponseData {
    if (!('transactions' in value) || value['transactions'] === undefined) return false;
    return true;
}

export function HybridTransactionsResponseDataFromJSON(json: any): HybridTransactionsResponseData {
    return HybridTransactionsResponseDataFromJSONTyped(json, false);
}

export function HybridTransactionsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HybridTransactionsResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(HybridTransactionFromJSON)),
        'server_knowledge': json['server_knowledge'] == null ? undefined : json['server_knowledge'],
    };
}

export function HybridTransactionsResponseDataToJSON(json: any): HybridTransactionsResponseData {
    return HybridTransactionsResponseDataToJSONTyped(json, false);
}

export function HybridTransactionsResponseDataToJSONTyped(value?: HybridTransactionsResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transactions': ((value['transactions'] as Array<any>).map(HybridTransactionToJSON)),
        'server_knowledge': value['server_knowledge'],
    };
}

