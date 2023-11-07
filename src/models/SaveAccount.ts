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
import type { AccountType } from './AccountType';
import {
    AccountTypeFromJSON,
    AccountTypeFromJSONTyped,
    AccountTypeToJSON,
} from './AccountType';

/**
 * 
 * @export
 * @interface SaveAccount
 */
export interface SaveAccount {
    /**
     * The name of the account
     * @type {string}
     * @memberof SaveAccount
     */
    name: string;
    /**
     * 
     * @type {AccountType}
     * @memberof SaveAccount
     */
    type: AccountType;
    /**
     * The current balance of the account in milliunits format
     * @type {number}
     * @memberof SaveAccount
     */
    balance: number;
}

/**
 * Check if a given object implements the SaveAccount interface.
 */
export function instanceOfSaveAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "balance" in value;

    return isInstance;
}

export function SaveAccountFromJSON(json: any): SaveAccount {
    return SaveAccountFromJSONTyped(json, false);
}

export function SaveAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': AccountTypeFromJSON(json['type']),
        'balance': json['balance'],
    };
}

export function SaveAccountToJSON(value?: SaveAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': AccountTypeToJSON(value.type),
        'balance': value.balance,
    };
}
