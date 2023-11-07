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
 * @interface Category
 */
export interface Category {
    /**
     *
     * @type {string}
     * @memberof Category
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    category_group_id: string;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    category_group_name?: string;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    name: string;
    /**
     * Whether or not the category is hidden
     * @type {boolean}
     * @memberof Category
     */
    hidden: boolean;
    /**
     * DEPRECATED: No longer used.  Value will always be null.
     * @type {string}
     * @memberof Category
     */
    original_category_group_id?: string | null;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    note?: string | null;
    /**
     * Budgeted amount in milliunits format
     * @type {number}
     * @memberof Category
     */
    budgeted: number;
    /**
     * Activity amount in milliunits format
     * @type {number}
     * @memberof Category
     */
    activity: number;
    /**
     * Balance in milliunits format
     * @type {number}
     * @memberof Category
     */
    balance: number;
    /**
     * The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending')
     * @type {string}
     * @memberof Category
     */
    goal_type?: CategoryGoalTypeEnum;
    /**
     * A day offset modifier for the goal's due date. When goal_cadence is 2 (Weekly), this value specifies which day of the week the goal is due (0 = Sunday, 6 = Saturday). Otherwise, this value specifies which day of the month the goal is due (1 = 1st, 31 = 31st, null = Last day of Month).
     * @type {number}
     * @memberof Category
     */
    goal_day?: number | null;
    /**
     * The goal cadence. Value in range 0-14. There are two subsets of these values which behave differently. For values 0, 1, 2, and 13, the goal's due date repeats every goal_cadence * goal_cadence_frequency, where 0 = None, 1 = Monthly, 2 = Weekly, and 13 = Yearly. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month. For values 3-12 and 14, goal_cadence_frequency is ignored and the goal's due date repeats every goal_cadence, where 3 = Every 2 Months, 4 = Every 3 Months, ..., 12 = Every 11 Months, and 14 = Every 2 Years.
     * @type {number}
     * @memberof Category
     */
    goal_cadence?: number | null;
    /**
     * The goal cadence frequency. When goal_cadence is 0, 1, 2, or 13, a goal's due date repeats every goal_cadence * goal_cadence_frequency. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month.  When goal_cadence is 3-12 or 14, goal_cadence_frequency is ignored.
     * @type {number}
     * @memberof Category
     */
    goal_cadence_frequency?: number | null;
    /**
     * The month a goal was created
     * @type {string}
     * @memberof Category
     */
    goal_creation_month?: string | null;
    /**
     * The goal target amount in milliunits
     * @type {number}
     * @memberof Category
     */
    goal_target?: number | null;
    /**
     * The original target month for the goal to be completed.  Only some goal types specify this date.
     * @type {string}
     * @memberof Category
     */
    goal_target_month?: string | null;
    /**
     * The percentage completion of the goal
     * @type {number}
     * @memberof Category
     */
    goal_percentage_complete?: number | null;
    /**
     * The number of months, including the current month, left in the current goal period.
     * @type {number}
     * @memberof Category
     */
    goal_months_to_budget?: number | null;
    /**
     * The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period. This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month.
     * @type {number}
     * @memberof Category
     */
    goal_under_funded?: number | null;
    /**
     * The total amount funded towards the goal within the current goal period.
     * @type {number}
     * @memberof Category
     */
    goal_overall_funded?: number | null;
    /**
     * The amount of funding still needed to complete the goal within the current goal period.
     * @type {number}
     * @memberof Category
     */
    goal_overall_left?: number | null;
    /**
     * Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.
     * @type {boolean}
     * @memberof Category
     */
    deleted: boolean;
}
/**
 * @export
 */
export declare const CategoryGoalTypeEnum: {
    readonly Tb: "TB";
    readonly Tbd: "TBD";
    readonly Mf: "MF";
    readonly Need: "NEED";
    readonly Debt: "DEBT";
};
export declare type CategoryGoalTypeEnum = typeof CategoryGoalTypeEnum[keyof typeof CategoryGoalTypeEnum];
/**
 * Check if a given object implements the Category interface.
 */
export declare function instanceOfCategory(value: object): boolean;
export declare function CategoryFromJSON(json: any): Category;
export declare function CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Category;
export declare function CategoryToJSON(value?: Category | null): any;
