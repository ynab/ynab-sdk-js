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
import type { PayeeLocation } from './PayeeLocation';
import type { Account } from './Account';
import type { ScheduledTransactionSummary } from './ScheduledTransactionSummary';
import type { Category } from './Category';
import type { CurrencyFormat } from './CurrencyFormat';
import type { DateFormat } from './DateFormat';
import type { SubTransaction } from './SubTransaction';
import type { MonthDetail } from './MonthDetail';
import type { Payee } from './Payee';
import type { ScheduledSubTransaction } from './ScheduledSubTransaction';
import type { TransactionSummary } from './TransactionSummary';
import type { CategoryGroup } from './CategoryGroup';
/**
 *
 * @export
 * @interface BudgetDetail
 */
export interface BudgetDetail {
    /**
     *
     * @type {string}
     * @memberof BudgetDetail
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof BudgetDetail
     */
    name: string;
    /**
     * The last time any changes were made to the budget from either a web or mobile client
     * @type {string}
     * @memberof BudgetDetail
     */
    last_modified_on?: string;
    /**
     * The earliest budget month
     * @type {string}
     * @memberof BudgetDetail
     */
    first_month?: string;
    /**
     * The latest budget month
     * @type {string}
     * @memberof BudgetDetail
     */
    last_month?: string;
    /**
     *
     * @type {DateFormat}
     * @memberof BudgetDetail
     */
    date_format?: DateFormat;
    /**
     *
     * @type {CurrencyFormat}
     * @memberof BudgetDetail
     */
    currency_format?: CurrencyFormat;
    /**
     *
     * @type {Array<Account>}
     * @memberof BudgetDetail
     */
    accounts?: Array<Account>;
    /**
     *
     * @type {Array<Payee>}
     * @memberof BudgetDetail
     */
    payees?: Array<Payee>;
    /**
     *
     * @type {Array<PayeeLocation>}
     * @memberof BudgetDetail
     */
    payee_locations?: Array<PayeeLocation>;
    /**
     *
     * @type {Array<CategoryGroup>}
     * @memberof BudgetDetail
     */
    category_groups?: Array<CategoryGroup>;
    /**
     *
     * @type {Array<Category>}
     * @memberof BudgetDetail
     */
    categories?: Array<Category>;
    /**
     *
     * @type {Array<MonthDetail>}
     * @memberof BudgetDetail
     */
    months?: Array<MonthDetail>;
    /**
     *
     * @type {Array<TransactionSummary>}
     * @memberof BudgetDetail
     */
    transactions?: Array<TransactionSummary>;
    /**
     *
     * @type {Array<SubTransaction>}
     * @memberof BudgetDetail
     */
    subtransactions?: Array<SubTransaction>;
    /**
     *
     * @type {Array<ScheduledTransactionSummary>}
     * @memberof BudgetDetail
     */
    scheduled_transactions?: Array<ScheduledTransactionSummary>;
    /**
     *
     * @type {Array<ScheduledSubTransaction>}
     * @memberof BudgetDetail
     */
    scheduled_subtransactions?: Array<ScheduledSubTransaction>;
}
/**
 * Check if a given object implements the BudgetDetail interface.
 */
export declare function instanceOfBudgetDetail(value: object): value is BudgetDetail;
export declare function BudgetDetailFromJSON(json: any): BudgetDetail;
export declare function BudgetDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetDetail;
export declare function BudgetDetailToJSON(value?: BudgetDetail | null): any;
