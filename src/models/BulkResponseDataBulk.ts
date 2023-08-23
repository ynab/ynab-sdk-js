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
/**
 * 
 * @export
 * @interface BulkResponseDataBulk
 */
export interface BulkResponseDataBulk {
    /**
     * The list of Transaction ids that were created.
     * @type {Array<string>}
     * @memberof BulkResponseDataBulk
     */
    transaction_ids: Array<string>;
    /**
     * If any Transactions were not created because they had an `import_id` matching a transaction already on the same account, the specified import_id(s) will be included in this list.
     * @type {Array<string>}
     * @memberof BulkResponseDataBulk
     */
    duplicate_import_ids: Array<string>;
}

/**
 * Check if a given object implements the BulkResponseDataBulk interface.
 */
export function instanceOfBulkResponseDataBulk(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transaction_ids" in value;
    isInstance = isInstance && "duplicate_import_ids" in value;

    return isInstance;
}

export function BulkResponseDataBulkFromJSON(json: any): BulkResponseDataBulk {
    return BulkResponseDataBulkFromJSONTyped(json, false);
}

export function BulkResponseDataBulkFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkResponseDataBulk {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transaction_ids': json['transaction_ids'],
        'duplicate_import_ids': json['duplicate_import_ids'],
    };
}

export function BulkResponseDataBulkToJSON(value?: BulkResponseDataBulk | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction_ids': value.transaction_ids,
        'duplicate_import_ids': value.duplicate_import_ids,
    };
}

