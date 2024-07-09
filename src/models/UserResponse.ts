/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

import { mapValues } from '../runtime';
import type { UserResponseData } from './UserResponseData';
import {
    UserResponseDataFromJSON,
    UserResponseDataFromJSONTyped,
    UserResponseDataToJSON,
} from './UserResponseData';

/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {UserResponseData}
     * @memberof UserResponse
     */
    data: UserResponseData;
}

/**
 * Check if a given object implements the UserResponse interface.
 */
export function instanceOfUserResponse(value: object): value is UserResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UserResponseFromJSON(json: any): UserResponse {
    return UserResponseFromJSONTyped(json, false);
}

export function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UserResponseDataFromJSON(json['data']),
    };
}

export function UserResponseToJSON(value?: UserResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': UserResponseDataToJSON(value['data']),
    };
}

