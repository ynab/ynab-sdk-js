/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { SavePayee } from './SavePayee';
/**
 *
 * @export
 * @interface PatchPayeeWrapper
 */
export interface PatchPayeeWrapper {
    /**
     *
     * @type {SavePayee}
     * @memberof PatchPayeeWrapper
     */
    payee: SavePayee;
}
/**
 * Check if a given object implements the PatchPayeeWrapper interface.
 */
export declare function instanceOfPatchPayeeWrapper(value: object): value is PatchPayeeWrapper;
export declare function PatchPayeeWrapperFromJSON(json: any): PatchPayeeWrapper;
export declare function PatchPayeeWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchPayeeWrapper;
export declare function PatchPayeeWrapperToJSON(json: any): PatchPayeeWrapper;
export declare function PatchPayeeWrapperToJSONTyped(value?: PatchPayeeWrapper | null, ignoreDiscriminator?: boolean): any;
