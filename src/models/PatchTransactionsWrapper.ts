/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { SaveTransactionWithIdOrImportId } from './SaveTransactionWithIdOrImportId';
import {
    SaveTransactionWithIdOrImportIdFromJSON,
    SaveTransactionWithIdOrImportIdFromJSONTyped,
    SaveTransactionWithIdOrImportIdToJSON,
    SaveTransactionWithIdOrImportIdToJSONTyped,
} from './SaveTransactionWithIdOrImportId';

/**
 * 
 * @export
 * @interface PatchTransactionsWrapper
 */
export interface PatchTransactionsWrapper {
    /**
     * 
     * @type {Array<SaveTransactionWithIdOrImportId>}
     * @memberof PatchTransactionsWrapper
     */
    transactions: Array<SaveTransactionWithIdOrImportId>;
}

/**
 * Check if a given object implements the PatchTransactionsWrapper interface.
 */
export function instanceOfPatchTransactionsWrapper(value: object): value is PatchTransactionsWrapper {
    if (!('transactions' in value) || value['transactions'] === undefined) return false;
    return true;
}

export function PatchTransactionsWrapperFromJSON(json: any): PatchTransactionsWrapper {
    return PatchTransactionsWrapperFromJSONTyped(json, false);
}

export function PatchTransactionsWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchTransactionsWrapper {
    if (json == null) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(SaveTransactionWithIdOrImportIdFromJSON)),
    };
}

export function PatchTransactionsWrapperToJSON(json: any): PatchTransactionsWrapper {
    return PatchTransactionsWrapperToJSONTyped(json, false);
}

export function PatchTransactionsWrapperToJSONTyped(value?: PatchTransactionsWrapper | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transactions': ((value['transactions'] as Array<any>).map(SaveTransactionWithIdOrImportIdToJSON)),
    };
}

