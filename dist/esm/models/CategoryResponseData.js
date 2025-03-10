/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { CategoryFromJSON, CategoryToJSON, } from './Category';
/**
 * Check if a given object implements the CategoryResponseData interface.
 */
export function instanceOfCategoryResponseData(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    return true;
}
export function CategoryResponseDataFromJSON(json) {
    return CategoryResponseDataFromJSONTyped(json, false);
}
export function CategoryResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': CategoryFromJSON(json['category']),
    };
}
export function CategoryResponseDataToJSON(json) {
    return CategoryResponseDataToJSONTyped(json, false);
}
export function CategoryResponseDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'category': CategoryToJSON(value['category']),
    };
}
