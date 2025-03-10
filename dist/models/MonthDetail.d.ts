/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
import type { Category } from './Category';
/**
 *
 * @export
 * @interface MonthDetail
 */
export interface MonthDetail {
    /**
     *
     * @type {string}
     * @memberof MonthDetail
     */
    month: string;
    /**
     *
     * @type {string}
     * @memberof MonthDetail
     */
    note?: string | null;
    /**
     * The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month
     * @type {number}
     * @memberof MonthDetail
     */
    income: number;
    /**
     * The total amount budgeted in the month
     * @type {number}
     * @memberof MonthDetail
     */
    budgeted: number;
    /**
     * The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'
     * @type {number}
     * @memberof MonthDetail
     */
    activity: number;
    /**
     * The available amount for 'Ready to Assign'
     * @type {number}
     * @memberof MonthDetail
     */
    to_be_budgeted: number;
    /**
     * The Age of Money as of the month
     * @type {number}
     * @memberof MonthDetail
     */
    age_of_money?: number | null;
    /**
     * Whether or not the month has been deleted.  Deleted months will only be included in delta requests.
     * @type {boolean}
     * @memberof MonthDetail
     */
    deleted: boolean;
    /**
     * The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.
     * @type {Array<Category>}
     * @memberof MonthDetail
     */
    categories: Array<Category>;
}
/**
 * Check if a given object implements the MonthDetail interface.
 */
export declare function instanceOfMonthDetail(value: object): value is MonthDetail;
export declare function MonthDetailFromJSON(json: any): MonthDetail;
export declare function MonthDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonthDetail;
export declare function MonthDetailToJSON(json: any): MonthDetail;
export declare function MonthDetailToJSONTyped(value?: MonthDetail | null, ignoreDiscriminator?: boolean): any;
