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
exports.CategoryGroupToJSON = exports.CategoryGroupFromJSONTyped = exports.CategoryGroupFromJSON = exports.instanceOfCategoryGroup = void 0;
/**
 * Check if a given object implements the CategoryGroup interface.
 */
function instanceOfCategoryGroup(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('hidden' in value) || value['hidden'] === undefined)
        return false;
    if (!('deleted' in value) || value['deleted'] === undefined)
        return false;
    return true;
}
exports.instanceOfCategoryGroup = instanceOfCategoryGroup;
function CategoryGroupFromJSON(json) {
    return CategoryGroupFromJSONTyped(json, false);
}
exports.CategoryGroupFromJSON = CategoryGroupFromJSON;
function CategoryGroupFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'hidden': json['hidden'],
        'deleted': json['deleted'],
    };
}
exports.CategoryGroupFromJSONTyped = CategoryGroupFromJSONTyped;
function CategoryGroupToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'hidden': value['hidden'],
        'deleted': value['deleted'],
    };
}
exports.CategoryGroupToJSON = CategoryGroupToJSON;
