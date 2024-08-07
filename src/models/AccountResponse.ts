/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { AccountResponseData } from './AccountResponseData';
import {
    AccountResponseDataFromJSON,
    AccountResponseDataFromJSONTyped,
    AccountResponseDataToJSON,
} from './AccountResponseData';

/**
 * 
 * @export
 * @interface AccountResponse
 */
export interface AccountResponse {
    /**
     * 
     * @type {AccountResponseData}
     * @memberof AccountResponse
     */
    data: AccountResponseData;
}

/**
 * Check if a given object implements the AccountResponse interface.
 */
export function instanceOfAccountResponse(value: object): value is AccountResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AccountResponseFromJSON(json: any): AccountResponse {
    return AccountResponseFromJSONTyped(json, false);
}

export function AccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AccountResponseDataFromJSON(json['data']),
    };
}

export function AccountResponseToJSON(value?: AccountResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': AccountResponseDataToJSON(value['data']),
    };
}

