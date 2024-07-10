/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { SaveTransactionsResponseData } from './SaveTransactionsResponseData';
import {
    SaveTransactionsResponseDataFromJSON,
    SaveTransactionsResponseDataFromJSONTyped,
    SaveTransactionsResponseDataToJSON,
} from './SaveTransactionsResponseData';

/**
 * 
 * @export
 * @interface SaveTransactionsResponse
 */
export interface SaveTransactionsResponse {
    /**
     * 
     * @type {SaveTransactionsResponseData}
     * @memberof SaveTransactionsResponse
     */
    data: SaveTransactionsResponseData;
}

/**
 * Check if a given object implements the SaveTransactionsResponse interface.
 */
export function instanceOfSaveTransactionsResponse(value: object): value is SaveTransactionsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function SaveTransactionsResponseFromJSON(json: any): SaveTransactionsResponse {
    return SaveTransactionsResponseFromJSONTyped(json, false);
}

export function SaveTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveTransactionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SaveTransactionsResponseDataFromJSON(json['data']),
    };
}

export function SaveTransactionsResponseToJSON(value?: SaveTransactionsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': SaveTransactionsResponseDataToJSON(value['data']),
    };
}

