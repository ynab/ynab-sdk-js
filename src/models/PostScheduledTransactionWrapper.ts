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
} from './SaveScheduledTransaction';

/**
 * 
 * @export
 * @interface PostScheduledTransactionWrapper
 */
export interface PostScheduledTransactionWrapper {
    /**
     * 
     * @type {SaveScheduledTransaction}
     * @memberof PostScheduledTransactionWrapper
     */
    scheduled_transaction: SaveScheduledTransaction;
}

/**
 * Check if a given object implements the PostScheduledTransactionWrapper interface.
 */
export function instanceOfPostScheduledTransactionWrapper(value: object): value is PostScheduledTransactionWrapper {
    if (!('scheduled_transaction' in value) || value['scheduled_transaction'] === undefined) return false;
    return true;
}

export function PostScheduledTransactionWrapperFromJSON(json: any): PostScheduledTransactionWrapper {
    return PostScheduledTransactionWrapperFromJSONTyped(json, false);
}

export function PostScheduledTransactionWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostScheduledTransactionWrapper {
    if (json == null) {
        return json;
    }
    return {
        
        'scheduled_transaction': SaveScheduledTransactionFromJSON(json['scheduled_transaction']),
    };
}

export function PostScheduledTransactionWrapperToJSON(value?: PostScheduledTransactionWrapper | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'scheduled_transaction': SaveScheduledTransactionToJSON(value['scheduled_transaction']),
    };
}
