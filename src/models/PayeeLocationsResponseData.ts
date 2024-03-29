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
import type { PayeeLocation } from './PayeeLocation';
import {
    PayeeLocationFromJSON,
    PayeeLocationFromJSONTyped,
    PayeeLocationToJSON,
} from './PayeeLocation';

/**
 * 
 * @export
 * @interface PayeeLocationsResponseData
 */
export interface PayeeLocationsResponseData {
    /**
     * 
     * @type {Array<PayeeLocation>}
     * @memberof PayeeLocationsResponseData
     */
    payee_locations: Array<PayeeLocation>;
}

/**
 * Check if a given object implements the PayeeLocationsResponseData interface.
 */
export function instanceOfPayeeLocationsResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payee_locations" in value;

    return isInstance;
}

export function PayeeLocationsResponseDataFromJSON(json: any): PayeeLocationsResponseData {
    return PayeeLocationsResponseDataFromJSONTyped(json, false);
}

export function PayeeLocationsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeLocationsResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payee_locations': ((json['payee_locations'] as Array<any>).map(PayeeLocationFromJSON)),
    };
}

export function PayeeLocationsResponseDataToJSON(value?: PayeeLocationsResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payee_locations': ((value.payee_locations as Array<any>).map(PayeeLocationToJSON)),
    };
}

