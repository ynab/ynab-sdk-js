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
/**
 *
 * @export
 * @interface BulkResponseDataBulk
 */
export interface BulkResponseDataBulk {
    /**
     * The list of Transaction ids that were created.
     * @type {Array<string>}
     * @memberof BulkResponseDataBulk
     */
    transaction_ids: Array<string>;
    /**
     * If any Transactions were not created because they had an `import_id` matching a transaction already on the same account, the specified import_id(s) will be included in this list.
     * @type {Array<string>}
     * @memberof BulkResponseDataBulk
     */
    duplicate_import_ids: Array<string>;
}
/**
 * Check if a given object implements the BulkResponseDataBulk interface.
 */
export declare function instanceOfBulkResponseDataBulk(value: object): boolean;
export declare function BulkResponseDataBulkFromJSON(json: any): BulkResponseDataBulk;
export declare function BulkResponseDataBulkFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkResponseDataBulk;
export declare function BulkResponseDataBulkToJSON(value?: BulkResponseDataBulk | null): any;
