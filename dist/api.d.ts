/// <reference path="../src/custom.d.ts" />
import { Configuration } from "./configuration";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface Account
 */
export interface Account {
    /**
     *
     * @type {string}
     * @memberof Account
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    date_format: string;
    /**
     * Whether this account is on budget or not
     * @type {boolean}
     * @memberof Account
     */
    on_budget: boolean;
    /**
     * Whether this account is closed or not
     * @type {boolean}
     * @memberof Account
     */
    closed: boolean;
    /**
     *
     * @type {string}
     * @memberof Account
     */
    note: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof Account
     */
    balance: number;
}
/**
 *
 * @export
 * @interface AccountWrapper
 */
export interface AccountWrapper {
    /**
     *
     * @type {Account}
     * @memberof AccountWrapper
     */
    account: Account;
}
/**
 *
 * @export
 * @interface AccountsWrapper
 */
export interface AccountsWrapper {
    /**
     *
     * @type {Array&lt;Account&gt;}
     * @memberof AccountsWrapper
     */
    accounts: Array<Account>;
}
/**
 *
 * @export
 * @interface BudgetDetailWrapper
 */
export interface BudgetDetailWrapper {
    /**
     *
     * @type {BudgetDetail}
     * @memberof BudgetDetailWrapper
     */
    budget: BudgetDetail;
}
/**
 *
 * @export
 * @interface BudgetSummary
 */
export interface BudgetSummary {
    /**
     *
     * @type {string}
     * @memberof BudgetSummary
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof BudgetSummary
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof BudgetSummary
     */
    last_accessed_on: string;
    /**
     *
     * @type {string}
     * @memberof BudgetSummary
     */
    date_format: string;
    /**
     *
     * @type {string}
     * @memberof BudgetSummary
     */
    currency_format: string;
}
/**
 *
 * @export
 * @interface BudgetSummaryWrapper
 */
export interface BudgetSummaryWrapper {
    /**
     *
     * @type {Array&lt;BudgetSummary&gt;}
     * @memberof BudgetSummaryWrapper
     */
    budgets: Array<BudgetSummary>;
}
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
    name: string;
    /**
     * Whether or not the category is hidden
     * @type {boolean}
     * @memberof Category
     */
    hidden: boolean;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    note: string;
    /**
     * Budgeted amount in current month in millicents format
     * @type {number}
     * @memberof Category
     */
    budgeted: number;
    /**
     * Activity amount in current month in millicents format
     * @type {number}
     * @memberof Category
     */
    activity: number;
    /**
     * Balance in current month in millicents format
     * @type {number}
     * @memberof Category
     */
    balance: number;
}
/**
 *
 * @export
 * @interface CategoryGroup
 */
export interface CategoryGroup {
    /**
     *
     * @type {string}
     * @memberof CategoryGroup
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof CategoryGroup
     */
    name: string;
    /**
     * Whether or not the category group is hidden
     * @type {boolean}
     * @memberof CategoryGroup
     */
    hidden: boolean;
    /**
     * Category group categories
     * @type {Array&lt;Category&gt;}
     * @memberof CategoryGroup
     */
    categories: Array<Category>;
}
/**
 *
 * @export
 * @interface CategoryGroupsWrapper
 */
export interface CategoryGroupsWrapper {
    /**
     *
     * @type {Array&lt;CategoryGroup&gt;}
     * @memberof CategoryGroupsWrapper
     */
    category_groups: Array<CategoryGroup>;
}
/**
 *
 * @export
 * @interface CategoryWrapper
 */
export interface CategoryWrapper {
    /**
     *
     * @type {Category}
     * @memberof CategoryWrapper
     */
    category: Category;
}
/**
 *
 * @export
 * @interface MonthDetailWrapper
 */
export interface MonthDetailWrapper {
    /**
     *
     * @type {MonthDetail}
     * @memberof MonthDetailWrapper
     */
    month: MonthDetail;
}
/**
 *
 * @export
 * @interface MonthSummariesWrapper
 */
