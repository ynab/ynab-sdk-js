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
    type: Account.TypeEnum;
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
     * The current balance of the account in milliunits format
     * @type {number}
     * @memberof Account
     */
    balance: number;
}
/**
 * @export
 * @namespace Account
 */
export declare namespace Account {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        Checking,
        Savings,
        CreditCard,
    }
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
 * @interface BulkTransactionCreateResponse
 */
export interface BulkTransactionCreateResponse {
    /**
     *
     * @type {BulkTransactionIds}
     * @memberof BulkTransactionCreateResponse
     */
    data: BulkTransactionIds;
}
/**
 *
 * @export
 * @interface BulkTransactionIds
 */
export interface BulkTransactionIds {
    /**
     *
     * @type {Array&lt;string&gt;}
     * @memberof BulkTransactionIds
     */
    transaction_ids: Array<string>;
}
/**
 *
 * @export
 * @interface BulkTransactions
 */
export interface BulkTransactions {
    /**
     *
     * @type {Array&lt;SaveTransaction&gt;}
     * @memberof BulkTransactions
     */
    transactions: Array<SaveTransaction>;
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
     * Budgeted amount in current month in milliunits format
     * @type {number}
     * @memberof Category
     */
    budgeted: number;
    /**
     * Activity amount in current month in milliunits format
     * @type {number}
     * @memberof Category
     */
    activity: number;
    /**
     * Balance in current month in milliunits format
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
    detail: string;
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
     * The current balance of the account in milliunits format
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
 * @interface SaveTransaction
 */
export interface SaveTransaction {
    /**
     *
     * @type {string}
     * @memberof SaveTransaction
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof SaveTransaction
     */
    date: string;
    /**
     * The transaction amount in milliunits format
     * @type {number}
     * @memberof SaveTransaction
     */
    amount: number;
    /**
     * The payee for the transaction.  Transfer payees are not permitted and will be ignored if supplied.
     * @type {string}
     * @memberof SaveTransaction
     */
    payee_id?: string;
    /**
     * The category for the transaction.  Split and Credit Card Payment categories are not permitted and will be ignored if supplied.
     * @type {string}
     * @memberof SaveTransaction
     */
    category_id?: string;
    /**
     * The cleared status of the transaction
     * @type {string}
     * @memberof SaveTransaction
     */
    cleared?: SaveTransaction.ClearedEnum;
    /**
     * Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.
     * @type {boolean}
     * @memberof SaveTransaction
     */
    approved?: boolean;
    /**
     *
     * @type {string}
     * @memberof SaveTransaction
     */
    memo?: string;
}
/**
 * @export
 * @namespace SaveTransaction
 */
export declare namespace SaveTransaction {
    /**
     * @export
     * @enum {string}
     */
    enum ClearedEnum {
        Cleared,
        Uncleared,
        Reconciled,
    }
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
     * The scheduled sub-transaction amount in milliunits format
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
 * @interface ScheduledTransactionResponse
 */
export interface ScheduledTransactionResponse {
    /**
     *
     * @type {ScheduledTransactionWrapper}
     * @memberof ScheduledTransactionResponse
     */
    data: ScheduledTransactionWrapper;
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
    frequency: ScheduledTransactionSummary.FrequencyEnum;
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
 * @export
 * @namespace ScheduledTransactionSummary
 */
export declare namespace ScheduledTransactionSummary {
    /**
     * @export
     * @enum {string}
     */
    enum FrequencyEnum {
        Never,
        Daily,
        Weekly,
        EveryOtherWeek,
        TwiceAMonth,
        Every4Weeks,
        Monthly,
        EveryOtherMonth,
        Every3Months,
        Every4Months,
        TwiceAYear,
        Yearly,
        EveryOtherYear,
    }
}
/**
 *
 * @export
 * @interface ScheduledTransactionWrapper
 */
export interface ScheduledTransactionWrapper {
    /**
     *
     * @type {ScheduledTransactionDetail}
     * @memberof ScheduledTransactionWrapper
     */
    scheduled_transaction: ScheduledTransactionDetail;
}
/**
 *
 * @export
 * @interface ScheduledTransactionsResponse
 */
export interface ScheduledTransactionsResponse {
    /**
     *
     * @type {ScheduledTransactionsWrapper}
     * @memberof ScheduledTransactionsResponse
     */
    data: ScheduledTransactionsWrapper;
}
/**
 *
 * @export
 * @interface ScheduledTransactionsWrapper
 */
export interface ScheduledTransactionsWrapper {
    /**
     *
     * @type {Array&lt;ScheduledTransactionDetail&gt;}
     * @memberof ScheduledTransactionsWrapper
     */
    scheduled_transactions: Array<ScheduledTransactionDetail>;
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
     * The sub-transaction amount in milliunits format
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
 * @interface TransactionResponse
 */
export interface TransactionResponse {
    /**
     *
     * @type {TransactionWrapper}
     * @memberof TransactionResponse
     */
    data: TransactionWrapper;
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
     * The transaction amount in milliunits format
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
    cleared: TransactionSummary.ClearedEnum;
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
     *
     * @type {string}
     * @memberof TransactionSummary
     */
    transfer_account_id: string;
}
/**
 * @export
 * @namespace TransactionSummary
 */
export declare namespace TransactionSummary {
    /**
     * @export
     * @enum {string}
     */
    enum ClearedEnum {
        Cleared,
        Uncleared,
        Reconciled,
    }
}
/**
 *
 * @export
 * @interface TransactionWrapper
 */
export interface TransactionWrapper {
    /**
     *
     * @type {TransactionDetail}
     * @memberof TransactionWrapper
     */
    transaction: TransactionDetail;
}
/**
 *
 * @export
 * @interface TransactionsResponse
 */
export interface TransactionsResponse {
    /**
     *
     * @type {TransactionsWrapper}
     * @memberof TransactionsResponse
     */
    data: TransactionsWrapper;
}
/**
 *
 * @export
 * @interface TransactionsWrapper
 */
export interface TransactionsWrapper {
    /**
     *
     * @type {Array&lt;TransactionDetail&gt;}
     * @memberof TransactionsWrapper
     */
    transactions: Array<TransactionDetail>;
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
     * The current balance of the account in milliunits format
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
    frequency: ScheduledTransactionDetail.FrequencyEnum;
    /**
     * The scheduled transaction amount in milliunits format
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
 * @export
 * @namespace ScheduledTransactionDetail
 */
export declare namespace ScheduledTransactionDetail {
    /**
     * @export
     * @enum {string}
     */
    enum FrequencyEnum {
        Never,
        Daily,
        Weekly,
        EveryOtherWeek,
        TwiceAMonth,
        Every4Weeks,
        Monthly,
        EveryOtherMonth,
        Every3Months,
        Every4Months,
        TwiceAYear,
        Yearly,
        EveryOtherYear,
    }
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
     * The transaction amount in milliunits format
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
    cleared: TransactionDetail.ClearedEnum;
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
 * @export
 * @namespace TransactionDetail
 */
export declare namespace TransactionDetail {
    /**
     * @export
     * @enum {string}
     */
    enum ClearedEnum {
        Cleared,
        Uncleared,
        Reconciled,
    }
}
/**
 * AccountsApi - fetch parameter creator
 * @export
 */
export declare const AccountsApiFetchParamCreator: (configuration?: Configuration) => {
    getAccountById(budget_id: string, account_id: string, options?: any): FetchArgs;
    getAccounts(budget_id: string, options?: any): FetchArgs;
};
/**
 * AccountsApi - functional programming interface
 * @export
 */
export declare const AccountsApiFp: (configuration?: Configuration) => {
    getAccountById(budget_id: string, account_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<AccountResponse>;
    getAccounts(budget_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<AccountsResponse>;
};
/**
 * AccountsApi - factory interface
 * @export
 */
export declare const AccountsApiFactory: (configuration?: Configuration) => {
    getAccountById(budget_id: string, account_id: string, options?: any): Promise<AccountResponse>;
    getAccounts(budget_id: string, options?: any): Promise<AccountsResponse>;
};
/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export declare class AccountsApi extends BaseAPI {
    /**
     * Returns a single account
     * @summary Single account
     * @param {string} budget_id - ID of budget
     * @param {string} account_id - ID of account
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getAccountById(budget_id: string, account_id: string, options?: any): Promise<AccountResponse>;
    /**
     * Returns all accounts
     * @summary Account list
     * @param {string} budget_id - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getAccounts(budget_id: string, options?: any): Promise<AccountsResponse>;
}
/**
 * BudgetsApi - fetch parameter creator
 * @export
 */
export declare const BudgetsApiFetchParamCreator: (configuration?: Configuration) => {
    getBudgetById(budget_id: string, last_knowledge_of_server?: number, options?: any): FetchArgs;
    getBudgets(options?: any): FetchArgs;
};
/**
 * BudgetsApi - functional programming interface
 * @export
 */
export declare const BudgetsApiFp: (configuration?: Configuration) => {
    getBudgetById(budget_id: string, last_knowledge_of_server?: number, options?: any): (fetchFunction?: FetchAPI) => Promise<BudgetDetailResponse>;
    getBudgets(options?: any): (fetchFunction?: FetchAPI) => Promise<BudgetSummaryResponse>;
};
/**
 * BudgetsApi - factory interface
 * @export
 */
export declare const BudgetsApiFactory: (configuration?: Configuration) => {
    getBudgetById(budget_id: string, last_knowledge_of_server?: number, options?: any): Promise<BudgetDetailResponse>;
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
     * Returns a single budget with all related entities.  This resource is effectively a full budget export.
     * @summary Single budget
     * @param {string} budget_id - ID of budget
     * @param {number} [last_knowledge_of_server] - Starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    getBudgetById(budget_id: string, last_knowledge_of_server?: number, options?: any): Promise<BudgetDetailResponse>;
    /**
     * Returns budgets list with summary information
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
    getCategories(budget_id: string, options?: any): FetchArgs;
    getCategoryById(budget_id: string, category_id: string, options?: any): FetchArgs;
};
/**
 * CategoriesApi - functional programming interface
 * @export
 */
export declare const CategoriesApiFp: (configuration?: Configuration) => {
    getCategories(budget_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<CategoriesResponse>;
    getCategoryById(budget_id: string, category_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<CategoryResponse>;
};
/**
 * CategoriesApi - factory interface
 * @export
 */
export declare const CategoriesApiFactory: (configuration?: Configuration) => {
    getCategories(budget_id: string, options?: any): Promise<CategoriesResponse>;
    getCategoryById(budget_id: string, category_id: string, options?: any): Promise<CategoryResponse>;
};
/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export declare class CategoriesApi extends BaseAPI {
    /**
     * Returns all categories grouped by category group
     * @summary List categories
     * @param {string} budget_id - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategories(budget_id: string, options?: any): Promise<CategoriesResponse>;
    /**
     * Returns a single category
     * @summary Single category
     * @param {string} budget_id - ID of budget
     * @param {string} category_id - ID of category
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategoryById(budget_id: string, category_id: string, options?: any): Promise<CategoryResponse>;
}
/**
 * MonthsApi - fetch parameter creator
 * @export
 */
export declare const MonthsApiFetchParamCreator: (configuration?: Configuration) => {
    getBudgetMonth(budget_id: string, month: string | Date, options?: any): FetchArgs;
    getBudgetMonths(budget_id: string, options?: any): FetchArgs;
};
/**
 * MonthsApi - functional programming interface
 * @export
 */
export declare const MonthsApiFp: (configuration?: Configuration) => {
    getBudgetMonth(budget_id: string, month: string | Date, options?: any): (fetchFunction?: FetchAPI) => Promise<MonthDetailResponse>;
    getBudgetMonths(budget_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<MonthSummariesResponse>;
};
/**
 * MonthsApi - factory interface
 * @export
 */
export declare const MonthsApiFactory: (configuration?: Configuration) => {
    getBudgetMonth(budget_id: string, month: string | Date, options?: any): Promise<MonthDetailResponse>;
    getBudgetMonths(budget_id: string, options?: any): Promise<MonthSummariesResponse>;
};
/**
 * MonthsApi - object-oriented interface
 * @export
 * @class MonthsApi
 * @extends {BaseAPI}
 */
export declare class MonthsApi extends BaseAPI {
    /**
     * Returns a single budget month
     * @summary Single budget month
     * @param {string} budget_id - ID of budget
     * @param {Date} month - The budget month.  \"current\" can also be used to specify the current calendar month (UTC).
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    getBudgetMonth(budget_id: string, month: Date | string, options?: any): Promise<MonthDetailResponse>;
    /**
     * Returns all budget months
     * @summary List budget months
     * @param {string} budget_id - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    getBudgetMonths(budget_id: string, options?: any): Promise<MonthSummariesResponse>;
}
/**
 * PayeeLocationsApi - fetch parameter creator
 * @export
 */
export declare const PayeeLocationsApiFetchParamCreator: (configuration?: Configuration) => {
    getPayeeLocationById(budget_id: string, payee_location_id: string, options?: any): FetchArgs;
    getPayeeLocations(budget_id: string, options?: any): FetchArgs;
    getPayeeLocationsByPayee(budget_id: string, payee_id: string, options?: any): FetchArgs;
};
/**
 * PayeeLocationsApi - functional programming interface
 * @export
 */
export declare const PayeeLocationsApiFp: (configuration?: Configuration) => {
    getPayeeLocationById(budget_id: string, payee_location_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeLocationResponse>;
    getPayeeLocations(budget_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeLocationsResponse>;
    getPayeeLocationsByPayee(budget_id: string, payee_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeLocationsResponse>;
};
/**
 * PayeeLocationsApi - factory interface
 * @export
 */
export declare const PayeeLocationsApiFactory: (configuration?: Configuration) => {
    getPayeeLocationById(budget_id: string, payee_location_id: string, options?: any): Promise<PayeeLocationResponse>;
    getPayeeLocations(budget_id: string, options?: any): Promise<PayeeLocationsResponse>;
    getPayeeLocationsByPayee(budget_id: string, payee_id: string, options?: any): Promise<PayeeLocationsResponse>;
};
/**
 * PayeeLocationsApi - object-oriented interface
 * @export
 * @class PayeeLocationsApi
 * @extends {BaseAPI}
 */
export declare class PayeeLocationsApi extends BaseAPI {
    /**
     * Returns a single payee location
     * @summary Single payee location
     * @param {string} budget_id - ID of budget
     * @param {string} payee_location_id - ID of payee location
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocationById(budget_id: string, payee_location_id: string, options?: any): Promise<PayeeLocationResponse>;
    /**
     * Returns all payee locations
     * @summary List payee locations
     * @param {string} budget_id - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocations(budget_id: string, options?: any): Promise<PayeeLocationsResponse>;
    /**
     * Returns all payee locations for the specified payee
     * @summary List locations for a payee
     * @param {string} budget_id - ID of budget
     * @param {string} payee_id - ID of payee
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocationsByPayee(budget_id: string, payee_id: string, options?: any): Promise<PayeeLocationsResponse>;
}
/**
 * PayeesApi - fetch parameter creator
 * @export
 */
export declare const PayeesApiFetchParamCreator: (configuration?: Configuration) => {
    getPayeeById(budget_id: string, payee_id: string, options?: any): FetchArgs;
    getPayees(budget_id: string, options?: any): FetchArgs;
};
/**
 * PayeesApi - functional programming interface
 * @export
 */
export declare const PayeesApiFp: (configuration?: Configuration) => {
    getPayeeById(budget_id: string, payee_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeeResponse>;
    getPayees(budget_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<PayeesResponse>;
};
/**
 * PayeesApi - factory interface
 * @export
 */
export declare const PayeesApiFactory: (configuration?: Configuration) => {
    getPayeeById(budget_id: string, payee_id: string, options?: any): Promise<PayeeResponse>;
    getPayees(budget_id: string, options?: any): Promise<PayeesResponse>;
};
/**
 * PayeesApi - object-oriented interface
 * @export
 * @class PayeesApi
 * @extends {BaseAPI}
 */
export declare class PayeesApi extends BaseAPI {
    /**
     * Returns single payee
     * @summary Single payee
     * @param {string} budget_id - ID of budget
     * @param {string} payee_id - ID of payee
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    getPayeeById(budget_id: string, payee_id: string, options?: any): Promise<PayeeResponse>;
    /**
     * Returns all payees
     * @summary List payees
     * @param {string} budget_id - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    getPayees(budget_id: string, options?: any): Promise<PayeesResponse>;
}
/**
 * ScheduledTransactionsApi - fetch parameter creator
 * @export
 */
export declare const ScheduledTransactionsApiFetchParamCreator: (configuration?: Configuration) => {
    getScheduledTransactionById(budget_id: string, scheduled_transaction_id: string, options?: any): FetchArgs;
    getScheduledTransactions(budget_id: string, options?: any): FetchArgs;
};
/**
 * ScheduledTransactionsApi - functional programming interface
 * @export
 */
export declare const ScheduledTransactionsApiFp: (configuration?: Configuration) => {
    getScheduledTransactionById(budget_id: string, scheduled_transaction_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<ScheduledTransactionResponse>;
    getScheduledTransactions(budget_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<ScheduledTransactionsResponse>;
};
/**
 * ScheduledTransactionsApi - factory interface
 * @export
 */
export declare const ScheduledTransactionsApiFactory: (configuration?: Configuration) => {
    getScheduledTransactionById(budget_id: string, scheduled_transaction_id: string, options?: any): Promise<ScheduledTransactionResponse>;
    getScheduledTransactions(budget_id: string, options?: any): Promise<ScheduledTransactionsResponse>;
};
/**
 * ScheduledTransactionsApi - object-oriented interface
 * @export
 * @class ScheduledTransactionsApi
 * @extends {BaseAPI}
 */
export declare class ScheduledTransactionsApi extends BaseAPI {
    /**
     * Returns a single scheduled transaction
     * @summary Single scheduled transaction
     * @param {string} budget_id - ID of budget
     * @param {string} scheduled_transaction_id - ID of scheduled transaction
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    getScheduledTransactionById(budget_id: string, scheduled_transaction_id: string, options?: any): Promise<ScheduledTransactionResponse>;
    /**
     * Returns all scheduled transactions
     * @summary List scheduled transactions
     * @param {string} budget_id - ID of budget
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    getScheduledTransactions(budget_id: string, options?: any): Promise<ScheduledTransactionsResponse>;
}
/**
 * TransactionsApi - fetch parameter creator
 * @export
 */
export declare const TransactionsApiFetchParamCreator: (configuration?: Configuration) => {
    bulkCreateTransactions(budget_id: string, transactions: BulkTransactions, options?: any): FetchArgs;
    createTransaction(budget_id: string, transaction: SaveTransaction, options?: any): FetchArgs;
    getTransactions(budget_id: string, since_date?: string | Date, type?: string, options?: any): FetchArgs;
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: string | Date, options?: any): FetchArgs;
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: string | Date, options?: any): FetchArgs;
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): FetchArgs;
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransaction, options?: any): FetchArgs;
};
/**
 * TransactionsApi - functional programming interface
 * @export
 */
export declare const TransactionsApiFp: (configuration?: Configuration) => {
    bulkCreateTransactions(budget_id: string, transactions: BulkTransactions, options?: any): (fetchFunction?: FetchAPI) => Promise<BulkTransactionCreateResponse>;
    createTransaction(budget_id: string, transaction: SaveTransaction, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionResponse>;
    getTransactions(budget_id: string, since_date?: string | Date, type?: string, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionsResponse>;
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: string | Date, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionsResponse>;
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: string | Date, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionsResponse>;
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionResponse>;
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransaction, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionResponse>;
};
/**
 * TransactionsApi - factory interface
 * @export
 */
export declare const TransactionsApiFactory: (configuration?: Configuration) => {
    bulkCreateTransactions(budget_id: string, transactions: BulkTransactions, options?: any): Promise<BulkTransactionCreateResponse>;
    createTransaction(budget_id: string, transaction: SaveTransaction, options?: any): Promise<TransactionResponse>;
    getTransactions(budget_id: string, since_date?: string | Date, type?: string, options?: any): Promise<TransactionsResponse>;
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: string | Date, options?: any): Promise<TransactionsResponse>;
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: string | Date, options?: any): Promise<TransactionsResponse>;
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): Promise<TransactionResponse>;
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransaction, options?: any): Promise<TransactionResponse>;
};
/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export declare class TransactionsApi extends BaseAPI {
    /**
     * Creates multiple transactions
     * @summary Bulk create transactions
     * @param {string} budget_id - ID of budget
     * @param {BulkTransactions} transactions - Transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    bulkCreateTransactions(budget_id: string, transactions: BulkTransactions, options?: any): Promise<BulkTransactionCreateResponse>;
    /**
     * Creates a transaction
     * @summary Create new transaction
     * @param {string} budget_id - ID of budget
     * @param {SaveTransaction} transaction - Transaction to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    createTransaction(budget_id: string, transaction: SaveTransaction, options?: any): Promise<TransactionResponse>;
    /**
     * Returns budget transactions
     * @summary List transactions
     * @param {string} budget_id - ID of budget
     * @param {Date} [since_date] - Only return transactions on or after this date
     * @param {string} [type] - Only return transactions of a certain type (i.e. 'uncategorized', 'unapproved')
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactions(budget_id: string, since_date?: Date | string, type?: string, options?: any): Promise<TransactionsResponse>;
    /**
     * Returns all transactions for a specified account
     * @summary List account transactions
     * @param {string} budget_id - ID of budget
     * @param {string} account_id - ID of account
     * @param {Date} [since_date] - Only return transactions on or after this date
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: Date | string, options?: any): Promise<TransactionsResponse>;
    /**
     * Returns all transactions for a specified category
     * @summary List category transactions
     * @param {string} budget_id - ID of budget
     * @param {string} category_id - ID of category
     * @param {Date} [since_date] - Only return transactions on or after this date
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: Date | string, options?: any): Promise<TransactionsResponse>;
    /**
     * Returns a single transaction
     * @summary Single transaction
     * @param {string} budget_id - ID of budget
     * @param {string} transaction_id - ID of transaction
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): Promise<TransactionResponse>;
    /**
     * Updates a transaction
     * @summary Updates an existing transaction
     * @param {string} budget_id - ID of budget
     * @param {string} transaction_id - ID of transaction
     * @param {SaveTransaction} transaction - Transaction to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransaction, options?: any): Promise<TransactionResponse>;
}
