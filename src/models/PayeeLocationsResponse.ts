/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { PayeeLocationsResponseData } from './PayeeLocationsResponseData';
import {
    PayeeLocationsResponseDataFromJSON,
    PayeeLocationsResponseDataFromJSONTyped,
    PayeeLocationsResponseDataToJSON,
} from './PayeeLocationsResponseData';

/**
 * 
 * @export
 * @interface PayeeLocationsResponse
 */
export interface PayeeLocationsResponse {
    /**
     * 
     * @type {PayeeLocationsResponseData}
     * @memberof PayeeLocationsResponse
     */
    data: PayeeLocationsResponseData;
}

/**
 * Check if a given object implements the PayeeLocationsResponse interface.
 */
export function instanceOfPayeeLocationsResponse(value: object): value is PayeeLocationsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function PayeeLocationsResponseFromJSON(json: any): PayeeLocationsResponse {
    return PayeeLocationsResponseFromJSONTyped(json, false);
}

export function PayeeLocationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeLocationsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PayeeLocationsResponseDataFromJSON(json['data']),
    };
}

export function PayeeLocationsResponseToJSON(value?: PayeeLocationsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': PayeeLocationsResponseDataToJSON(value['data']),
    };
}

