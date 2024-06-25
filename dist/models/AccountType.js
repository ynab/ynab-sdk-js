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
exports.AccountTypeToJSON = exports.AccountTypeFromJSONTyped = exports.AccountTypeFromJSON = exports.instanceOfAccountType = exports.AccountType = void 0;
/**
 * The type of account
 * @export
 */
exports.AccountType = {
    Checking: 'checking',
    Savings: 'savings',
    Cash: 'cash',
    CreditCard: 'creditCard',
    LineOfCredit: 'lineOfCredit',
    OtherAsset: 'otherAsset',
    OtherLiability: 'otherLiability',
    Mortgage: 'mortgage',
    AutoLoan: 'autoLoan',
    StudentLoan: 'studentLoan',
    PersonalLoan: 'personalLoan',
    MedicalDebt: 'medicalDebt',
    OtherDebt: 'otherDebt'
};
function instanceOfAccountType(value) {
    for (const key in exports.AccountType) {
        if (Object.prototype.hasOwnProperty.call(exports.AccountType, key)) {
            if (exports.AccountType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
exports.instanceOfAccountType = instanceOfAccountType;
function AccountTypeFromJSON(json) {
    return AccountTypeFromJSONTyped(json, false);
}
exports.AccountTypeFromJSON = AccountTypeFromJSON;
function AccountTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AccountTypeFromJSONTyped = AccountTypeFromJSONTyped;
function AccountTypeToJSON(value) {
    return value;
}
exports.AccountTypeToJSON = AccountTypeToJSON;