export interface MonthSummariesWrapper {
    /**
     *
     * @type {Array&lt;MonthSummary&gt;}
     * @memberof MonthSummariesWrapper
     */
    months: Array<MonthSummary>;
}
/**
 *
 * @export
 * @interface MonthSummary
 */
export interface MonthSummary {
    /**
     *
     * @type {string}
     * @memberof MonthSummary
     */
    month: string;
    /**
     *
     * @type {string}
     * @memberof MonthSummary
     */
    note: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof MonthSummary
     */
    to_be_budgeted: number;
    /**
     *
     * @type {number}
     * @memberof MonthSummary
     */
    age_of_money: number;
}
/**
 *
 * @export
 * @interface Payee
 */
export interface Payee {
    /**
     *
     * @type {string}
     * @memberof Payee
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Payee
     */
    name: string;
    /**
     * If a transfer payee, the account_id to which this payee transfers to
     * @type {string}
     * @memberof Payee
     */
    transfer_account_id: string;
}
/**
 *
 * @export
 * @interface PayeeLocation
 */
export interface PayeeLocation {
    /**
     *
     * @type {string}
     * @memberof PayeeLocation
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof PayeeLocation
     */
    payee_id: string;
    /**
     *
     * @type {number}
     * @memberof PayeeLocation
     */
    latitude: number;
    /**
     *
     * @type {number}
     * @memberof PayeeLocation
     */
    longitude: number;
}
/**
 *
 * @export
 * @interface PayeeLocationWrapper
 */
export interface PayeeLocationWrapper {
    /**
     *
     * @type {PayeeLocation}
     * @memberof PayeeLocationWrapper
     */
    payee_location: PayeeLocation;
}
/**
 *
 * @export
 * @interface PayeeLocationsWrapper
 */
export interface PayeeLocationsWrapper {
    /**
     *
     * @type {Array&lt;PayeeLocation&gt;}
     * @memberof PayeeLocationsWrapper
     */
    payee_locations: Array<PayeeLocation>;
}
/**
 *
 * @export
 * @interface PayeeWrapper
 */
export interface PayeeWrapper {
    /**
     *
     * @type {Payee}
     * @memberof PayeeWrapper
     */
    payee: Payee;
}
/**
 *
 * @export
 * @interface PayeesWrapper
 */
export interface PayeesWrapper {
    /**
     *
     * @type {Array&lt;Payee&gt;}
     * @memberof PayeesWrapper
     */
    payees: Array<Payee>;
}
/**
 *
 * @export
 * @interface ResponseError
 */
export interface ResponseError {
    /**
     *
     * @type {number}
     * @memberof ResponseError
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof ResponseError
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ResponseError
     */
    description: string;
}
/**
 *
 * @export
 * @interface ResponseWrapper
 */
export interface ResponseWrapper {
    /**
     *
     * @type {ResponseError}
     * @memberof ResponseWrapper
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof ResponseWrapper
     */
    server_knowledge?: number;
}
/**
 *
 * @export
 * @interface ScheduledSubTransaction
 */
export interface ScheduledSubTransaction {
    /**
     *
     * @type {string}
     * @memberof ScheduledSubTransaction
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledSubTransaction
     */
    scheduled_transaction_id: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof ScheduledSubTransaction
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof ScheduledSubTransaction
     */
    memo: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledSubTransaction
     */
    payee_id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledSubTransaction
     */
    category_id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledSubTransaction
     */
    transfer_account_id: string;
}
/**
 *
 * @export
 * @interface ScheduledTransactionDetailWrapper
 */
export interface ScheduledTransactionDetailWrapper {
    /**
     *
     * @type {ScheduledTransactionDetail}
     * @memberof ScheduledTransactionDetailWrapper
     */
    scheduled_transaction: ScheduledTransactionDetail;
}
/**
 *
 * @export
 * @interface ScheduledTransactionSummariesWrapper
 */
export interface ScheduledTransactionSummariesWrapper {
    /**
     *
     * @type {Array&lt;ScheduledTransactionSummary&gt;}
     * @memberof ScheduledTransactionSummariesWrapper
     */
    scheduled_transactions: Array<ScheduledTransactionSummary>;
}
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
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    date: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    frequency: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof ScheduledTransactionSummary
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    memo: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    flag: string;
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
    payee_id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    category_id: string;
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to.
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    transfer_account_id: string;
}
/**
 *
 * @export
 * @interface SubTransaction
 */
