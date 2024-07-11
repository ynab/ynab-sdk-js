"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayeeLocationResponseDataToJSON = exports.PayeeLocationResponseDataFromJSONTyped = exports.PayeeLocationResponseDataFromJSON = exports.instanceOfPayeeLocationResponseData = void 0;
const PayeeLocation_1 = require("./PayeeLocation");
/**
 * Check if a given object implements the PayeeLocationResponseData interface.
 */
function instanceOfPayeeLocationResponseData(value) {
    if (!('payee_location' in value) || value['payee_location'] === undefined)
        return false;
    return true;
}
exports.instanceOfPayeeLocationResponseData = instanceOfPayeeLocationResponseData;
function PayeeLocationResponseDataFromJSON(json) {
    return PayeeLocationResponseDataFromJSONTyped(json, false);
}
exports.PayeeLocationResponseDataFromJSON = PayeeLocationResponseDataFromJSON;
function PayeeLocationResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'payee_location': (0, PayeeLocation_1.PayeeLocationFromJSON)(json['payee_location']),
    };
}
exports.PayeeLocationResponseDataFromJSONTyped = PayeeLocationResponseDataFromJSONTyped;
function PayeeLocationResponseDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'payee_location': (0, PayeeLocation_1.PayeeLocationToJSON)(value['payee_location']),
    };
}
exports.PayeeLocationResponseDataToJSON = PayeeLocationResponseDataToJSON;
