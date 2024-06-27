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
import type { SaveCategoryResponseData } from './SaveCategoryResponseData';
/**
 *
 * @export
 * @interface SaveCategoryResponse
 */
export interface SaveCategoryResponse {
    /**
     *
     * @type {SaveCategoryResponseData}
     * @memberof SaveCategoryResponse
     */
    data: SaveCategoryResponseData;
}
/**
 * Check if a given object implements the SaveCategoryResponse interface.
 */
export declare function instanceOfSaveCategoryResponse(value: object): value is SaveCategoryResponse;
export declare function SaveCategoryResponseFromJSON(json: any): SaveCategoryResponse;
export declare function SaveCategoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveCategoryResponse;
export declare function SaveCategoryResponseToJSON(value?: SaveCategoryResponse | null): any;
