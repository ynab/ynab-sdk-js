import { Configuration } from "./configuration";
import * as CodeGen from "./api";
import utils from "./utils";
export { api as API };
export { utils };
export * from "./api";
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
    protected _budgets: CodeGen.BudgetsApi;
    /**
     * /budgets endpoints interface
     */
    readonly budgets: CodeGen.BudgetsApi;
    protected _accounts: CodeGen.AccountsApi;
    /**
     * /budgets/{budget_id}/accounts endpoints interface
     */
    readonly accounts: CodeGen.AccountsApi;
    protected _categories: CodeGen.CategoriesApi;
    /**
     * /budgets/{budget_id}/categories endpoints interface
     */
    readonly categories: CodeGen.CategoriesApi;
    protected _months: CodeGen.MonthsApi;
    /**
     * /budgets/{budget_id}/months endpoints interface
     */
    readonly months: CodeGen.MonthsApi;
    protected _payees: CodeGen.PayeesApi;
    /**
     * /budgets/{budget_id}/payees endpoints interface
     */
    readonly payees: CodeGen.PayeesApi;
    protected _payeeLocations: CodeGen.PayeeLocationsApi;
    /**
     * /budgets/{budget_id}/payee_locations endpoints interface
     */
    readonly payeeLocations: CodeGen.PayeeLocationsApi;
    protected _transactions: CodeGen.TransactionsApi;
    /**
     * /budgets/{budget_id}/transactions endpoints interface
     */
    readonly transactions: CodeGen.TransactionsApi;
    protected _scheduledTransactions: CodeGen.ScheduledTransactionsApi;
    /**
     * /budgets/{budget_id}/scheduled_transactions endpoints interface
     */
    readonly scheduledTransactions: CodeGen.ScheduledTransactionsApi;
}
