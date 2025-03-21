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
exports.TransactionFlagColorToJSONTyped = exports.TransactionFlagColorToJSON = exports.TransactionFlagColorFromJSONTyped = exports.TransactionFlagColorFromJSON = exports.instanceOfTransactionFlagColor = exports.TransactionFlagColor = void 0;
/**
 * The transaction flag
 * @export
 */
exports.TransactionFlagColor = {
    Red: 'red',
    Orange: 'orange',
    Yellow: 'yellow',
    Green: 'green',
    Blue: 'blue',
    Purple: 'purple'
};
function instanceOfTransactionFlagColor(value) {
    for (const key in exports.TransactionFlagColor) {
        if (Object.prototype.hasOwnProperty.call(exports.TransactionFlagColor, key)) {
            if (exports.TransactionFlagColor[key] === value) {
                return true;
            }
        }
    }
    return false;
}
exports.instanceOfTransactionFlagColor = instanceOfTransactionFlagColor;
function TransactionFlagColorFromJSON(json) {
    return TransactionFlagColorFromJSONTyped(json, false);
}
exports.TransactionFlagColorFromJSON = TransactionFlagColorFromJSON;
function TransactionFlagColorFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TransactionFlagColorFromJSONTyped = TransactionFlagColorFromJSONTyped;
function TransactionFlagColorToJSON(value) {
    return value;
}
exports.TransactionFlagColorToJSON = TransactionFlagColorToJSON;
function TransactionFlagColorToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
exports.TransactionFlagColorToJSONTyped = TransactionFlagColorToJSONTyped;
