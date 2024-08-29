/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { TransactionDetail } from './TransactionDetail';
/**
 *
 * @export
 * @interface SaveTransactionsResponseData
 */
export interface SaveTransactionsResponseData {
    /**
     * The transaction ids that were saved
     * @type {Array<string>}
     * @memberof SaveTransactionsResponseData
     */
    transaction_ids: Array<string>;
    /**
     *
     * @type {TransactionDetail}
     * @memberof SaveTransactionsResponseData
     */
    transaction?: TransactionDetail;
    /**
     * If multiple transactions were specified, the transactions that were saved
     * @type {Array<TransactionDetail>}
     * @memberof SaveTransactionsResponseData
     */
    transactions?: Array<TransactionDetail>;
    /**
     * If multiple transactions were specified, a list of import_ids that were not created because of an existing `import_id` found on the same account
     * @type {Array<string>}
     * @memberof SaveTransactionsResponseData
     */
    duplicate_import_ids?: Array<string>;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof SaveTransactionsResponseData
     */
    server_knowledge: number;
}
/**
 * Check if a given object implements the SaveTransactionsResponseData interface.
 */
export declare function instanceOfSaveTransactionsResponseData(value: object): value is SaveTransactionsResponseData;
export declare function SaveTransactionsResponseDataFromJSON(json: any): SaveTransactionsResponseData;
export declare function SaveTransactionsResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveTransactionsResponseData;
export declare function SaveTransactionsResponseDataToJSON(value?: SaveTransactionsResponseData | null): any;
