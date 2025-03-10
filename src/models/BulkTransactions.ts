/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { SaveTransactionWithOptionalFields } from './SaveTransactionWithOptionalFields';
import {
    SaveTransactionWithOptionalFieldsFromJSON,
    SaveTransactionWithOptionalFieldsFromJSONTyped,
    SaveTransactionWithOptionalFieldsToJSON,
    SaveTransactionWithOptionalFieldsToJSONTyped,
} from './SaveTransactionWithOptionalFields';

/**
 * 
 * @export
 * @interface BulkTransactions
 */
export interface BulkTransactions {
    /**
     * 
     * @type {Array<SaveTransactionWithOptionalFields>}
     * @memberof BulkTransactions
     */
    transactions: Array<SaveTransactionWithOptionalFields>;
}

/**
 * Check if a given object implements the BulkTransactions interface.
 */
export function instanceOfBulkTransactions(value: object): value is BulkTransactions {
    if (!('transactions' in value) || value['transactions'] === undefined) return false;
    return true;
}

export function BulkTransactionsFromJSON(json: any): BulkTransactions {
    return BulkTransactionsFromJSONTyped(json, false);
}

export function BulkTransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkTransactions {
    if (json == null) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(SaveTransactionWithOptionalFieldsFromJSON)),
    };
}

export function BulkTransactionsToJSON(json: any): BulkTransactions {
    return BulkTransactionsToJSONTyped(json, false);
}

export function BulkTransactionsToJSONTyped(value?: BulkTransactions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transactions': ((value['transactions'] as Array<any>).map(SaveTransactionWithOptionalFieldsToJSON)),
    };
}

