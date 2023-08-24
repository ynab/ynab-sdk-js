import * as apis from "./apis";
import { CustomTransactionsApi } from "./apis/CustomTransactionsApi";
import utils from "./utils";
import { Configuration } from "./runtime";
export * from "./runtime";
export * from "./apis";
export * from "./models";
export { api as API };
export { utils };
export declare class api {
    protected _configuration: Configuration;
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    constructor(accessToken: string, endpointUrl?: string);
    protected _user: apis.UserApi;
    /**
     * /user endpoints interface
     */
    get user(): apis.UserApi;
    protected _budgets: apis.BudgetsApi;
    /**
     * /budgets endpoints interface
     */
    get budgets(): apis.BudgetsApi;
    protected _accounts: apis.AccountsApi;
    /**
     * /budgets/{budget_id}/accounts endpoints interface
     */
    get accounts(): apis.AccountsApi;
    protected _categories: apis.CategoriesApi;
    /**
     * /budgets/{budget_id}/categories endpoints interface
     */
    get categories(): apis.CategoriesApi;
    protected _months: apis.MonthsApi;
    /**
     * /budgets/{budget_id}/months endpoints interface
     */
    get months(): apis.MonthsApi;
    protected _payees: apis.PayeesApi;
    /**
     * /budgets/{budget_id}/payees endpoints interface
     */
    get payees(): apis.PayeesApi;
    protected _payeeLocations: apis.PayeeLocationsApi;
    /**
     * /budgets/{budget_id}/payee_locations endpoints interface
     */
    get payeeLocations(): apis.PayeeLocationsApi;
    protected _transactions: CustomTransactionsApi;
    /**
     * /budgets/{budget_id}/transactions endpoints interface
     */
    get transactions(): CustomTransactionsApi;
    protected _scheduledTransactions: apis.ScheduledTransactionsApi;
    /**
     * /budgets/{budget_id}/scheduled_transactions endpoints interface
     */
    get scheduledTransactions(): apis.ScheduledTransactionsApi;
}
