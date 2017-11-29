/// <reference path="../src/portable-fetch.d.ts" />
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
    protected configuration: Configuration;
    constructor(configuration?: Configuration);
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
 * @interface AccountResponse
 */
export interface AccountResponse {
    /**
     *
     * @type {AccountWrapper}
     * @memberof AccountResponse
     */
    data: AccountWrapper;
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
 * @interface AccountsResponse
 */
export interface AccountsResponse {
    /**
     *
     * @type {AccountsWrapper}
     * @memberof AccountsResponse
     */
    data: AccountsWrapper;
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
 * @interface BudgetDetailResponse
 */
export interface BudgetDetailResponse {
    /**
     *
     * @type {BudgetDetailWrapper}
     * @memberof BudgetDetailResponse
     */
    data: BudgetDetailWrapper;
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
    /**
     * The knowledge of the server
     * @type {number}
     * @memberof BudgetDetailWrapper
     */
    server_knowledge: number;
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
    last_accessed_on?: string;
    /**
     *
     * @type {DateFormat}
     * @memberof BudgetSummary
     */
    date_format?: DateFormat;
    /**
     *
     * @type {CurrencyFormat}
     * @memberof BudgetSummary
     */
    currency_format?: CurrencyFormat;
}
/**
 *
 * @export
 * @interface BudgetSummaryResponse
 */
export interface BudgetSummaryResponse {
    /**
     *
     * @type {BudgetSummaryWrapper}
     * @memberof BudgetSummaryResponse
     */
    data: BudgetSummaryWrapper;
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
 * @interface CategoriesResponse
 */
export interface CategoriesResponse {
    /**
     *
     * @type {CategoryGroupsWrapper}
     * @memberof CategoriesResponse
     */
    data: CategoryGroupsWrapper;
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
}
/**
 *
 * @export
 * @interface CategoryGroupsWrapper
 */
export interface CategoryGroupsWrapper {
    /**
     *
     * @type {Array&lt;CategoryGroupWithCategories&gt;}
     * @memberof CategoryGroupsWrapper
     */
    category_groups: Array<CategoryGroupWithCategories>;
}
/**
 *
 * @export
 * @interface CategoryResponse
 */
export interface CategoryResponse {
    /**
     *
     * @type {CategoryWrapper}
     * @memberof CategoryResponse
     */
    data: CategoryWrapper;
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
 * @interface CurrencyFormat
 */
export interface CurrencyFormat {
    /**
     *
     * @type {string}
     * @memberof CurrencyFormat
     */
    locale: string;
}
/**
 *
 * @export
 * @interface DateFormat
 */
export interface DateFormat {
    /**
     *
     * @type {string}
     * @memberof DateFormat
     */
    locale: string;
}
/**
 *
 * @export
 * @interface ErrorDetail
 */
export interface ErrorDetail {
    /**
     *
     * @type {string}
     * @memberof ErrorDetail
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ErrorDetail
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ErrorDetail
     */
    description: string;
}
/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     *
     * @type {ErrorDetail}
     * @memberof ErrorResponse
     */
    error: ErrorDetail;
}
/**
 *
 * @export
 * @interface MonthDetailResponse
 */
export interface MonthDetailResponse {
    /**
     *
     * @type {MonthDetailWrapper}
     * @memberof MonthDetailResponse
     */
    data: MonthDetailWrapper;
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
 * @interface MonthSummariesResponse
 */
export interface MonthSummariesResponse {
    /**
     *
     * @type {MonthSummariesWrapper}
     * @memberof MonthSummariesResponse
     */
    data: MonthSummariesWrapper;
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
     * @type {string}
     * @memberof PayeeLocation
     */
    latitude: string;
    /**
     *
     * @type {string}
     * @memberof PayeeLocation
     */
    longitude: string;
}
/**
 *
 * @export
 * @interface PayeeLocationResponse
 */
export interface PayeeLocationResponse {
    /**
     *
     * @type {PayeeLocationWrapper}
     * @memberof PayeeLocationResponse
     */
    data: PayeeLocationWrapper;
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
 * @interface PayeeLocationsResponse
 */
export interface PayeeLocationsResponse {
    /**
     *
     * @type {PayeeLocationsWrapper}
     * @memberof PayeeLocationsResponse
     */
    data: PayeeLocationsWrapper;
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
 * @interface PayeeResponse
 */
export interface PayeeResponse {
    /**
     *
     * @type {PayeeWrapper}
     * @memberof PayeeResponse
     */
    data: PayeeWrapper;
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
 * @interface PayeesResponse
 */
export interface PayeesResponse {
    /**
     *
     * @type {PayeesWrapper}
     * @memberof PayeesResponse
     */
    data: PayeesWrapper;
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
     * If a transfer, the account_id which the scheduled sub transaction transfers to
     * @type {string}
     * @memberof ScheduledSubTransaction
     */
    transfer_account_id: string;
}
/**
 *
 * @export
 * @interface ScheduledTransactionDetailResponse
 */
export interface ScheduledTransactionDetailResponse {
    /**
     *
     * @type {ScheduledTransactionDetailWrapper}
     * @memberof ScheduledTransactionDetailResponse
     */
    data: ScheduledTransactionDetailWrapper;
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
 * @interface ScheduledTransactionSummariesResponse
 */
export interface ScheduledTransactionSummariesResponse {
    /**
     *
     * @type {ScheduledTransactionSummariesWrapper}
     * @memberof ScheduledTransactionSummariesResponse
     */
    data: ScheduledTransactionSummariesWrapper;
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
     * If a transfer, the account_id which the scheduled transaction transfers to
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
     * If a transfer, the account_id which the subtransaction transfers to
     * @type {string}
     * @memberof SubTransaction
     */
    transfer_account_id: string;
}
/**
 *
 * @export
 * @interface TransactionDetailResponse
 */
export interface TransactionDetailResponse {
    /**
     *
     * @type {TransactionDetailWrapper}
     * @memberof TransactionDetailResponse
     */
    data: TransactionDetailWrapper;
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
 * @interface TransactionSummariesResponse
 */
export interface TransactionSummariesResponse {
    /**
     *
     * @type {TransactionSummariesWrapper}
     * @memberof TransactionSummariesResponse
     */
    data: TransactionSummariesWrapper;
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
     * Whether or not the transaction is approved
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
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    transfer_account_id: string;
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
    last_accessed_on?: string;
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
 * @interface CategoryGroupWithCategories
 */
export interface CategoryGroupWithCategories {
    /**
     *
     * @type {string}
     * @memberof CategoryGroupWithCategories
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof CategoryGroupWithCategories
     */
    name: string;
    /**
     * Whether or not the category group is hidden
     * @type {boolean}
     * @memberof CategoryGroupWithCategories
     */
    hidden: boolean;
    /**
     * Category group categories
     * @type {Array&lt;Category&gt;}
     * @memberof CategoryGroupWithCategories
     */
    categories: Array<Category>;
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
    categories: Array<Category>;
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
     * If a transfer, the account_id which the scheduled transaction transfers to
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    transfer_account_id: string;
    /**
     * If a split scheduled transaction, the sub-transactions.
     * @type {Array&lt;ScheduledSubTransaction&gt;}
     * @memberof ScheduledTransactionDetail
     */
    subtransactions: Array<ScheduledSubTransaction>;
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
     * Whether or not the transaction is approved
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
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    transfer_account_id: string;
    /**
     * If a split transaction, the sub-transactions.
     * @type {Array&lt;SubTransaction&gt;}
     * @memberof TransactionDetail
     */
    subtransactions: Array<SubTransaction>;
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
    getAccountById(budgetId: string, accountId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<AccountResponse>;
    getAccounts(budgetId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<AccountsResponse>;
};
/**
 * AccountsApi - factory interface
 * @export
 */
export declare const AccountsApiFactory: (configuration?: Configuration) => {
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
     * @param {string} budgetId - ID of budget
     * @param {string} accountId - ID of account
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getAccountById(budgetId: string, accountId: string, options?: any): Promise<AccountResponse>;
    /**
     * List all accounts
     * @summary List accounts
     * @param {string} budgetId - ID of budget
     * @param {*} [options] - Override http request options.
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
    getBudgetContents(budgetId: string, lastKnowledgeOfServer?: number, options?: any): FetchArgs;
    getBudgets(options?: any): FetchArgs;
};
/**
 * BudgetsApi - functional programming interface
 * @export
 */
export declare const BudgetsApiFp: (configuration?: Configuration) => {
    getBudgetContents(budgetId: string, lastKnowledgeOfServer?: number, options?: any): (fetchFunction?: FetchAPI) => Promise<BudgetDetailResponse>;
    getBudgets(options?: any): (fetchFunction?: FetchAPI) => Promise<BudgetSummaryResponse>;
};
/**
 * BudgetsApi - factory interface
 * @export
 */
export declare const BudgetsApiFactory: (configuration?: Configuration) => {
    getBudgetContents(budgetId: string, lastKnowledgeOfServer?: number, options?: any): Promise<BudgetDetailResponse>;
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
     * @param {string} budgetId - ID of budget
     * @param {number} [lastKnowledgeOfServer] - Starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    getBudgetContents(budgetId: string, lastKnowledgeOfServer?: number, options?: any): Promise<BudgetDetailResponse>;
    /**
     * List all budgets
     * @summary List budgets
     * @param {*} [options] - Override http request options.
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
    getCategories(budgetId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<CategoriesResponse>;
    getCategoryById(budgetId: string, categoryId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<CategoryResponse>;
};
/**
 * CategoriesApi - factory interface
 * @export
 */
export declare const CategoriesApiFactory: (configuration?: Configuration) => {
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
     * @param {string} budgetId - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategories(budgetId: string, options?: any): Promise<CategoriesResponse>;
    /**
     * Find a category by ID
     * @summary Single category
     * @param {string} budgetId - ID of budget
     * @param {string} categoryId - ID of category
     * @param {*} [options] - Override http request options.
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
    getBudgetMonth(budgetId: string, month: Date, options?: any): FetchArgs;
    getBudgetMonths(budgetId: string, options?: any): FetchArgs;
};
/**
 * MonthsApi - functional programming interface
 * @export
 */
export declare const MonthsApiFp: (configuration?: Configuration) => {
    getBudgetMonth(budgetId: string, month: Date, options?: any): (fetchFunction?: FetchAPI) => Promise<MonthDetailResponse>;
    getBudgetMonths(budgetId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<MonthSummariesResponse>;
};
/**
 * MonthsApi - factory interface
 * @export
 */
export declare const MonthsApiFactory: (configuration?: Configuration) => {
    getBudgetMonth(budgetId: string, month: Date, options?: any): Promise<MonthDetailResponse>;
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
     * @param {string} budgetId - ID of budget
     * @param {Date} month - The budget month.  \"current\" can also be used to specify the current calendar month (UTC).
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    getBudgetMonth(budgetId: string, month: Date, options?: any): Promise<MonthDetailResponse>;
    /**
     * List all budget months
     * @summary List budget months
     * @param {string} budgetId - ID of budget
     * @param {*} [options] - Override http request options.
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
    getPayeeLocationById(budgetId: string, payeeLocationId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeLocationResponse>;
    getPayeeLocations(budgetId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeLocationsResponse>;
    getPayeeLocationsByPayee(budgetId: string, payeeId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeLocationsResponse>;
};
/**
 * PayeeLocationsApi - factory interface
 * @export
 */
export declare const PayeeLocationsApiFactory: (configuration?: Configuration) => {
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
     * @param {string} budgetId - ID of budget
     * @param {string} payeeLocationId - ID of payee location
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocationById(budgetId: string, payeeLocationId: string, options?: any): Promise<PayeeLocationResponse>;
    /**
     * List all payee locations
     * @summary List payee locations
     * @param {string} budgetId - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocations(budgetId: string, options?: any): Promise<PayeeLocationsResponse>;
    /**
     * List payee locations for a specified payee
     * @summary List locations for a payee
     * @param {string} budgetId - ID of budget
     * @param {string} payeeId - ID of payee
     * @param {*} [options] - Override http request options.
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
    getPayeeById(budgetId: string, payeeId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeResponse>;
    getPayees(budgetId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeesResponse>;
};
/**
 * PayeesApi - factory interface
 * @export
 */
export declare const PayeesApiFactory: (configuration?: Configuration) => {
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
     * @param {string} budgetId - ID of budget
     * @param {string} payeeId - ID of payee
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    getPayeeById(budgetId: string, payeeId: string, options?: any): Promise<PayeeResponse>;
    /**
     * List all payees
     * @summary List payees
     * @param {string} budgetId - ID of budget
     * @param {*} [options] - Override http request options.
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
    getScheduledTransactionById(budgetId: string, scheduledTransactionId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<ScheduledTransactionDetailResponse>;
    getScheduledTransactions(budgetId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<ScheduledTransactionSummariesResponse>;
};
/**
 * ScheduledTransactionsApi - factory interface
 * @export
 */
export declare const ScheduledTransactionsApiFactory: (configuration?: Configuration) => {
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
     * @param {string} budgetId - ID of budget
     * @param {string} scheduledTransactionId - ID of scheduled transaction
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    getScheduledTransactionById(budgetId: string, scheduledTransactionId: string, options?: any): Promise<ScheduledTransactionDetailResponse>;
    /**
     * List all scheduled transactions
     * @summary List scheduled transactions
     * @param {string} budgetId - ID of budget
     * @param {*} [options] - Override http request options.
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
    getTransactions(budgetId: string, sinceDate?: Date, options?: any): FetchArgs;
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: Date, options?: any): FetchArgs;
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: Date, options?: any): FetchArgs;
    getTransactionsById(budgetId: string, transactionId: string, options?: any): FetchArgs;
};
/**
 * TransactionsApi - functional programming interface
 * @export
 */
export declare const TransactionsApiFp: (configuration?: Configuration) => {
    getTransactions(budgetId: string, sinceDate?: Date, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionSummariesResponse>;
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: Date, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionSummariesResponse>;
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: Date, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionSummariesResponse>;
    getTransactionsById(budgetId: string, transactionId: string, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionDetailResponse>;
};
/**
 * TransactionsApi - factory interface
 * @export
 */
export declare const TransactionsApiFactory: (configuration?: Configuration) => {
    getTransactions(budgetId: string, sinceDate?: Date, options?: any): Promise<TransactionSummariesResponse>;
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: Date, options?: any): Promise<TransactionSummariesResponse>;
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: Date, options?: any): Promise<TransactionSummariesResponse>;
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
     * @param {string} budgetId - ID of budget
     * @param {Date} [sinceDate] - Only return transactions on or after this date
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactions(budgetId: string, sinceDate?: Date, options?: any): Promise<TransactionSummariesResponse>;
    /**
     * List transactions for an account
     * @summary List account transactions
     * @param {string} budgetId - ID of budget
     * @param {string} accountId - ID of account
     * @param {Date} [sinceDate] - Only return transactions on or after this date
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: Date, options?: any): Promise<TransactionSummariesResponse>;
    /**
     * List transactions for a category
     * @summary List category transactions
     * @param {string} budgetId - ID of budget
     * @param {string} categoryId - ID of category
     * @param {Date} [sinceDate] - Only return transactions on or after this date
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: Date, options?: any): Promise<TransactionSummariesResponse>;
    /**
     * Find a single transaction by ID
     * @summary Single transaction
     * @param {string} budgetId - ID of budget
     * @param {string} transactionId - ID of transaction
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsById(budgetId: string, transactionId: string, options?: any): Promise<TransactionDetailResponse>;
}
