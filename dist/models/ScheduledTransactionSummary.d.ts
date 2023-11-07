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
import type { TransactionFlagColor } from './TransactionFlagColor';
/**
 *
 * @export
 * @interface ScheduledTransactionSummary
 */
export interface ScheduledTransactionSummary {
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    id: string;
    /**
     * The first date for which the Scheduled Transaction was scheduled.
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    date_first: string;
    /**
     * The next date for which the Scheduled Transaction is scheduled.
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    date_next: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    frequency: ScheduledTransactionSummaryFrequencyEnum;
    /**
     * The scheduled transaction amount in milliunits format
     * @type {number}
     * @memberof ScheduledTransactionSummary
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    memo?: string | null;
    /**
     *
     * @type {TransactionFlagColor}
     * @memberof ScheduledTransactionSummary
     */
    flag_color?: TransactionFlagColor | null;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    payee_id?: string | null;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    category_id?: string | null;
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    transfer_account_id?: string | null;
    /**
     * Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.
     * @type {boolean}
     * @memberof ScheduledTransactionSummary
     */
    deleted: boolean;
}
/**
 * @export
 */
export declare const ScheduledTransactionSummaryFrequencyEnum: {
    readonly Never: "never";
    readonly Daily: "daily";
    readonly Weekly: "weekly";
    readonly EveryOtherWeek: "everyOtherWeek";
    readonly TwiceAMonth: "twiceAMonth";
    readonly Every4Weeks: "every4Weeks";
    readonly Monthly: "monthly";
    readonly EveryOtherMonth: "everyOtherMonth";
    readonly Every3Months: "every3Months";
    readonly Every4Months: "every4Months";
    readonly TwiceAYear: "twiceAYear";
    readonly Yearly: "yearly";
    readonly EveryOtherYear: "everyOtherYear";
};
export type ScheduledTransactionSummaryFrequencyEnum = typeof ScheduledTransactionSummaryFrequencyEnum[keyof typeof ScheduledTransactionSummaryFrequencyEnum];
/**
 * Check if a given object implements the ScheduledTransactionSummary interface.
 */
export declare function instanceOfScheduledTransactionSummary(value: object): boolean;
export declare function ScheduledTransactionSummaryFromJSON(json: any): ScheduledTransactionSummary;
export declare function ScheduledTransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledTransactionSummary;
export declare function ScheduledTransactionSummaryToJSON(value?: ScheduledTransactionSummary | null): any;