export interface SubTransaction {
    /**
     *
     * @type {string}
     * @memberof SubTransaction
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SubTransaction
     */
    transaction_id: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof SubTransaction
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof SubTransaction
     */
    memo: string;
    /**
     *
     * @type {string}
     * @memberof SubTransaction
     */
    payee_id: string;
    /**
     *
     * @type {string}
     * @memberof SubTransaction
     */
    category_id: string;
    /**
     * If a transfer, the account_id which the subtransaction transfers to.
     * @type {string}
     * @memberof SubTransaction
     */
    transfer_account_id: string;
}
/**
 *
 * @export
 * @interface TransactionDetailWrapper
 */
export interface TransactionDetailWrapper {
    /**
     *
     * @type {TransactionDetail}
     * @memberof TransactionDetailWrapper
     */
    transaction: TransactionDetail;
}
/**
 *
 * @export
 * @interface TransactionSummariesWrapper
 */
export interface TransactionSummariesWrapper {
    /**
     *
     * @type {Array&lt;TransactionSummary&gt;}
     * @memberof TransactionSummariesWrapper
     */
    transactions: Array<TransactionSummary>;
}
/**
 *
 * @export
 * @interface TransactionSummary
 */
export interface TransactionSummary {
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    date: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof TransactionSummary
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    memo: string;
    /**
     * The cleared status of the transaction
     * @type {string}
     * @memberof TransactionSummary
     */
    cleared: string;
    /**
     * Whether or not the transaction is approved
     * @type {boolean}
     * @memberof TransactionSummary
     */
    approved: boolean;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    flag: string;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    payee_id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    category_id: string;
    /**
     * If a transfer, the account_id which the transaction transfers to.
     * @type {string}
     * @memberof TransactionSummary
     */
    transfer_account_id: string;
}
/**
 *
 * @export
 * @interface AccountResponse
 */
export interface AccountResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof AccountResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof AccountResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {AccountWrapper}
     * @memberof AccountResponse
     */
    data?: AccountWrapper;
}
/**
 *
 * @export
 * @interface AccountsResponse
 */
export interface AccountsResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof AccountsResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof AccountsResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {AccountsWrapper}
     * @memberof AccountsResponse
     */
    data?: AccountsWrapper;
}
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
     *
     * @type {string}
     * @memberof BudgetDetail
     */
    last_accessed_on: string;
    /**
     *
     * @type {string}
     * @memberof BudgetDetail
     */
    date_format: string;
    /**
     *
     * @type {string}
     * @memberof BudgetDetail
     */
    currency_format: string;
    /**
     *
     * @type {Array&lt;Account&gt;}
     * @memberof BudgetDetail
     */
    accounts?: Array<Account>;
    /**
     *
     * @type {Array&lt;Payee&gt;}
     * @memberof BudgetDetail
     */
    payees?: Array<Payee>;
    /**
     *
     * @type {Array&lt;PayeeLocation&gt;}
     * @memberof BudgetDetail
     */
    payee_locations?: Array<PayeeLocation>;
    /**
     *
     * @type {Array&lt;CategoryGroup&gt;}
     * @memberof BudgetDetail
     */
    category_groups?: Array<CategoryGroup>;
    /**
     *
     * @type {Array&lt;Category&gt;}
     * @memberof BudgetDetail
     */
    categories?: Array<Category>;
    /**
     *
     * @type {Array&lt;MonthDetail&gt;}
     * @memberof BudgetDetail
     */
    months?: Array<MonthDetail>;
    /**
     *
     * @type {Array&lt;TransactionSummary&gt;}
     * @memberof BudgetDetail
     */
    transactions?: Array<TransactionSummary>;
    /**
     *
     * @type {Array&lt;SubTransaction&gt;}
     * @memberof BudgetDetail
     */
    subtransactions?: Array<SubTransaction>;
    /**
     *
     * @type {Array&lt;ScheduledTransactionSummary&gt;}
     * @memberof BudgetDetail
     */
    scheduled_transactions?: Array<ScheduledTransactionSummary>;
    /**
     *
     * @type {Array&lt;ScheduledSubTransaction&gt;}
     * @memberof BudgetDetail
     */
    scheduled_subtransactions?: Array<ScheduledSubTransaction>;
}
/**
 *
 * @export
 * @interface BudgetDetailResponse
 */
