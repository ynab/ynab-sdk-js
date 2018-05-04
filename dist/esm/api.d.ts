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
    /**
     * The current cleared balance of the account in milliunits format
     * @type {number}
     * @memberof Account
     */
    cleared_balance: number;
    /**
     * The current uncleared balance of the account in milliunits format
     * @type {number}
     * @memberof Account
     */
    uncleared_balance: number;
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
        Cash,
        LineOfCredit,
        MerchantAccount,
        PayPal,
        InvestmentAccount,
        Mortgage,
        OtherAsset,
        OtherLiability,
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
     * @type {Array<Account>}
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
     * The last time any changes were made to the budget from either a web or mobile client.
     * @type {string}
     * @memberof BudgetSummary
     */
    last_modified_on?: string;
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
     * @type {Array<BudgetSummary>}
     * @memberof BudgetSummaryWrapper
     */
    budgets: Array<BudgetSummary>;
}
/**
 *
 * @export
 * @interface BulkIdWrapper
 */
export interface BulkIdWrapper {
    /**
     *
     * @type {BulkIds}
     * @memberof BulkIdWrapper
     */
    bulk: BulkIds;
}
/**
 *
 * @export
 * @interface BulkIds
 */
export interface BulkIds {
    /**
     * The list of Transaction IDs that were created.
     * @type {Array<string>}
     * @memberof BulkIds
     */
    transaction_ids: Array<string>;
    /**
     * If any Transactions were not created because they had an import_id matching a transaction already on the same account, the specified import_id(s) will be included in this list.
     * @type {Array<string>}
     * @memberof BulkIds
     */
    duplicate_import_ids: Array<string>;
}
/**
 *
 * @export
 * @interface BulkResponse
 */
export interface BulkResponse {
    /**
     *
     * @type {BulkIdWrapper}
     * @memberof BulkResponse
     */
    data: BulkIdWrapper;
}
/**
 *
 * @export
 * @interface BulkTransactions
 */
