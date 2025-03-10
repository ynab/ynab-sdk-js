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
exports.PatchMonthCategoryWrapperToJSONTyped = exports.PatchMonthCategoryWrapperToJSON = exports.PatchMonthCategoryWrapperFromJSONTyped = exports.PatchMonthCategoryWrapperFromJSON = exports.instanceOfPatchMonthCategoryWrapper = void 0;
const SaveMonthCategory_1 = require("./SaveMonthCategory");
/**
 * Check if a given object implements the PatchMonthCategoryWrapper interface.
 */
function instanceOfPatchMonthCategoryWrapper(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    return true;
}
exports.instanceOfPatchMonthCategoryWrapper = instanceOfPatchMonthCategoryWrapper;
function PatchMonthCategoryWrapperFromJSON(json) {
    return PatchMonthCategoryWrapperFromJSONTyped(json, false);
}
exports.PatchMonthCategoryWrapperFromJSON = PatchMonthCategoryWrapperFromJSON;
function PatchMonthCategoryWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': (0, SaveMonthCategory_1.SaveMonthCategoryFromJSON)(json['category']),
    };
}
exports.PatchMonthCategoryWrapperFromJSONTyped = PatchMonthCategoryWrapperFromJSONTyped;
function PatchMonthCategoryWrapperToJSON(json) {
    return PatchMonthCategoryWrapperToJSONTyped(json, false);
}
exports.PatchMonthCategoryWrapperToJSON = PatchMonthCategoryWrapperToJSON;
function PatchMonthCategoryWrapperToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': (0, SaveMonthCategory_1.SaveMonthCategoryToJSON)(value['category']),
    };
}
exports.PatchMonthCategoryWrapperToJSONTyped = PatchMonthCategoryWrapperToJSONTyped;
