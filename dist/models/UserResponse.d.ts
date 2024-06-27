/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UserResponseData } from './UserResponseData';
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
export declare function instanceOfUserResponse(value: object): value is UserResponse;
export declare function UserResponseFromJSON(json: any): UserResponse;
export declare function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse;
export declare function UserResponseToJSON(value?: UserResponse | null): any;
