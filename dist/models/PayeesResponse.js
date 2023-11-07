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
exports.PayeesResponseToJSON = exports.PayeesResponseFromJSONTyped = exports.PayeesResponseFromJSON = exports.instanceOfPayeesResponse = void 0;
const PayeesResponseData_1 = require("./PayeesResponseData");
/**
 * Check if a given object implements the PayeesResponse interface.
 */
function instanceOfPayeesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfPayeesResponse = instanceOfPayeesResponse;
function PayeesResponseFromJSON(json) {
    return PayeesResponseFromJSONTyped(json, false);
}
exports.PayeesResponseFromJSON = PayeesResponseFromJSON;
function PayeesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, PayeesResponseData_1.PayeesResponseDataFromJSON)(json['data']),
    };
}
exports.PayeesResponseFromJSONTyped = PayeesResponseFromJSONTyped;
function PayeesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, PayeesResponseData_1.PayeesResponseDataToJSON)(value.data),
    };
}
exports.PayeesResponseToJSON = PayeesResponseToJSON;