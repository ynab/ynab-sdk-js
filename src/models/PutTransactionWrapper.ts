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
 * @interface PutTransactionWrapper
 */
export interface PutTransactionWrapper {
    /**
     * 
     * @type {SaveTransaction}
     * @memberof PutTransactionWrapper
     */
    transaction: SaveTransaction;
}

/**
 * Check if a given object implements the PutTransactionWrapper interface.
 */
export function instanceOfPutTransactionWrapper(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transaction" in value;

    return isInstance;
}

export function PutTransactionWrapperFromJSON(json: any): PutTransactionWrapper {
    return PutTransactionWrapperFromJSONTyped(json, false);
}

export function PutTransactionWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutTransactionWrapper {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transaction': SaveTransactionFromJSON(json['transaction']),
    };
}

export function PutTransactionWrapperToJSON(value?: PutTransactionWrapper | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction': SaveTransactionToJSON(value.transaction),
    };
}
