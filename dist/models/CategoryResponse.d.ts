/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { CategoryResponseData } from './CategoryResponseData';
/**
 *
 * @export
 * @interface CategoryResponse
 */
export interface CategoryResponse {
    /**
     *
     * @type {CategoryResponseData}
     * @memberof CategoryResponse
     */
    data: CategoryResponseData;
}
/**
 * Check if a given object implements the CategoryResponse interface.
 */
export declare function instanceOfCategoryResponse(value: object): value is CategoryResponse;
export declare function CategoryResponseFromJSON(json: any): CategoryResponse;
export declare function CategoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryResponse;
export declare function CategoryResponseToJSON(json: any): CategoryResponse;
export declare function CategoryResponseToJSONTyped(value?: CategoryResponse | null, ignoreDiscriminator?: boolean): any;
