/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { PayeeLocationResponseData } from './PayeeLocationResponseData';
import {
    PayeeLocationResponseDataFromJSON,
    PayeeLocationResponseDataFromJSONTyped,
    PayeeLocationResponseDataToJSON,
    PayeeLocationResponseDataToJSONTyped,
} from './PayeeLocationResponseData';

/**
 * 
 * @export
 * @interface PayeeLocationResponse
 */
export interface PayeeLocationResponse {
    /**
     * 
     * @type {PayeeLocationResponseData}
     * @memberof PayeeLocationResponse
     */
    data: PayeeLocationResponseData;
}

/**
 * Check if a given object implements the PayeeLocationResponse interface.
 */
export function instanceOfPayeeLocationResponse(value: object): value is PayeeLocationResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function PayeeLocationResponseFromJSON(json: any): PayeeLocationResponse {
    return PayeeLocationResponseFromJSONTyped(json, false);
}

export function PayeeLocationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeLocationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PayeeLocationResponseDataFromJSON(json['data']),
    };
}

export function PayeeLocationResponseToJSON(json: any): PayeeLocationResponse {
    return PayeeLocationResponseToJSONTyped(json, false);
}

export function PayeeLocationResponseToJSONTyped(value?: PayeeLocationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': PayeeLocationResponseDataToJSON(value['data']),
    };
}

