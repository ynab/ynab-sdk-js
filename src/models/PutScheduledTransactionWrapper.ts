/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { SaveScheduledTransaction } from './SaveScheduledTransaction';
import {
    SaveScheduledTransactionFromJSON,
    SaveScheduledTransactionFromJSONTyped,
    SaveScheduledTransactionToJSON,
    SaveScheduledTransactionToJSONTyped,
} from './SaveScheduledTransaction';

/**
 * 
 * @export
 * @interface PutScheduledTransactionWrapper
 */
export interface PutScheduledTransactionWrapper {
    /**
     * 
     * @type {SaveScheduledTransaction}
     * @memberof PutScheduledTransactionWrapper
     */
    scheduled_transaction: SaveScheduledTransaction;
}

/**
 * Check if a given object implements the PutScheduledTransactionWrapper interface.
 */
export function instanceOfPutScheduledTransactionWrapper(value: object): value is PutScheduledTransactionWrapper {
    if (!('scheduled_transaction' in value) || value['scheduled_transaction'] === undefined) return false;
    return true;
}

export function PutScheduledTransactionWrapperFromJSON(json: any): PutScheduledTransactionWrapper {
    return PutScheduledTransactionWrapperFromJSONTyped(json, false);
}

export function PutScheduledTransactionWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutScheduledTransactionWrapper {
    if (json == null) {
        return json;
    }
    return {
        
        'scheduled_transaction': SaveScheduledTransactionFromJSON(json['scheduled_transaction']),
    };
}

export function PutScheduledTransactionWrapperToJSON(json: any): PutScheduledTransactionWrapper {
    return PutScheduledTransactionWrapperToJSONTyped(json, false);
}

export function PutScheduledTransactionWrapperToJSONTyped(value?: PutScheduledTransactionWrapper | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'scheduled_transaction': SaveScheduledTransactionToJSON(value['scheduled_transaction']),
    };
}

