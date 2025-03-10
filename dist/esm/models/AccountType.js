/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
/**
 * The type of account
 * @export
 */
export var AccountType = {
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
export function instanceOfAccountType(value) {
    for (var key in AccountType) {
        if (Object.prototype.hasOwnProperty.call(AccountType, key)) {
            if (AccountType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
export function AccountTypeFromJSON(json) {
    return AccountTypeFromJSONTyped(json, false);
}
export function AccountTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function AccountTypeToJSON(value) {
    return value;
}
export function AccountTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
