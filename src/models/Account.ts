/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AccountType } from './AccountType';
import {
    AccountTypeFromJSON,
    AccountTypeFromJSONTyped,
    AccountTypeToJSON,
} from './AccountType';

/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    name: string;
    /**
     * 
     * @type {AccountType}
     * @memberof Account
     */
    type: AccountType;
    /**
     * Whether this account is on budget or not
     * @type {boolean}
     * @memberof Account
     */
    on_budget: boolean;
    /**
     * Whether this account is closed or not
     * @type {boolean}
     * @memberof Account
     */
    closed: boolean;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    note?: string;
    /**
     * The current balance of the account in milliunits format
     * @type {number}
     * @memberof Account
     */
    balance: number;
    /**
     * The current cleared balance of the account in milliunits format
     * @type {number}
     * @memberof Account
     */
    cleared_balance: number;
    /**
     * The current uncleared balance of the account in milliunits format
     * @type {number}
     * @memberof Account
     */
    uncleared_balance: number;
    /**
     * The payee id which should be used when transferring to this account
     * @type {string}
     * @memberof Account
     */
    transfer_payee_id: string | null;
    /**
     * Whether or not the account is linked to a financial institution for automatic transaction import.
     * @type {boolean}
     * @memberof Account
     */
    direct_import_linked?: boolean;
    /**
     * If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true.
     * @type {boolean}
     * @memberof Account
     */
    direct_import_in_error?: boolean;
    /**
     * A date/time specifying when the account was last reconciled.
     * @type {string}
     * @memberof Account
     */
    last_reconciled_at?: string;
    /**
     * The original debt/loan account balance, specified in milliunits format.
     * @type {number}
     * @memberof Account
     */
    debt_original_balance?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof Account
     */
    debt_interest_rates?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof Account
     */
    debt_minimum_payments?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof Account
     */
    debt_escrow_amounts?: { [key: string]: number; };
    /**
     * Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests.
     * @type {boolean}
     * @memberof Account
     */
    deleted: boolean;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): value is Account {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('on_budget' in value) || value['on_budget'] === undefined) return false;
    if (!('closed' in value) || value['closed'] === undefined) return false;
    if (!('balance' in value) || value['balance'] === undefined) return false;
    if (!('cleared_balance' in value) || value['cleared_balance'] === undefined) return false;
    if (!('uncleared_balance' in value) || value['uncleared_balance'] === undefined) return false;
    if (!('transfer_payee_id' in value) || value['transfer_payee_id'] === undefined) return false;
    if (!('deleted' in value) || value['deleted'] === undefined) return false;
    return true;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': AccountTypeFromJSON(json['type']),
        'on_budget': json['on_budget'],
        'closed': json['closed'],
        'note': json['note'] == null ? undefined : json['note'],
        'balance': json['balance'],
        'cleared_balance': json['cleared_balance'],
        'uncleared_balance': json['uncleared_balance'],
        'transfer_payee_id': json['transfer_payee_id'],
        'direct_import_linked': json['direct_import_linked'] == null ? undefined : json['direct_import_linked'],
        'direct_import_in_error': json['direct_import_in_error'] == null ? undefined : json['direct_import_in_error'],
        'last_reconciled_at': json['last_reconciled_at'] == null ? undefined : json['last_reconciled_at'],
        'debt_original_balance': json['debt_original_balance'] == null ? undefined : json['debt_original_balance'],
        'debt_interest_rates': json['debt_interest_rates'] == null ? undefined : json['debt_interest_rates'],
        'debt_minimum_payments': json['debt_minimum_payments'] == null ? undefined : json['debt_minimum_payments'],
        'debt_escrow_amounts': json['debt_escrow_amounts'] == null ? undefined : json['debt_escrow_amounts'],
        'deleted': json['deleted'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'type': AccountTypeToJSON(value['type']),
        'on_budget': value['on_budget'],
        'closed': value['closed'],
        'note': value['note'],
        'balance': value['balance'],
        'cleared_balance': value['cleared_balance'],
        'uncleared_balance': value['uncleared_balance'],
        'transfer_payee_id': value['transfer_payee_id'],
        'direct_import_linked': value['direct_import_linked'],
        'direct_import_in_error': value['direct_import_in_error'],
        'last_reconciled_at': value['last_reconciled_at'],
        'debt_original_balance': value['debt_original_balance'],
        'debt_interest_rates': value['debt_interest_rates'],
        'debt_minimum_payments': value['debt_minimum_payments'],
        'debt_escrow_amounts': value['debt_escrow_amounts'],
        'deleted': value['deleted'],
    };
}

