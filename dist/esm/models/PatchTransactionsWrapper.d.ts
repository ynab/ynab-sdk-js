/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { SaveTransactionWithIdOrImportId } from './SaveTransactionWithIdOrImportId';
/**
 *
 * @export
 * @interface PatchTransactionsWrapper
 */
export interface PatchTransactionsWrapper {
    /**
     *
     * @type {Array<SaveTransactionWithIdOrImportId>}
     * @memberof PatchTransactionsWrapper
     */
    transactions: Array<SaveTransactionWithIdOrImportId>;
}
/**
 * Check if a given object implements the PatchTransactionsWrapper interface.
 */
export declare function instanceOfPatchTransactionsWrapper(value: object): value is PatchTransactionsWrapper;
export declare function PatchTransactionsWrapperFromJSON(json: any): PatchTransactionsWrapper;
export declare function PatchTransactionsWrapperFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchTransactionsWrapper;
export declare function PatchTransactionsWrapperToJSON(json: any): PatchTransactionsWrapper;
export declare function PatchTransactionsWrapperToJSONTyped(value?: PatchTransactionsWrapper | null, ignoreDiscriminator?: boolean): any;
