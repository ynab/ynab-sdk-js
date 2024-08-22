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
exports.ScheduledTransactionFrequencyToJSON = exports.ScheduledTransactionFrequencyFromJSONTyped = exports.ScheduledTransactionFrequencyFromJSON = exports.instanceOfScheduledTransactionFrequency = exports.ScheduledTransactionFrequency = void 0;
/**
 * The scheduled transaction frequency
 * @export
 */
exports.ScheduledTransactionFrequency = {
    Never: 'never',
    Daily: 'daily',
    Weekly: 'weekly',
    EveryOtherWeek: 'everyOtherWeek',
    TwiceAMonth: 'twiceAMonth',
    Every4Weeks: 'every4Weeks',
    Monthly: 'monthly',
    EveryOtherMonth: 'everyOtherMonth',
    Every3Months: 'every3Months',
    Every4Months: 'every4Months',
    TwiceAYear: 'twiceAYear',
    Yearly: 'yearly',
    EveryOtherYear: 'everyOtherYear'
};
function instanceOfScheduledTransactionFrequency(value) {
    for (const key in exports.ScheduledTransactionFrequency) {
        if (Object.prototype.hasOwnProperty.call(exports.ScheduledTransactionFrequency, key)) {
            if (exports.ScheduledTransactionFrequency[key] === value) {
                return true;
            }
        }
    }
    return false;
}
exports.instanceOfScheduledTransactionFrequency = instanceOfScheduledTransactionFrequency;
function ScheduledTransactionFrequencyFromJSON(json) {
    return ScheduledTransactionFrequencyFromJSONTyped(json, false);
}
exports.ScheduledTransactionFrequencyFromJSON = ScheduledTransactionFrequencyFromJSON;
function ScheduledTransactionFrequencyFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ScheduledTransactionFrequencyFromJSONTyped = ScheduledTransactionFrequencyFromJSONTyped;
function ScheduledTransactionFrequencyToJSON(value) {
    return value;
}
exports.ScheduledTransactionFrequencyToJSON = ScheduledTransactionFrequencyToJSON;