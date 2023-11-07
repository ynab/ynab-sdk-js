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
 * @interface Payee
 */
export interface Payee {
    /**
     * 
     * @type {string}
     * @memberof Payee
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Payee
     */
    name: string;
    /**
     * If a transfer payee, the `account_id` to which this payee transfers to
     * @type {string}
     * @memberof Payee
     */
    transfer_account_id?: string | null;
    /**
     * Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.
     * @type {boolean}
     * @memberof Payee
     */
    deleted: boolean;
}

/**
 * Check if a given object implements the Payee interface.
 */
export function instanceOfPayee(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "deleted" in value;

    return isInstance;
}

export function PayeeFromJSON(json: any): Payee {
    return PayeeFromJSONTyped(json, false);
}

export function PayeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payee {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'transfer_account_id': !exists(json, 'transfer_account_id') ? undefined : json['transfer_account_id'],
        'deleted': json['deleted'],
    };
}

export function PayeeToJSON(value?: Payee | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'transfer_account_id': value.transfer_account_id,
        'deleted': value.deleted,
    };
}
