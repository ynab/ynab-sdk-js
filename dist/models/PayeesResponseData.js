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
exports.PayeesResponseDataToJSON = exports.PayeesResponseDataFromJSONTyped = exports.PayeesResponseDataFromJSON = exports.instanceOfPayeesResponseData = void 0;
const Payee_1 = require("./Payee");
/**
 * Check if a given object implements the PayeesResponseData interface.
 */
function instanceOfPayeesResponseData(value) {
    let isInstance = true;
    isInstance = isInstance && "payees" in value;
    isInstance = isInstance && "server_knowledge" in value;
    return isInstance;
}
exports.instanceOfPayeesResponseData = instanceOfPayeesResponseData;
function PayeesResponseDataFromJSON(json) {
    return PayeesResponseDataFromJSONTyped(json, false);
}
exports.PayeesResponseDataFromJSON = PayeesResponseDataFromJSON;
function PayeesResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payees': (json['payees'].map(Payee_1.PayeeFromJSON)),
        'server_knowledge': json['server_knowledge'],
    };
}
exports.PayeesResponseDataFromJSONTyped = PayeesResponseDataFromJSONTyped;
function PayeesResponseDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payees': (value.payees.map(Payee_1.PayeeToJSON)),
        'server_knowledge': value.server_knowledge,
    };
}
exports.PayeesResponseDataToJSON = PayeesResponseDataToJSON;