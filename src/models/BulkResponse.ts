/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { BulkResponseData } from './BulkResponseData';
import {
    BulkResponseDataFromJSON,
    BulkResponseDataFromJSONTyped,
    BulkResponseDataToJSON,
} from './BulkResponseData';

/**
 * 
 * @export
 * @interface BulkResponse
 */
export interface BulkResponse {
    /**
     * 
     * @type {BulkResponseData}
     * @memberof BulkResponse
     */
    data: BulkResponseData;
}

/**
 * Check if a given object implements the BulkResponse interface.
 */
export function instanceOfBulkResponse(value: object): value is BulkResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BulkResponseFromJSON(json: any): BulkResponse {
    return BulkResponseFromJSONTyped(json, false);
}

export function BulkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BulkResponseDataFromJSON(json['data']),
    };
}

export function BulkResponseToJSON(value?: BulkResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': BulkResponseDataToJSON(value['data']),
    };
}

