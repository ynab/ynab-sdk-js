/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { SaveMonthCategory } from './SaveMonthCategory';
/**
 *
 * @export
 * @interface PatchMonthCategoryWrapper
 */
export interface PatchMonthCategoryWrapper {
    /**
     *
     * @type {SaveMonthCategory}
     * @memberof PatchMonthCategoryWrapper
     */
    category: SaveMonthCategory;
}
/**
 * Check if a given object implements the PatchMonthCategoryWrapper interface.
 */
export declare function instanceOfPatchMonthCategoryWrapper(value: object): value is PatchMonthCategoryWrapper;
export declare function PatchMonthCategoryWrapperFromJSON(json: any): PatchMonthCategoryWrapper;
export declare function PatchMonthCategoryWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchMonthCategoryWrapper;
export declare function PatchMonthCategoryWrapperToJSON(json: any): PatchMonthCategoryWrapper;
export declare function PatchMonthCategoryWrapperToJSONTyped(value?: PatchMonthCategoryWrapper | null, ignoreDiscriminator?: boolean): any;
