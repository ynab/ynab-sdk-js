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
exports.ErrorDetailToJSON = exports.ErrorDetailFromJSONTyped = exports.ErrorDetailFromJSON = exports.instanceOfErrorDetail = void 0;
/**
 * Check if a given object implements the ErrorDetail interface.
 */
function instanceOfErrorDetail(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "detail" in value;
    return isInstance;
}
exports.instanceOfErrorDetail = instanceOfErrorDetail;
function ErrorDetailFromJSON(json) {
    return ErrorDetailFromJSONTyped(json, false);
}
exports.ErrorDetailFromJSON = ErrorDetailFromJSON;
function ErrorDetailFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'detail': json['detail'],
    };
}
exports.ErrorDetailFromJSONTyped = ErrorDetailFromJSONTyped;
function ErrorDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'detail': value.detail,
    };
}
exports.ErrorDetailToJSON = ErrorDetailToJSON;
