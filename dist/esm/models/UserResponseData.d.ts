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
import type { User } from './User';
/**
 *
 * @export
 * @interface UserResponseData
 */
export interface UserResponseData {
    /**
     *
     * @type {User}
     * @memberof UserResponseData
     */
    user: User;
}
/**
 * Check if a given object implements the UserResponseData interface.
 */
export declare function instanceOfUserResponseData(value: object): boolean;
export declare function UserResponseDataFromJSON(json: any): UserResponseData;
export declare function UserResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponseData;
export declare function UserResponseDataToJSON(value?: UserResponseData | null): any;
