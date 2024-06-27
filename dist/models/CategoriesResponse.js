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
exports.CategoriesResponseToJSON = exports.CategoriesResponseFromJSONTyped = exports.CategoriesResponseFromJSON = exports.instanceOfCategoriesResponse = void 0;
const CategoriesResponseData_1 = require("./CategoriesResponseData");
/**
 * Check if a given object implements the CategoriesResponse interface.
 */
function instanceOfCategoriesResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfCategoriesResponse = instanceOfCategoriesResponse;
function CategoriesResponseFromJSON(json) {
    return CategoriesResponseFromJSONTyped(json, false);
}
exports.CategoriesResponseFromJSON = CategoriesResponseFromJSON;
function CategoriesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (0, CategoriesResponseData_1.CategoriesResponseDataFromJSON)(json['data']),
    };
}
exports.CategoriesResponseFromJSONTyped = CategoriesResponseFromJSONTyped;
function CategoriesResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': (0, CategoriesResponseData_1.CategoriesResponseDataToJSON)(value['data']),
    };
}
exports.CategoriesResponseToJSON = CategoriesResponseToJSON;
