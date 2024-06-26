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
import type { SaveAccount } from './SaveAccount';
/**
 *
 * @export
 * @interface PostAccountWrapper
 */
export interface PostAccountWrapper {
    /**
     *
     * @type {SaveAccount}
     * @memberof PostAccountWrapper
     */
    account: SaveAccount;
}
/**
 * Check if a given object implements the PostAccountWrapper interface.
 */
export declare function instanceOfPostAccountWrapper(value: object): value is PostAccountWrapper;
export declare function PostAccountWrapperFromJSON(json: any): PostAccountWrapper;
export declare function PostAccountWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAccountWrapper;
export declare function PostAccountWrapperToJSON(value?: PostAccountWrapper | null): any;
