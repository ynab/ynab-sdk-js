import { AccountsApi, BudgetsApi, CategoriesApi, MonthsApi, PayeesApi, PayeeLocationsApi, TransactionsApi, ScheduledTransactionsApi } from "./api";
import { Configuration } from "./configuration";
export declare class Api {
    protected configuration: Configuration;
    constructor(accessToken: string, baseUrl?: string);
    protected _accounts: AccountsApi;
    readonly accounts: AccountsApi;
    protected _budgets: BudgetsApi;
    readonly budgets: BudgetsApi;
    protected _categories: CategoriesApi;
    readonly categories: CategoriesApi;
    protected _months: MonthsApi;
    readonly months: MonthsApi;
    protected _payees: PayeesApi;
    readonly payees: PayeesApi;
    protected _payeeLocations: PayeeLocationsApi;
    readonly payeeLocations: PayeeLocationsApi;
    protected _transactions: TransactionsApi;
    readonly transactions: TransactionsApi;
    protected _scheduledTransactions: ScheduledTransactionsApi;
    readonly scheduledTransactions: ScheduledTransactionsApi;
}
