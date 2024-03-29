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

import { exists, mapValues } from '../runtime';
/**
 * If the transaction is a debt/loan account transaction, the type of transaction
 * @export
 * @interface TransactionSummaryDebtTransactionType
 */
export interface TransactionSummaryDebtTransactionType {
}

/**
 * Check if a given object implements the TransactionSummaryDebtTransactionType interface.
 */
export function instanceOfTransactionSummaryDebtTransactionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionSummaryDebtTransactionTypeFromJSON(json: any): TransactionSummaryDebtTransactionType {
    return TransactionSummaryDebtTransactionTypeFromJSONTyped(json, false);
}

export function TransactionSummaryDebtTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSummaryDebtTransactionType {
    return json;
}

export function TransactionSummaryDebtTransactionTypeToJSON(value?: TransactionSummaryDebtTransactionType | null): any {
    return value;
}

