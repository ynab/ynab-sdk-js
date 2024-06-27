/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * The version of the OpenAPI document: 1.70.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface SaveSubTransaction
 */
export interface SaveSubTransaction {
    /**
     * The subtransaction amount in milliunits format.
     * @type {number}
     * @memberof SaveSubTransaction
     */
    amount: number;
    /**
     * The payee for the subtransaction.
     * @type {string}
     * @memberof SaveSubTransaction
     */
    payee_id?: string;
    /**
     * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.
     * @type {string}
     * @memberof SaveSubTransaction
     */
    payee_name?: string;
    /**
     * The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied.
     * @type {string}
     * @memberof SaveSubTransaction
     */
    category_id?: string;
    /**
     *
     * @type {string}
     * @memberof SaveSubTransaction
     */
    memo?: string;
}
/**
 * Check if a given object implements the SaveSubTransaction interface.
 */
export declare function instanceOfSaveSubTransaction(value: object): value is SaveSubTransaction;
export declare function SaveSubTransactionFromJSON(json: any): SaveSubTransaction;
export declare function SaveSubTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveSubTransaction;
export declare function SaveSubTransactionToJSON(value?: SaveSubTransaction | null): any;
