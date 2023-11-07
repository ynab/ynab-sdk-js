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
import type { PayeeResponseData } from './PayeeResponseData';
import {
    PayeeResponseDataFromJSON,
    PayeeResponseDataFromJSONTyped,
    PayeeResponseDataToJSON,
} from './PayeeResponseData';

/**
 * 
 * @export
 * @interface PayeeResponse
 */
export interface PayeeResponse {
    /**
     * 
     * @type {PayeeResponseData}
     * @memberof PayeeResponse
     */
    data: PayeeResponseData;
}

/**
 * Check if a given object implements the PayeeResponse interface.
 */
export function instanceOfPayeeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PayeeResponseFromJSON(json: any): PayeeResponse {
    return PayeeResponseFromJSONTyped(json, false);
}

export function PayeeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PayeeResponseDataFromJSON(json['data']),
    };
}

export function PayeeResponseToJSON(value?: PayeeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PayeeResponseDataToJSON(value.data),
    };
}
