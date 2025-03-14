/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { ErrorDetail } from './ErrorDetail';
/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     *
     * @type {ErrorDetail}
     * @memberof ErrorResponse
     */
    error: ErrorDetail;
}
/**
 * Check if a given object implements the ErrorResponse interface.
 */
export declare function instanceOfErrorResponse(value: object): value is ErrorResponse;
export declare function ErrorResponseFromJSON(json: any): ErrorResponse;
export declare function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse;
export declare function ErrorResponseToJSON(json: any): ErrorResponse;
export declare function ErrorResponseToJSONTyped(value?: ErrorResponse | null, ignoreDiscriminator?: boolean): any;
