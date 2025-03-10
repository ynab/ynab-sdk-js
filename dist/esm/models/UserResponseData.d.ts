/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
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
export declare function instanceOfUserResponseData(value: object): value is UserResponseData;
export declare function UserResponseDataFromJSON(json: any): UserResponseData;
export declare function UserResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponseData;
export declare function UserResponseDataToJSON(json: any): UserResponseData;
export declare function UserResponseDataToJSONTyped(value?: UserResponseData | null, ignoreDiscriminator?: boolean): any;
