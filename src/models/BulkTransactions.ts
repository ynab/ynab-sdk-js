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
import type { SaveTransaction } from './SaveTransaction';
import {
    SaveTransactionFromJSON,
    SaveTransactionFromJSONTyped,
    SaveTransactionToJSON,
} from './SaveTransaction';

/**
 * 
 * @export
 * @interface BulkTransactions
 */
export interface BulkTransactions {
    /**
     * 
     * @type {Array<SaveTransaction>}
     * @memberof BulkTransactions
     */
    transactions: Array<SaveTransaction>;
}

/**
 * Check if a given object implements the BulkTransactions interface.
 */
export function instanceOfBulkTransactions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactions" in value;

    return isInstance;
}

export function BulkTransactionsFromJSON(json: any): BulkTransactions {
    return BulkTransactionsFromJSONTyped(json, false);
}

export function BulkTransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkTransactions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(SaveTransactionFromJSON)),
    };
}

export function BulkTransactionsToJSON(value?: BulkTransactions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactions': ((value.transactions as Array<any>).map(SaveTransactionToJSON)),
    };
}
