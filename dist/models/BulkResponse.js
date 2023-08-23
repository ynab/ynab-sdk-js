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
exports.BulkResponseToJSON = exports.BulkResponseFromJSONTyped = exports.BulkResponseFromJSON = exports.instanceOfBulkResponse = void 0;
const BulkResponseData_1 = require("./BulkResponseData");
/**
 * Check if a given object implements the BulkResponse interface.
 */
function instanceOfBulkResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfBulkResponse = instanceOfBulkResponse;
function BulkResponseFromJSON(json) {
    return BulkResponseFromJSONTyped(json, false);
}
exports.BulkResponseFromJSON = BulkResponseFromJSON;
function BulkResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, BulkResponseData_1.BulkResponseDataFromJSON)(json['data']),
    };
}
exports.BulkResponseFromJSONTyped = BulkResponseFromJSONTyped;
function BulkResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, BulkResponseData_1.BulkResponseDataToJSON)(value.data),
    };
}
exports.BulkResponseToJSON = BulkResponseToJSON;
