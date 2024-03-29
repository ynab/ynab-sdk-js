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
exports.SaveTransactionWithOptionalFieldsToJSON = exports.SaveTransactionWithOptionalFieldsFromJSONTyped = exports.SaveTransactionWithOptionalFieldsFromJSON = exports.instanceOfSaveTransactionWithOptionalFields = void 0;
const runtime_1 = require("../runtime");
const SaveSubTransaction_1 = require("./SaveSubTransaction");
const TransactionClearedStatus_1 = require("./TransactionClearedStatus");
const TransactionFlagColor_1 = require("./TransactionFlagColor");
/**
 * Check if a given object implements the SaveTransactionWithOptionalFields interface.
 */
function instanceOfSaveTransactionWithOptionalFields(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSaveTransactionWithOptionalFields = instanceOfSaveTransactionWithOptionalFields;
function SaveTransactionWithOptionalFieldsFromJSON(json) {
    return SaveTransactionWithOptionalFieldsFromJSONTyped(json, false);
}
exports.SaveTransactionWithOptionalFieldsFromJSON = SaveTransactionWithOptionalFieldsFromJSON;
function SaveTransactionWithOptionalFieldsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account_id': !(0, runtime_1.exists)(json, 'account_id') ? undefined : json['account_id'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'payee_id': !(0, runtime_1.exists)(json, 'payee_id') ? undefined : json['payee_id'],
        'payee_name': !(0, runtime_1.exists)(json, 'payee_name') ? undefined : json['payee_name'],
        'category_id': !(0, runtime_1.exists)(json, 'category_id') ? undefined : json['category_id'],
        'memo': !(0, runtime_1.exists)(json, 'memo') ? undefined : json['memo'],
        'cleared': !(0, runtime_1.exists)(json, 'cleared') ? undefined : (0, TransactionClearedStatus_1.TransactionClearedStatusFromJSON)(json['cleared']),
        'approved': !(0, runtime_1.exists)(json, 'approved') ? undefined : json['approved'],
        'flag_color': !(0, runtime_1.exists)(json, 'flag_color') ? undefined : (0, TransactionFlagColor_1.TransactionFlagColorFromJSON)(json['flag_color']),
        'import_id': !(0, runtime_1.exists)(json, 'import_id') ? undefined : json['import_id'],
        'subtransactions': !(0, runtime_1.exists)(json, 'subtransactions') ? undefined : (json['subtransactions'].map(SaveSubTransaction_1.SaveSubTransactionFromJSON)),
    };
}
exports.SaveTransactionWithOptionalFieldsFromJSONTyped = SaveTransactionWithOptionalFieldsFromJSONTyped;
function SaveTransactionWithOptionalFieldsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account_id': value.account_id,
        'date': value.date,
        'amount': value.amount,
        'payee_id': value.payee_id,
        'payee_name': value.payee_name,
        'category_id': value.category_id,
        'memo': value.memo,
        'cleared': (0, TransactionClearedStatus_1.TransactionClearedStatusToJSON)(value.cleared),
        'approved': value.approved,
        'flag_color': (0, TransactionFlagColor_1.TransactionFlagColorToJSON)(value.flag_color),
        'import_id': value.import_id,
        'subtransactions': value.subtransactions === undefined ? undefined : (value.subtransactions.map(SaveSubTransaction_1.SaveSubTransactionToJSON)),
    };
}
exports.SaveTransactionWithOptionalFieldsToJSON = SaveTransactionWithOptionalFieldsToJSON;
