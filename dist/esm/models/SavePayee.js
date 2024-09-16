/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
/**
 * Check if a given object implements the SavePayee interface.
 */
export function instanceOfSavePayee(value) {
    return true;
}
export function SavePayeeFromJSON(json) {
    return SavePayeeFromJSONTyped(json, false);
}
export function SavePayeeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
    };
}
export function SavePayeeToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
    };
}