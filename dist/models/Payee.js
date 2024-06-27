"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayeeToJSON = exports.PayeeFromJSONTyped = exports.PayeeFromJSON = exports.instanceOfPayee = void 0;
/**
 * Check if a given object implements the Payee interface.
 */
function instanceOfPayee(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('deleted' in value) || value['deleted'] === undefined)
        return false;
    return true;
}
exports.instanceOfPayee = instanceOfPayee;
function PayeeFromJSON(json) {
    return PayeeFromJSONTyped(json, false);
}
exports.PayeeFromJSON = PayeeFromJSON;
function PayeeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'transfer_account_id': json['transfer_account_id'] == null ? undefined : json['transfer_account_id'],
        'deleted': json['deleted'],
    };
}
exports.PayeeFromJSONTyped = PayeeFromJSONTyped;
function PayeeToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'transfer_account_id': value['transfer_account_id'],
        'deleted': value['deleted'],
    };
}
exports.PayeeToJSON = PayeeToJSON;
