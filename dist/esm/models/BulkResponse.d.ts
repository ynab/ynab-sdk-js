/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { BulkResponseData } from './BulkResponseData';
/**
 *
 * @export
 * @interface BulkResponse
 */
export interface BulkResponse {
    /**
     *
     * @type {BulkResponseData}
     * @memberof BulkResponse
     */
    data: BulkResponseData;
}
/**
 * Check if a given object implements the BulkResponse interface.
 */
export declare function instanceOfBulkResponse(value: object): value is BulkResponse;
export declare function BulkResponseFromJSON(json: any): BulkResponse;
export declare function BulkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkResponse;
export declare function BulkResponseToJSON(json: any): BulkResponse;
export declare function BulkResponseToJSONTyped(value?: BulkResponse | null, ignoreDiscriminator?: boolean): any;