export interface BudgetDetailResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof BudgetDetailResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof BudgetDetailResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {BudgetDetailWrapper}
     * @memberof BudgetDetailResponse
     */
    data?: BudgetDetailWrapper;
}
/**
 *
 * @export
 * @interface BudgetSummaryResponse
 */
export interface BudgetSummaryResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof BudgetSummaryResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof BudgetSummaryResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {BudgetSummaryWrapper}
     * @memberof BudgetSummaryResponse
     */
    data?: BudgetSummaryWrapper;
}
/**
 *
 * @export
 * @interface CategoriesResponse
 */
export interface CategoriesResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof CategoriesResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof CategoriesResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {CategoryGroupsWrapper}
     * @memberof CategoriesResponse
     */
    data?: CategoryGroupsWrapper;
}
/**
 *
 * @export
 * @interface CategoryResponse
 */
export interface CategoryResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof CategoryResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof CategoryResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {CategoryWrapper}
     * @memberof CategoryResponse
     */
    data?: CategoryWrapper;
}
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
    note: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof MonthDetail
     */
    to_be_budgeted: number;
    /**
     *
     * @type {number}
     * @memberof MonthDetail
     */
    age_of_money: number;
    /**
     * The budget month categories
     * @type {Array&lt;Category&gt;}
     * @memberof MonthDetail
     */
    categories?: Array<Category>;
}
/**
 *
 * @export
 * @interface MonthDetailResponse
 */
export interface MonthDetailResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof MonthDetailResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof MonthDetailResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {MonthDetailWrapper}
     * @memberof MonthDetailResponse
     */
    data?: MonthDetailWrapper;
}
/**
 *
 * @export
 * @interface MonthSummariesResponse
 */
export interface MonthSummariesResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof MonthSummariesResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof MonthSummariesResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {MonthSummariesWrapper}
     * @memberof MonthSummariesResponse
     */
    data?: MonthSummariesWrapper;
}
/**
 *
 * @export
 * @interface PayeeLocationResponse
 */
export interface PayeeLocationResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof PayeeLocationResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof PayeeLocationResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {PayeeLocationWrapper}
     * @memberof PayeeLocationResponse
     */
    data?: PayeeLocationWrapper;
}
/**
 *
 * @export
 * @interface PayeeLocationsResponse
 */
export interface PayeeLocationsResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof PayeeLocationsResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof PayeeLocationsResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {PayeeLocationsWrapper}
     * @memberof PayeeLocationsResponse
     */
    data?: PayeeLocationsWrapper;
}
/**
 *
 * @export
 * @interface PayeeResponse
 */
export interface PayeeResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof PayeeResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof PayeeResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {PayeeWrapper}
     * @memberof PayeeResponse
     */
    data?: PayeeWrapper;
}
/**
 *
 * @export
 * @interface PayeesResponse
 */
export interface PayeesResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof PayeesResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof PayeesResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {PayeesWrapper}
     * @memberof PayeesResponse
     */
    data?: PayeesWrapper;
}
/**
 *
 * @export
 * @interface ScheduledTransactionDetail
 */
export interface ScheduledTransactionDetail {
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    date: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    frequency: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof ScheduledTransactionDetail
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    memo: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    flag: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    payee_id: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    category_id: string;
    /**
     * If a transfer, the account_id which the scheduled transaction transfers to.
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    transfer_account_id: string;
    /**
     * If a split scheduled transaction, the sub-transactions.
     * @type {Array&lt;ScheduledSubTransaction&gt;}
     * @memberof ScheduledTransactionDetail
     */
    subtransactions?: Array<ScheduledSubTransaction>;
}
/**
 *
 * @export
 * @interface ScheduledTransactionDetailResponse
 */
export interface ScheduledTransactionDetailResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof ScheduledTransactionDetailResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof ScheduledTransactionDetailResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {ScheduledTransactionDetailWrapper}
     * @memberof ScheduledTransactionDetailResponse
     */
    data?: ScheduledTransactionDetailWrapper;
}
/**
 *
 * @export
 * @interface ScheduledTransactionSummariesResponse
 */
export interface ScheduledTransactionSummariesResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof ScheduledTransactionSummariesResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof ScheduledTransactionSummariesResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {ScheduledTransactionSummariesWrapper}
     * @memberof ScheduledTransactionSummariesResponse
     */
    data?: ScheduledTransactionSummariesWrapper;
}
/**
 *
 * @export
 * @interface TransactionDetail
 */
export interface TransactionDetail {
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    date: string;
    /**
     * The current balance of the account in millicents format
     * @type {number}
     * @memberof TransactionDetail
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    memo: string;
    /**
     * The cleared status of the transaction
     * @type {string}
     * @memberof TransactionDetail
     */
    cleared: string;
    /**
     * Whether or not the transaction is approved
     * @type {boolean}
     * @memberof TransactionDetail
     */
    approved: boolean;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    flag: string;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    payee_id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    category_id: string;
    /**
     * If a transfer, the account_id which the transaction transfers to.
     * @type {string}
     * @memberof TransactionDetail
     */
    transfer_account_id: string;
    /**
     * If a split transaction, the sub-transactions.
     * @type {Array&lt;SubTransaction&gt;}
     * @memberof TransactionDetail
     */
    subtransactions?: Array<SubTransaction>;
}
/**
 *
 * @export
 * @interface TransactionDetailResponse
 */
export interface TransactionDetailResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof TransactionDetailResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof TransactionDetailResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {TransactionDetailWrapper}
     * @memberof TransactionDetailResponse
     */
    data?: TransactionDetailWrapper;
}
/**
 *
 * @export
 * @interface TransactionSummariesResponse
 */
export interface TransactionSummariesResponse {
    /**
     *
     * @type {ResponseError}
     * @memberof TransactionSummariesResponse
     */
    error?: ResponseError;
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof TransactionSummariesResponse
     */
    server_knowledge?: number;
    /**
     *
     * @type {TransactionSummariesWrapper}
     * @memberof TransactionSummariesResponse
     */
    data?: TransactionSummariesWrapper;
}
/**
 * AccountsApi - fetch parameter creator
 * @export
 */
export declare const AccountsApiFetchParamCreator: (configuration?: Configuration) => {
    getAccountById(budgetId: string, accountId: string, options?: any): FetchArgs;
    getAccounts(budgetId: string, options?: any): FetchArgs;
};
/**
 * AccountsApi - functional programming interface
 * @export
 */
