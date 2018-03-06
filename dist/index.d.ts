import { Configuration } from "./configuration";
import { Utils } from "./utils";
import { AccountsApi, BudgetsApi, CategoriesApi, MonthsApi, PayeesApi, PayeeLocationsApi, TransactionsApi, ScheduledTransactionsApi } from "./api";
export declare let utils: Utils;
/**
 * The YNAB API client
 */
export declare class api {
    protected _configuration: Configuration;
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    constructor(accessToken: string, endpointUrl?: string);
    protected _budgets: BudgetsApi;
    /**
     * /budgets endpoints interface
     */
    readonly budgets: BudgetsApi;
    protected _accounts: AccountsApi;
    /**
     * /budgets/{budget_id}/accounts endpoints interface
     */
    readonly accounts: AccountsApi;
    protected _categories: CategoriesApi;
    /**
     * /budgets/{budget_id}/categories endpoints interface
     */
    readonly categories: CategoriesApi;
    protected _months: MonthsApi;
    /**
     * /budgets/{budget_id}/months endpoints interface
     */
    readonly months: MonthsApi;
    protected _payees: PayeesApi;
    /**
     * /budgets/{budget_id}/payees endpoints interface
     */
    readonly payees: PayeesApi;
    protected _payeeLocations: PayeeLocationsApi;
    /**
     * /budgets/{budget_id}/payee_locations endpoints interface
     */
    readonly payeeLocations: PayeeLocationsApi;
    protected _transactions: TransactionsApi;
    /**
     * /budgets/{budget_id}/transactions endpoints interface
     */
    readonly transactions: TransactionsApi;
    protected _scheduledTransactions: ScheduledTransactionsApi;
    /**
     * /budgets/{budget_id}/scheduled_transactions endpoints interface
     */
    readonly scheduledTransactions: ScheduledTransactionsApi;
}
