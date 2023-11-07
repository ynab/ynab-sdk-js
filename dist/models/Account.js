"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountToJSON = exports.AccountFromJSONTyped = exports.AccountFromJSON = exports.instanceOfAccount = void 0;
const runtime_1 = require("../runtime");
const AccountType_1 = require("./AccountType");
/**
 * Check if a given object implements the Account interface.
 */
function instanceOfAccount(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "on_budget" in value;
    isInstance = isInstance && "closed" in value;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "cleared_balance" in value;
    isInstance = isInstance && "uncleared_balance" in value;
    isInstance = isInstance && "transfer_payee_id" in value;
    isInstance = isInstance && "deleted" in value;
    return isInstance;
}
exports.instanceOfAccount = instanceOfAccount;
function AccountFromJSON(json) {
    return AccountFromJSONTyped(json, false);
}
exports.AccountFromJSON = AccountFromJSON;
function AccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'type': (0, AccountType_1.AccountTypeFromJSON)(json['type']),
        'on_budget': json['on_budget'],
        'closed': json['closed'],
        'note': !(0, runtime_1.exists)(json, 'note') ? undefined : json['note'],
        'balance': json['balance'],
        'cleared_balance': json['cleared_balance'],
        'uncleared_balance': json['uncleared_balance'],
        'transfer_payee_id': json['transfer_payee_id'],
        'direct_import_linked': !(0, runtime_1.exists)(json, 'direct_import_linked') ? undefined : json['direct_import_linked'],
        'direct_import_in_error': !(0, runtime_1.exists)(json, 'direct_import_in_error') ? undefined : json['direct_import_in_error'],
        'last_reconciled_at': !(0, runtime_1.exists)(json, 'last_reconciled_at') ? undefined : json['last_reconciled_at'],
        'debt_original_balance': !(0, runtime_1.exists)(json, 'debt_original_balance') ? undefined : json['debt_original_balance'],
        'debt_interest_rates': !(0, runtime_1.exists)(json, 'debt_interest_rates') ? undefined : json['debt_interest_rates'],
        'debt_minimum_payments': !(0, runtime_1.exists)(json, 'debt_minimum_payments') ? undefined : json['debt_minimum_payments'],
        'debt_escrow_amounts': !(0, runtime_1.exists)(json, 'debt_escrow_amounts') ? undefined : json['debt_escrow_amounts'],
        'deleted': json['deleted'],
    };
}
exports.AccountFromJSONTyped = AccountFromJSONTyped;
function AccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'type': (0, AccountType_1.AccountTypeToJSON)(value.type),
        'on_budget': value.on_budget,
        'closed': value.closed,
        'note': value.note,
        'balance': value.balance,
        'cleared_balance': value.cleared_balance,
        'uncleared_balance': value.uncleared_balance,
        'transfer_payee_id': value.transfer_payee_id,
        'direct_import_linked': value.direct_import_linked,
        'direct_import_in_error': value.direct_import_in_error,
        'last_reconciled_at': value.last_reconciled_at,
        'debt_original_balance': value.debt_original_balance,
        'debt_interest_rates': value.debt_interest_rates,
        'debt_minimum_payments': value.debt_minimum_payments,
        'debt_escrow_amounts': value.debt_escrow_amounts,
        'deleted': value.deleted,
    };
}
exports.AccountToJSON = AccountToJSON;