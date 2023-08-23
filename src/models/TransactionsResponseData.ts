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
import type { TransactionDetail } from './TransactionDetail';
import {
    TransactionDetailFromJSON,
    TransactionDetailFromJSONTyped,
    TransactionDetailToJSON,
} from './TransactionDetail';

/**
 * 
 * @export
 * @interface TransactionsResponseData
 */
export interface TransactionsResponseData {
    /**
     * 
     * @type {Array<TransactionDetail>}
     * @memberof TransactionsResponseData
     */
    transactions: Array<TransactionDetail>;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof TransactionsResponseData
     */
    server_knowledge: number;
}

/**
 * Check if a given object implements the TransactionsResponseData interface.
 */
export function instanceOfTransactionsResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactions" in value;
    isInstance = isInstance && "server_knowledge" in value;

    return isInstance;
}

export function TransactionsResponseDataFromJSON(json: any): TransactionsResponseData {
    return TransactionsResponseDataFromJSONTyped(json, false);
}

export function TransactionsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(TransactionDetailFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}

export function TransactionsResponseDataToJSON(value?: TransactionsResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactions': ((value.transactions as Array<any>).map(TransactionDetailToJSON)),
        'server_knowledge': value.server_knowledge,
    };
}