export interface BulkTransactions {
    /**
     *
     * @type {Array<SaveTransaction>}
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
     * @type {Array<CategoryGroupWithCategories>}
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
    iso_code: string;
    /**
     *
     * @type {string}
     * @memberof CurrencyFormat
     */
    example_format: string;
    /**
     *
     * @type {number}
     * @memberof CurrencyFormat
     */
    decimal_digits: number;
    /**
     *
     * @type {string}
     * @memberof CurrencyFormat
     */
    decimal_separator: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrencyFormat
     */
    symbol_first: boolean;
    /**
     *
     * @type {string}
     * @memberof CurrencyFormat
     */
    group_separator: string;
    /**
     *
     * @type {string}
     * @memberof CurrencyFormat
     */
    currency_symbol: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrencyFormat
     */
    display_symbol: boolean;
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
    format: string;
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
 * @interface HybridTransactionsResponse
 */
export interface HybridTransactionsResponse {
    /**
     *
     * @type {HybridTransactionsWrapper}
     * @memberof HybridTransactionsResponse
     */
    data: HybridTransactionsWrapper;
}
/**
 *
 * @export
 * @interface HybridTransactionsWrapper
 */
export interface HybridTransactionsWrapper {
    /**
     *
     * @type {Array<HybridTransaction>}
     * @memberof HybridTransactionsWrapper
     */
    transactions: Array<HybridTransaction>;
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
     * @type {Array<MonthSummary>}
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
     * @type {Array<PayeeLocation>}
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
     * @type {Array<Payee>}
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
     * The payee name.  If a payee_name value is provided and payee_id is not included or has a null value, payee_name will be used to create or use an existing payee.
     * @type {string}
     * @memberof SaveTransaction
     */
    payee_name?: string;
    /**
     * The category for the transaction.  Split and Credit Card Payment categories are not permitted and will be ignored if supplied.
     * @type {string}
     * @memberof SaveTransaction
     */
    category_id?: string;
    /**
     *
     * @type {string}
     * @memberof SaveTransaction
     */
    memo?: string;
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
     * The transaction flag
     * @type {string}
     * @memberof SaveTransaction
     */
    flag_color?: SaveTransaction.FlagColorEnum;
    /**
     * If specified for a new transaction, the transaction will be treated as Imported and assigned this import_id.  If another transaction on the same account with this same import_id is later attempted to be created, it will be skipped to prevent duplication.  Transactions imported through File Based Import or Direct Import and not through the API, are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.  If import_id is specified as null, the transaction will be treated as a user entered transaction.
     * @type {string}
     * @memberof SaveTransaction
     */
    import_id?: string;
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
    /**
     * @export
     * @enum {string}
     */
    enum FlagColorEnum {
        Red,
        Orange,
        Yellow,
        Green,
        Blue,
        Purple,
    }
}
/**
 *
 * @export
 * @interface SaveTransactionWrapper
 */
export interface SaveTransactionWrapper {
    /**
     *
     * @type {SaveTransaction}
     * @memberof SaveTransactionWrapper
     */
    transaction: SaveTransaction;
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
     * The scheduled subtransaction amount in milliunits format
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
     * The scheduled transaction flag
     * @type {string}
     * @memberof ScheduledTransactionSummary
     */
    flag_color: ScheduledTransactionSummary.FlagColorEnum;
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
    /**
     * @export
     * @enum {string}
     */
    enum FlagColorEnum {
        Red,
        Orange,
        Yellow,
        Green,
        Blue,
        Purple,
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
     * @type {Array<ScheduledTransactionDetail>}
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
     * The subtransaction amount in milliunits format
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
     * The transaction flag
     * @type {string}
     * @memberof TransactionSummary
     */
    flag_color: TransactionSummary.FlagColorEnum;
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
    /**
     * If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
     * @type {string}
     * @memberof TransactionSummary
     */
    import_id: string;
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
    /**
     * @export
     * @enum {string}
     */
    enum FlagColorEnum {
        Red,
        Orange,
        Yellow,
        Green,
        Blue,
        Purple,
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
     * @type {Array<TransactionDetail>}
     * @memberof TransactionsWrapper
     */
    transactions: Array<TransactionDetail>;
}
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {string}
     * @memberof User
     */
    id: string;
}
/**
 *
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     *
     * @type {UserWrapper}
     * @memberof UserResponse
     */
    data: UserWrapper;
}
/**
 *
 * @export
 * @interface UserWrapper
 */
export interface UserWrapper {
    /**
     *
     * @type {User}
     * @memberof UserWrapper
     */
    user: User;
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
     * The last time any changes were made to the budget from either a web or mobile client.
     * @type {string}
     * @memberof BudgetDetail
     */
    last_modified_on?: string;
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
     * @type {Array<Category>}
     * @memberof CategoryGroupWithCategories
     */
    categories: Array<Category>;
}
/**
 *
 * @export
 * @interface HybridTransaction
 */
export interface HybridTransaction {
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    date: string;
    /**
     * The transaction amount in milliunits format
     * @type {number}
     * @memberof HybridTransaction
     */
    amount: number;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    memo: string;
    /**
     * The cleared status of the transaction
     * @type {string}
     * @memberof HybridTransaction
     */
    cleared: HybridTransaction.ClearedEnum;
    /**
     * Whether or not the transaction is approved
     * @type {boolean}
     * @memberof HybridTransaction
     */
    approved: boolean;
    /**
     * The transaction flag
     * @type {string}
     * @memberof HybridTransaction
     */
    flag_color: HybridTransaction.FlagColorEnum;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    payee_id: string;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    category_id: string;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    transfer_account_id: string;
    /**
     * If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
     * @type {string}
     * @memberof HybridTransaction
     */
    import_id: string;
    /**
     * Whether the hybrid transaction represents a regular transaction or a subtransaction
     * @type {string}
     * @memberof HybridTransaction
     */
    type: HybridTransaction.TypeEnum;
    /**
     * For subtransaction types, this is the id of the pararent transaction.  For transaction types, this id will be always be null.
     * @type {string}
     * @memberof HybridTransaction
     */
    parent_transaction_id: string;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    account_name: string;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    payee_name: string;
    /**
     *
     * @type {string}
     * @memberof HybridTransaction
     */
    category_name: string;
}
/**
 * @export
 * @namespace HybridTransaction
 */
export declare namespace HybridTransaction {
    /**
     * @export
     * @enum {string}
     */
    enum ClearedEnum {
        Cleared,
        Uncleared,
        Reconciled,
    }
    /**
     * @export
     * @enum {string}
     */
    enum FlagColorEnum {
        Red,
        Orange,
        Yellow,
        Green,
        Blue,
        Purple,
    }
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        Transaction,
        Subtransaction,
    }
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
     * @type {Array<Category>}
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
     * The first date for which the Scheduled Transaction was scheduled.
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    date_first: string;
    /**
     * The next date for which the Scheduled Transaction is scheduled.
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    date_next: string;
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
     * The scheduled transaction flag
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    flag_color: ScheduledTransactionDetail.FlagColorEnum;
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
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    account_name: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    payee_name: string;
    /**
     *
     * @type {string}
     * @memberof ScheduledTransactionDetail
     */
    category_name: string;
    /**
     * If a split scheduled transaction, the subtransactions.
     * @type {Array<ScheduledSubTransaction>}
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
    /**
     * @export
     * @enum {string}
     */
    enum FlagColorEnum {
        Red,
        Orange,
        Yellow,
        Green,
        Blue,
        Purple,
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
     * The transaction flag
     * @type {string}
     * @memberof TransactionDetail
     */
    flag_color: TransactionDetail.FlagColorEnum;
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
     * If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.
     * @type {string}
     * @memberof TransactionDetail
     */
    import_id: string;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    account_name: string;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    payee_name: string;
    /**
     *
     * @type {string}
     * @memberof TransactionDetail
     */
    category_name: string;
    /**
     * If a split transaction, the subtransactions.
     * @type {Array<SubTransaction>}
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
    /**
     * @export
     * @enum {string}
     */
    enum FlagColorEnum {
        Red,
        Orange,
        Yellow,
        Green,
        Blue,
        Purple,
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
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} account_id - The ID of the Account.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getAccountById(budget_id: string, account_id: string, options?: any): Promise<AccountResponse>;
    /**
     * Returns all accounts
     * @summary Account list
     * @param {string} budget_id - The ID of the Budget.
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
     * @param {string} budget_id - The ID of the Budget.
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof BudgetsApi
     */
    getBudgetById(budget_id: string, last_knowledge_of_server?: number, options?: any): Promise<BudgetDetailResponse>;
    /**
     * Returns budgets list with summary information.
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
     * Returns all categories grouped by category group.
     * @summary List categories
     * @param {string} budget_id - The ID of the Budget.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    getCategories(budget_id: string, options?: any): Promise<CategoriesResponse>;
    /**
     * Returns a single category
     * @summary Single category
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} category_id - The ID of the Category.
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
     * @param {string} budget_id - The ID of the Budget.
     * @param {Date} month - The Budget Month.  \"current\" can also be used to specify the current calendar month (UTC).
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof MonthsApi
     */
    getBudgetMonth(budget_id: string, month: Date | string, options?: any): Promise<MonthDetailResponse>;
    /**
     * Returns all budget months
     * @summary List budget months
     * @param {string} budget_id - The ID of the Budget.
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
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} payee_location_id - ID of payee location
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocationById(budget_id: string, payee_location_id: string, options?: any): Promise<PayeeLocationResponse>;
    /**
     * Returns all payee locations
     * @summary List payee locations
     * @param {string} budget_id - The ID of the Budget.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeeLocationsApi
     */
    getPayeeLocations(budget_id: string, options?: any): Promise<PayeeLocationsResponse>;
    /**
     * Returns all payee locations for the specified payee
     * @summary List locations for a payee
     * @param {string} budget_id - The ID of the Budget.
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
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} payee_id - The ID of the Payee.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof PayeesApi
     */
    getPayeeById(budget_id: string, payee_id: string, options?: any): Promise<PayeeResponse>;
    /**
     * Returns all payees
     * @summary List payees
     * @param {string} budget_id - The ID of the Budget.
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
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} scheduled_transaction_id - The ID of the Scheduled Transaction.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof ScheduledTransactionsApi
     */
    getScheduledTransactionById(budget_id: string, scheduled_transaction_id: string, options?: any): Promise<ScheduledTransactionResponse>;
    /**
     * Returns all scheduled transactions
     * @summary List scheduled transactions
     * @param {string} budget_id - The ID of the Budget.
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
    createTransaction(budget_id: string, transaction: SaveTransactionWrapper, options?: any): FetchArgs;
    getTransactions(budget_id: string, since_date?: string | Date, type?: "uncategorized" | "unapproved", options?: any): FetchArgs;
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: string | Date, options?: any): FetchArgs;
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: string | Date, options?: any): FetchArgs;
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): FetchArgs;
    getTransactionsByPayee(budget_id: string, payee_id: string, since_date?: string | Date, options?: any): FetchArgs;
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransactionWrapper, options?: any): FetchArgs;
};
/**
 * TransactionsApi - functional programming interface
 * @export
 */
export declare const TransactionsApiFp: (configuration?: Configuration) => {
    bulkCreateTransactions(budget_id: string, transactions: BulkTransactions, options?: any): (fetchFunction?: FetchAPI) => Promise<BulkResponse>;
    createTransaction(budget_id: string, transaction: SaveTransactionWrapper, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionResponse>;
    getTransactions(budget_id: string, since_date?: string | Date, type?: "uncategorized" | "unapproved", options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionsResponse>;
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: string | Date, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionsResponse>;
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: string | Date, options?: any): (fetchFunction?: FetchAPI) => Promise<HybridTransactionsResponse>;
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionResponse>;
    getTransactionsByPayee(budget_id: string, payee_id: string, since_date?: string | Date, options?: any): (fetchFunction?: FetchAPI) => Promise<HybridTransactionsResponse>;
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransactionWrapper, options?: any): (fetchFunction?: FetchAPI) => Promise<TransactionResponse>;
};
/**
 * TransactionsApi - factory interface
 * @export
 */
export declare const TransactionsApiFactory: (configuration?: Configuration) => {
    bulkCreateTransactions(budget_id: string, transactions: BulkTransactions, options?: any): Promise<BulkResponse>;
    createTransaction(budget_id: string, transaction: SaveTransactionWrapper, options?: any): Promise<TransactionResponse>;
    getTransactions(budget_id: string, since_date?: string | Date, type?: "uncategorized" | "unapproved", options?: any): Promise<TransactionsResponse>;
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: string | Date, options?: any): Promise<TransactionsResponse>;
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: string | Date, options?: any): Promise<HybridTransactionsResponse>;
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): Promise<TransactionResponse>;
    getTransactionsByPayee(budget_id: string, payee_id: string, since_date?: string | Date, options?: any): Promise<HybridTransactionsResponse>;
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransactionWrapper, options?: any): Promise<TransactionResponse>;
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
     * @param {string} budget_id - The ID of the Budget.
     * @param {BulkTransactions} transactions - The list of Transactions to create.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    bulkCreateTransactions(budget_id: string, transactions: BulkTransactions, options?: any): Promise<BulkResponse>;
    /**
     * Creates a transaction
     * @summary Create new transaction
     * @param {string} budget_id - The ID of the Budget.
     * @param {SaveTransactionWrapper} transaction - The Transaction to create.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    createTransaction(budget_id: string, transaction: SaveTransactionWrapper, options?: any): Promise<TransactionResponse>;
    /**
     * Returns budget transactions
     * @summary List transactions
     * @param {string} budget_id - The ID of the Budget.
     * @param {Date} [since_date] - Only return transactions on or after this date.
     * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - Only return transactions of a certain type (i.e. 'uncategorized', 'unapproved')
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactions(budget_id: string, since_date?: Date | string, type?: 'uncategorized' | 'unapproved', options?: any): Promise<TransactionsResponse>;
    /**
     * Returns all transactions for a specified account
     * @summary List account transactions
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} account_id - The ID of the Account.
     * @param {Date} [since_date] - Only return transactions on or after this date.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByAccount(budget_id: string, account_id: string, since_date?: Date | string, options?: any): Promise<TransactionsResponse>;
    /**
     * Returns all transactions for a specified category
     * @summary List category transactions
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} category_id - The ID of the Category.
     * @param {Date} [since_date] - Only return transactions on or after this date.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByCategory(budget_id: string, category_id: string, since_date?: Date | string, options?: any): Promise<HybridTransactionsResponse>;
    /**
     * Returns a single transaction
     * @summary Single transaction
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} transaction_id - The ID of the Transaction.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsById(budget_id: string, transaction_id: string, options?: any): Promise<TransactionResponse>;
    /**
     * Returns all transactions for a specified payee
     * @summary List payee transactions
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} payee_id - The ID of the Payee.
     * @param {Date} [since_date] - Only return transactions on or after this date.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByPayee(budget_id: string, payee_id: string, since_date?: Date | string, options?: any): Promise<HybridTransactionsResponse>;
    /**
     * Updates a transaction
     * @summary Updates an existing transaction
     * @param {string} budget_id - The ID of the Budget.
     * @param {string} transaction_id - The ID of the Transaction.
     * @param {SaveTransactionWrapper} transaction - The Transaction to update.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    updateTransaction(budget_id: string, transaction_id: string, transaction: SaveTransactionWrapper, options?: any): Promise<TransactionResponse>;
}
/**
 * UserApi - fetch parameter creator
 * @export
 */
export declare const UserApiFetchParamCreator: (configuration?: Configuration) => {
    getUser(options?: any): FetchArgs;
};
/**
 * UserApi - functional programming interface
 * @export
 */
export declare const UserApiFp: (configuration?: Configuration) => {
    getUser(options?: any): (fetchFunction?: FetchAPI) => Promise<UserResponse>;
};
/**
 * UserApi - factory interface
 * @export
 */
export declare const UserApiFactory: (configuration?: Configuration) => {
    getUser(options?: any): Promise<UserResponse>;
};
/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export declare class UserApi extends BaseAPI {
    /**
     * Returns authenticated user information.
     * @summary User info
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    getUser(options?: any): Promise<UserResponse>;
}
