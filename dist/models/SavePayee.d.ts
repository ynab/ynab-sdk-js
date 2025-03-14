/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
/**
 *
 * @export
 * @interface SavePayee
 */
export interface SavePayee {
    /**
     * The name of the payee. The name must be a maximum of 500 characters.
     * @type {string}
     * @memberof SavePayee
     */
    name?: string;
}
/**
 * Check if a given object implements the SavePayee interface.
 */
export declare function instanceOfSavePayee(value: object): value is SavePayee;
export declare function SavePayeeFromJSON(json: any): SavePayee;
export declare function SavePayeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SavePayee;
export declare function SavePayeeToJSON(json: any): SavePayee;
export declare function SavePayeeToJSONTyped(value?: SavePayee | null, ignoreDiscriminator?: boolean): any;
