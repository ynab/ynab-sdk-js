/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { TransactionFlagColor } from './TransactionFlagColor';
import type { TransactionClearedStatus } from './TransactionClearedStatus';
import type { SaveSubTransaction } from './SaveSubTransaction';
/**
 *
 * @export
 * @interface SaveTransactionWithOptionalFields
 */
export interface SaveTransactionWithOptionalFields {
    /**
     *
     * @type {string}
     * @memberof SaveTransactionWithOptionalFields
     */
    account_id?: string;
    /**
     * The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.
     * @type {string}
     * @memberof SaveTransactionWithOptionalFields
     */
    date?: string;
    /**
     * The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.
     * @type {number}
     * @memberof SaveTransactionWithOptionalFields
     */
    amount?: number;
    /**
     * The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `transfer_payee_id` on the account resource.
     * @type {string}
     * @memberof SaveTransactionWithOptionalFields
     */
    payee_id?: string | null;
    /**
     * The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.
     * @type {string}
     * @memberof SaveTransactionWithOptionalFields
     */
    payee_name?: string | null;
    /**
     * The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.
     * @type {string}
     * @memberof SaveTransactionWithOptionalFields
     */
    category_id?: string | null;
    /**
     *
     * @type {string}
     * @memberof SaveTransactionWithOptionalFields
     */
    memo?: string | null;
    /**
     *
     * @type {TransactionClearedStatus}
     * @memberof SaveTransactionWithOptionalFields
     */
    cleared?: TransactionClearedStatus;
    /**
     * Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.
     * @type {boolean}
     * @memberof SaveTransactionWithOptionalFields
     */
    approved?: boolean;
    /**
     *
     * @type {TransactionFlagColor}
     * @memberof SaveTransactionWithOptionalFields
     */
    flag_color?: TransactionFlagColor | null;
    /**
     * An array of subtransactions to configure a transaction as a split. Updating `subtransactions` on an existing split transaction is not supported.
     * @type {Array<SaveSubTransaction>}
     * @memberof SaveTransactionWithOptionalFields
     */
    subtransactions?: Array<SaveSubTransaction>;
}
/**
 * Check if a given object implements the SaveTransactionWithOptionalFields interface.
 */
export declare function instanceOfSaveTransactionWithOptionalFields(value: object): value is SaveTransactionWithOptionalFields;
export declare function SaveTransactionWithOptionalFieldsFromJSON(json: any): SaveTransactionWithOptionalFields;
export declare function SaveTransactionWithOptionalFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveTransactionWithOptionalFields;
export declare function SaveTransactionWithOptionalFieldsToJSON(json: any): SaveTransactionWithOptionalFields;
export declare function SaveTransactionWithOptionalFieldsToJSONTyped(value?: SaveTransactionWithOptionalFields | null, ignoreDiscriminator?: boolean): any;
