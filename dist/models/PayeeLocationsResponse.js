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
exports.PayeeLocationsResponseToJSONTyped = exports.PayeeLocationsResponseToJSON = exports.PayeeLocationsResponseFromJSONTyped = exports.PayeeLocationsResponseFromJSON = exports.instanceOfPayeeLocationsResponse = void 0;
const PayeeLocationsResponseData_1 = require("./PayeeLocationsResponseData");
/**
 * Check if a given object implements the PayeeLocationsResponse interface.
 */
function instanceOfPayeeLocationsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfPayeeLocationsResponse = instanceOfPayeeLocationsResponse;
function PayeeLocationsResponseFromJSON(json) {
    return PayeeLocationsResponseFromJSONTyped(json, false);
}
exports.PayeeLocationsResponseFromJSON = PayeeLocationsResponseFromJSON;
function PayeeLocationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, PayeeLocationsResponseData_1.PayeeLocationsResponseDataFromJSON)(json['data']),
    };
}
exports.PayeeLocationsResponseFromJSONTyped = PayeeLocationsResponseFromJSONTyped;
function PayeeLocationsResponseToJSON(json) {
    return PayeeLocationsResponseToJSONTyped(json, false);
}
exports.PayeeLocationsResponseToJSON = PayeeLocationsResponseToJSON;
function PayeeLocationsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, PayeeLocationsResponseData_1.PayeeLocationsResponseDataToJSON)(value['data']),
    };
}
exports.PayeeLocationsResponseToJSONTyped = PayeeLocationsResponseToJSONTyped;
