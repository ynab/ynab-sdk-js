/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
/**
 * Check if a given object implements the CurrencyFormat interface.
 */
export function instanceOfCurrencyFormat(value) {
    if (!('iso_code' in value) || value['iso_code'] === undefined)
        return false;
    if (!('example_format' in value) || value['example_format'] === undefined)
        return false;
    if (!('decimal_digits' in value) || value['decimal_digits'] === undefined)
        return false;
    if (!('decimal_separator' in value) || value['decimal_separator'] === undefined)
        return false;
    if (!('symbol_first' in value) || value['symbol_first'] === undefined)
        return false;
    if (!('group_separator' in value) || value['group_separator'] === undefined)
        return false;
    if (!('currency_symbol' in value) || value['currency_symbol'] === undefined)
        return false;
    if (!('display_symbol' in value) || value['display_symbol'] === undefined)
        return false;
    return true;
}
export function CurrencyFormatFromJSON(json) {
    return CurrencyFormatFromJSONTyped(json, false);
}
export function CurrencyFormatFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'iso_code': json['iso_code'],
        'example_format': json['example_format'],
        'decimal_digits': json['decimal_digits'],
        'decimal_separator': json['decimal_separator'],
        'symbol_first': json['symbol_first'],
        'group_separator': json['group_separator'],
        'currency_symbol': json['currency_symbol'],
        'display_symbol': json['display_symbol'],
    };
}
export function CurrencyFormatToJSON(json) {
    return CurrencyFormatToJSONTyped(json, false);
}
export function CurrencyFormatToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'iso_code': value['iso_code'],
        'example_format': value['example_format'],
        'decimal_digits': value['decimal_digits'],
        'decimal_separator': value['decimal_separator'],
        'symbol_first': value['symbol_first'],
        'group_separator': value['group_separator'],
        'currency_symbol': value['currency_symbol'],
        'display_symbol': value['display_symbol'],
    };
}
