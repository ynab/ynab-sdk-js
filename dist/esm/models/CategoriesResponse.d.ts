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
import type { CategoriesResponseData } from './CategoriesResponseData';
/**
 *
 * @export
 * @interface CategoriesResponse
 */
export interface CategoriesResponse {
    /**
     *
     * @type {CategoriesResponseData}
     * @memberof CategoriesResponse
     */
    data: CategoriesResponseData;
}
/**
 * Check if a given object implements the CategoriesResponse interface.
 */
export declare function instanceOfCategoriesResponse(value: object): boolean;
export declare function CategoriesResponseFromJSON(json: any): CategoriesResponse;
export declare function CategoriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesResponse;
export declare function CategoriesResponseToJSON(value?: CategoriesResponse | null): any;
