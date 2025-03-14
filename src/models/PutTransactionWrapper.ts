/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { ExistingTransaction } from './ExistingTransaction';
import {
    ExistingTransactionFromJSON,
    ExistingTransactionFromJSONTyped,
    ExistingTransactionToJSON,
    ExistingTransactionToJSONTyped,
} from './ExistingTransaction';

/**
 * 
 * @export
 * @interface PutTransactionWrapper
 */
export interface PutTransactionWrapper {
    /**
     * 
     * @type {ExistingTransaction}
     * @memberof PutTransactionWrapper
     */
    transaction: ExistingTransaction;
}

/**
 * Check if a given object implements the PutTransactionWrapper interface.
 */
export function instanceOfPutTransactionWrapper(value: object): value is PutTransactionWrapper {
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function PutTransactionWrapperFromJSON(json: any): PutTransactionWrapper {
    return PutTransactionWrapperFromJSONTyped(json, false);
}

export function PutTransactionWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutTransactionWrapper {
    if (json == null) {
        return json;
    }
    return {
        
        'transaction': ExistingTransactionFromJSON(json['transaction']),
    };
}

export function PutTransactionWrapperToJSON(json: any): PutTransactionWrapper {
    return PutTransactionWrapperToJSONTyped(json, false);
}

export function PutTransactionWrapperToJSONTyped(value?: PutTransactionWrapper | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transaction': ExistingTransactionToJSON(value['transaction']),
    };
}

