/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { TransactionFlagColor } from './TransactionFlagColor';
import {
    TransactionFlagColorFromJSON,
    TransactionFlagColorFromJSONTyped,
    TransactionFlagColorToJSON,
    TransactionFlagColorToJSONTyped,
} from './TransactionFlagColor';
import type { TransactionClearedStatus } from './TransactionClearedStatus';
import {
    TransactionClearedStatusFromJSON,
    TransactionClearedStatusFromJSONTyped,
    TransactionClearedStatusToJSON,
    TransactionClearedStatusToJSONTyped,
} from './TransactionClearedStatus';
import type { SaveSubTransaction } from './SaveSubTransaction';
import {
    SaveSubTransactionFromJSON,
    SaveSubTransactionFromJSONTyped,
    SaveSubTransactionToJSON,
    SaveSubTransactionToJSONTyped,
} from './SaveSubTransaction';

/**
 * 
 * @export
 * @interface SaveTransactionWithIdOrImportId
 */
export interface SaveTransactionWithIdOrImportId {
    /**
     * 
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    account_id?: string;
    /**
     * The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    date?: string;
    /**
     * The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.
     * @type {number}
     * @memberof SaveTransactionWithIdOrImportId
     */
    amount?: number;
    /**
     * The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `transfer_payee_id` on the account resource.
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    payee_id?: string | null;
    /**
     * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    payee_name?: string | null;
    /**
     * The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    category_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    memo?: string | null;
    /**
     * 
     * @type {TransactionClearedStatus}
     * @memberof SaveTransactionWithIdOrImportId
     */
    cleared?: TransactionClearedStatus;
    /**
     * Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.
     * @type {boolean}
     * @memberof SaveTransactionWithIdOrImportId
     */
    approved?: boolean;
    /**
     * 
     * @type {TransactionFlagColor}
     * @memberof SaveTransactionWithIdOrImportId
     */
    flag_color?: TransactionFlagColor | null;
    /**
     * An array of subtransactions to configure a transaction as a split. Updating `subtransactions` on an existing split transaction is not supported.
     * @type {Array<SaveSubTransaction>}
     * @memberof SaveTransactionWithIdOrImportId
     */
    subtransactions?: Array<SaveSubTransaction>;
    /**
     * If specified, this id will be used to lookup a transaction by its `id` for the purpose of updating the transaction itself. If not specified, an `import_id` should be supplied.
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    id?: string | null;
    /**
     * If specified, this id will be used to lookup a transaction by its `import_id` for the purpose of updating the transaction itself. If not specified, an `id` should be supplied.  You may not provide both an `id` and an `import_id` and updating an `import_id` on an existing transaction is not allowed.
     * @type {string}
     * @memberof SaveTransactionWithIdOrImportId
     */
    import_id?: string | null;
}



/**
 * Check if a given object implements the SaveTransactionWithIdOrImportId interface.
 */
export function instanceOfSaveTransactionWithIdOrImportId(value: object): value is SaveTransactionWithIdOrImportId {
    return true;
}

export function SaveTransactionWithIdOrImportIdFromJSON(json: any): SaveTransactionWithIdOrImportId {
    return SaveTransactionWithIdOrImportIdFromJSONTyped(json, false);
}

export function SaveTransactionWithIdOrImportIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveTransactionWithIdOrImportId {
    if (json == null) {
        return json;
    }
    return {
        
        'account_id': json['account_id'] == null ? undefined : json['account_id'],
        'date': json['date'] == null ? undefined : json['date'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'payee_id': json['payee_id'] == null ? undefined : json['payee_id'],
        'payee_name': json['payee_name'] == null ? undefined : json['payee_name'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'cleared': json['cleared'] == null ? undefined : TransactionClearedStatusFromJSON(json['cleared']),
        'approved': json['approved'] == null ? undefined : json['approved'],
        'flag_color': json['flag_color'] == null ? undefined : TransactionFlagColorFromJSON(json['flag_color']),
        'subtransactions': json['subtransactions'] == null ? undefined : ((json['subtransactions'] as Array<any>).map(SaveSubTransactionFromJSON)),
        'id': json['id'] == null ? undefined : json['id'],
        'import_id': json['import_id'] == null ? undefined : json['import_id'],
    };
}

export function SaveTransactionWithIdOrImportIdToJSON(json: any): SaveTransactionWithIdOrImportId {
    return SaveTransactionWithIdOrImportIdToJSONTyped(json, false);
}

export function SaveTransactionWithIdOrImportIdToJSONTyped(value?: SaveTransactionWithIdOrImportId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'account_id': value['account_id'],
        'date': value['date'],
        'amount': value['amount'],
        'payee_id': value['payee_id'],
        'payee_name': value['payee_name'],
        'category_id': value['category_id'],
        'memo': value['memo'],
        'cleared': TransactionClearedStatusToJSON(value['cleared']),
        'approved': value['approved'],
        'flag_color': TransactionFlagColorToJSON(value['flag_color']),
        'subtransactions': value['subtransactions'] == null ? undefined : ((value['subtransactions'] as Array<any>).map(SaveSubTransactionToJSON)),
        'id': value['id'],
        'import_id': value['import_id'],
    };
}

