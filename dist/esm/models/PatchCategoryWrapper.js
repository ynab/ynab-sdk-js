/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import { SaveCategoryFromJSON, SaveCategoryToJSON, } from './SaveCategory';
/**
 * Check if a given object implements the PatchCategoryWrapper interface.
 */
export function instanceOfPatchCategoryWrapper(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    return true;
}
export function PatchCategoryWrapperFromJSON(json) {
    return PatchCategoryWrapperFromJSONTyped(json, false);
}
export function PatchCategoryWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': SaveCategoryFromJSON(json['category']),
    };
}
export function PatchCategoryWrapperToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'category': SaveCategoryToJSON(value['category']),
    };
}
