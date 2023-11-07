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
/**
 * Check if a given object implements the TransactionSummaryDebtTransactionType interface.
 */
export function instanceOfTransactionSummaryDebtTransactionType(value) {
    var isInstance = true;
    return isInstance;
}
export function TransactionSummaryDebtTransactionTypeFromJSON(json) {
    return TransactionSummaryDebtTransactionTypeFromJSONTyped(json, false);
}
export function TransactionSummaryDebtTransactionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function TransactionSummaryDebtTransactionTypeToJSON(value) {
    return value;
}