export declare const AccountsApiFp: (configuration?: Configuration) => {
    getAccountById(budgetId: string, accountId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AccountResponse>;
    getAccounts(budgetId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AccountsResponse>;
};
/**
 * AccountsApi - factory interface
 * @export
 */
export declare const AccountsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getAccountById(budgetId: string, accountId: string, options?: any): Promise<AccountResponse>;
    getAccounts(budgetId: string, options?: any): Promise<AccountsResponse>;
};
/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export declare class AccountsApi extends BaseAPI {
    /**
     * Find a single account by ID
     * @summary Single account
     * @param {} budgetId ID of budget
     * @param {} accountId ID of account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getAccountById(budgetId: string, accountId: string, options?: any): Promise<AccountResponse>;
    /**
     * List all accounts
     * @summary List accounts
     * @param {} budgetId ID of budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getAccounts(budgetId: string, options?: any): Promise<AccountsResponse>;
}
/**
 * BudgetsApi - fetch parameter creator
 * @export
 */
export declare const BudgetsApiFetchParamCreator: (configuration?: Configuration) => {
    getBudgetContents(budgetId: string, lastKnowlegeOfServer?: number, options?: any): FetchArgs;
    getBudgets(options?: any): FetchArgs;
};
/**
 * BudgetsApi - functional programming interface
 * @export
 */
export declare const BudgetsApiFp: (configuration?: Configuration) => {
    getBudgetContents(budgetId: string, lastKnowlegeOfServer?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<BudgetDetailResponse>;
    getBudgets(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<BudgetSummaryResponse>;
};
/**
 * BudgetsApi - factory interface
 * @export
 */
export declare const BudgetsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getBudgetContents(budgetId: string, lastKnowlegeOfServer?: number, options?: any): Promise<BudgetDetailResponse>;
    getBudgets(options?: any): Promise<BudgetSummaryResponse>;
};
/**
 * BudgetsApi - object-oriented interface
 * @export
 * @class BudgetsApi
 * @extends {BaseAPI}
 */
export declare class BudgetsApi extends BaseAPI {
    /**
     * Single budget detail
     * @summary Single budget
     * @param {} budgetId ID of budget
     * @param {} [lastKnowlegeOfServer] Starting server knowledge.  If provided, only entities that have changed since last_knowlege_of_server will be included.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    getBudgetContents(budgetId: string, lastKnowlegeOfServer?: number, options?: any): Promise<BudgetDetailResponse>;
    /**
     * List all budgets
     * @summary List budgets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    getBudgets(options?: any): Promise<BudgetSummaryResponse>;
}
/**
 * CategoriesApi - fetch parameter creator
 * @export
 */
export declare const CategoriesApiFetchParamCreator: (configuration?: Configuration) => {
    getCategories(budgetId: string, options?: any): FetchArgs;
    getCategoryById(budgetId: string, categoryId: string, options?: any): FetchArgs;
};
/**
 * CategoriesApi - functional programming interface
 * @export
 */
export declare const CategoriesApiFp: (configuration?: Configuration) => {
    getCategories(budgetId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CategoriesResponse>;
    getCategoryById(budgetId: string, categoryId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<CategoryResponse>;
};
/**
 * CategoriesApi - factory interface
 * @export
 */
export declare const CategoriesApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getCategories(budgetId: string, options?: any): Promise<CategoriesResponse>;
    getCategoryById(budgetId: string, categoryId: string, options?: any): Promise<CategoryResponse>;
};
/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export declare class CategoriesApi extends BaseAPI {
    /**
     * List all category groups
     * @summary List category groups
     * @param {} budgetId ID of budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategories(budgetId: string, options?: any): Promise<CategoriesResponse>;
    /**
     * Find a category by ID
     * @summary Single category
     * @param {} budgetId ID of budget
     * @param {} categoryId ID of category
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategoryById(budgetId: string, categoryId: string, options?: any): Promise<CategoryResponse>;
}
/**
 * MonthsApi - fetch parameter creator
 * @export
 */
export declare const MonthsApiFetchParamCreator: (configuration?: Configuration) => {
    getBudgetMonthById(budgetId: string, month: string, options?: any): FetchArgs;
    getBudgetMonths(budgetId: string, options?: any): FetchArgs;
};
/**
 * MonthsApi - functional programming interface
 * @export
 */
export declare const MonthsApiFp: (configuration?: Configuration) => {
    getBudgetMonthById(budgetId: string, month: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MonthDetailResponse>;
    getBudgetMonths(budgetId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MonthSummariesResponse>;
};
/**
 * MonthsApi - factory interface
 * @export
 */
export declare const MonthsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getBudgetMonthById(budgetId: string, month: string, options?: any): Promise<MonthDetailResponse>;
    getBudgetMonths(budgetId: string, options?: any): Promise<MonthSummariesResponse>;
};
/**
 * MonthsApi - object-oriented interface
 * @export
 * @class MonthsApi
 * @extends {BaseAPI}
 */
export declare class MonthsApi extends BaseAPI {
    /**
     * Find a single budget month
     * @summary Single budget month
     * @param {} budgetId ID of budget
     * @param {} month The budget month.  \&quot;current\&quot; can also be used to specify the current calendar month (UTC).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    getBudgetMonthById(budgetId: string, month: string, options?: any): Promise<MonthDetailResponse>;
    /**
     * List all budget months
     * @summary List budget months
     * @param {} budgetId ID of budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    getBudgetMonths(budgetId: string, options?: any): Promise<MonthSummariesResponse>;
}
/**
 * PayeeLocationsApi - fetch parameter creator
 * @export
 */
export declare const PayeeLocationsApiFetchParamCreator: (configuration?: Configuration) => {
    getPayeeLocationById(budgetId: string, payeeLocationId: string, options?: any): FetchArgs;
    getPayeeLocations(budgetId: string, options?: any): FetchArgs;
    getPayeeLocationsByPayee(budgetId: string, payeeId: string, options?: any): FetchArgs;
};
/**
 * PayeeLocationsApi - functional programming interface
 * @export
 */
export declare const PayeeLocationsApiFp: (configuration?: Configuration) => {
    getPayeeLocationById(budgetId: string, payeeLocationId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PayeeLocationResponse>;
    getPayeeLocations(budgetId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PayeeLocationsResponse>;
    getPayeeLocationsByPayee(budgetId: string, payeeId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PayeeLocationsResponse>;
};
/**
 * PayeeLocationsApi - factory interface
 * @export
 */
export declare const PayeeLocationsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getPayeeLocationById(budgetId: string, payeeLocationId: string, options?: any): Promise<PayeeLocationResponse>;
    getPayeeLocations(budgetId: string, options?: any): Promise<PayeeLocationsResponse>;
    getPayeeLocationsByPayee(budgetId: string, payeeId: string, options?: any): Promise<PayeeLocationsResponse>;
};
/**
 * PayeeLocationsApi - object-oriented interface
 * @export
 * @class PayeeLocationsApi
 * @extends {BaseAPI}
 */
export declare class PayeeLocationsApi extends BaseAPI {
    /**
     * Find a single payee location by ID
     * @summary Single payee location
     * @param {} budgetId ID of budget
     * @param {} payeeLocationId ID of payee location
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocationById(budgetId: string, payeeLocationId: string, options?: any): Promise<PayeeLocationResponse>;
    /**
     * List all payee locations
     * @summary List payee locations
     * @param {} budgetId ID of budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocations(budgetId: string, options?: any): Promise<PayeeLocationsResponse>;
    /**
     * List payee locations for a specified payee
     * @summary List locations for a payee
     * @param {} budgetId ID of budget
     * @param {} payeeId ID of payee
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocationsByPayee(budgetId: string, payeeId: string, options?: any): Promise<PayeeLocationsResponse>;
}
/**
 * PayeesApi - fetch parameter creator
 * @export
 */
export declare const PayeesApiFetchParamCreator: (configuration?: Configuration) => {
    getPayeeById(budgetId: string, payeeId: string, options?: any): FetchArgs;
    getPayees(budgetId: string, options?: any): FetchArgs;
};
/**
 * PayeesApi - functional programming interface
 * @export
 */
export declare const PayeesApiFp: (configuration?: Configuration) => {
    getPayeeById(budgetId: string, payeeId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PayeeResponse>;
    getPayees(budgetId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<PayeesResponse>;
};
/**
 * PayeesApi - factory interface
 * @export
 */
export declare const PayeesApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getPayeeById(budgetId: string, payeeId: string, options?: any): Promise<PayeeResponse>;
    getPayees(budgetId: string, options?: any): Promise<PayeesResponse>;
};
/**
 * PayeesApi - object-oriented interface
 * @export
 * @class PayeesApi
 * @extends {BaseAPI}
 */
export declare class PayeesApi extends BaseAPI {
    /**
     * Find a single payee by ID
     * @summary Single payee
     * @param {} budgetId ID of budget
     * @param {} payeeId ID of payee
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    getPayeeById(budgetId: string, payeeId: string, options?: any): Promise<PayeeResponse>;
    /**
     * List all payees
     * @summary List payees
     * @param {} budgetId ID of budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    getPayees(budgetId: string, options?: any): Promise<PayeesResponse>;
}
/**
 * ScheduledTransactionsApi - fetch parameter creator
 * @export
 */
export declare const ScheduledTransactionsApiFetchParamCreator: (configuration?: Configuration) => {
    getScheduledTransactionById(budgetId: string, scheduledTransactionId: string, options?: any): FetchArgs;
    getScheduledTransactions(budgetId: string, options?: any): FetchArgs;
};
/**
 * ScheduledTransactionsApi - functional programming interface
 * @export
 */
export declare const ScheduledTransactionsApiFp: (configuration?: Configuration) => {
    getScheduledTransactionById(budgetId: string, scheduledTransactionId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ScheduledTransactionDetailResponse>;
    getScheduledTransactions(budgetId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ScheduledTransactionSummariesResponse>;
};
/**
 * ScheduledTransactionsApi - factory interface
 * @export
 */
export declare const ScheduledTransactionsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getScheduledTransactionById(budgetId: string, scheduledTransactionId: string, options?: any): Promise<ScheduledTransactionDetailResponse>;
    getScheduledTransactions(budgetId: string, options?: any): Promise<ScheduledTransactionSummariesResponse>;
};
/**
 * ScheduledTransactionsApi - object-oriented interface
 * @export
 * @class ScheduledTransactionsApi
 * @extends {BaseAPI}
 */
export declare class ScheduledTransactionsApi extends BaseAPI {
    /**
     * Find a single scheduled transaction by ID
     * @summary Single scheduled transaction
     * @param {} budgetId ID of budget
     * @param {} scheduledTransactionId ID of scheduled transaction
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    getScheduledTransactionById(budgetId: string, scheduledTransactionId: string, options?: any): Promise<ScheduledTransactionDetailResponse>;
    /**
     * List all scheduled transactions
     * @summary List scheduled transactions
     * @param {} budgetId ID of budget
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    getScheduledTransactions(budgetId: string, options?: any): Promise<ScheduledTransactionSummariesResponse>;
}
/**
 * TransactionsApi - fetch parameter creator
 * @export
 */
export declare const TransactionsApiFetchParamCreator: (configuration?: Configuration) => {
    getTransactions(budgetId: string, sinceDate?: string, options?: any): FetchArgs;
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, options?: any): FetchArgs;
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, options?: any): FetchArgs;
    getTransactionsById(budgetId: string, transactionId: string, options?: any): FetchArgs;
};
/**
 * TransactionsApi - functional programming interface
 * @export
 */
export declare const TransactionsApiFp: (configuration?: Configuration) => {
    getTransactions(budgetId: string, sinceDate?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TransactionSummariesResponse>;
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TransactionSummariesResponse>;
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TransactionSummariesResponse>;
    getTransactionsById(budgetId: string, transactionId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TransactionDetailResponse>;
};
/**
 * TransactionsApi - factory interface
 * @export
 */
export declare const TransactionsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    getTransactions(budgetId: string, sinceDate?: string, options?: any): Promise<TransactionSummariesResponse>;
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, options?: any): Promise<TransactionSummariesResponse>;
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, options?: any): Promise<TransactionSummariesResponse>;
    getTransactionsById(budgetId: string, transactionId: string, options?: any): Promise<TransactionDetailResponse>;
};
/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export declare class TransactionsApi extends BaseAPI {
    /**
     * List all transactions
     * @summary List transactions
     * @param {} budgetId ID of budget
     * @param {} [sinceDate] Only return transactions on or after this date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactions(budgetId: string, sinceDate?: string, options?: any): Promise<TransactionSummariesResponse>;
    /**
     * List transactions for an account
     * @summary List account transactions
     * @param {} budgetId ID of budget
     * @param {} accountId ID of account
     * @param {} [sinceDate] Only return transactions on or after this date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, options?: any): Promise<TransactionSummariesResponse>;
    /**
     * List transactions for a category
     * @summary List category transactions
     * @param {} budgetId ID of budget
     * @param {} categoryId ID of category
     * @param {} [sinceDate] Only return transactions on or after this date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, options?: any): Promise<TransactionSummariesResponse>;
    /**
     * Find a single transaction by ID
     * @summary Single transaction
     * @param {} budgetId ID of budget
     * @param {} transactionId ID of transaction
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsById(budgetId: string, transactionId: string, options?: any): Promise<TransactionDetailResponse>;
}
