import {
  AccountsApi,
  BudgetsApi,
  CategoriesApi,
  MonthsApi,
  PayeesApi,
  PayeeLocationsApi,
  TransactionsApi,
  ScheduledTransactionsApi
} from "./api";
import { Configuration } from "./configuration";

// This acts as a wrapper around the underlying objects exposed by api.ts
export class Api {
  protected configuration: Configuration;
  public constructor(bearerToken: string) {
    this.configuration = new Configuration({
      apiKey: `Bearer ${bearerToken}`,
      basePath: "http://localhost:3000/papi/v1"
    });
  }

  protected _accounts: AccountsApi;
  public get accounts(): AccountsApi {
    if (!this._accounts) {
      this._accounts = new AccountsApi(this.configuration);
    }
    return this._accounts;
  }

  protected _budgets: BudgetsApi;
  public get budgets(): BudgetsApi {
    if (!this._budgets) {
      this._budgets = new BudgetsApi(this.configuration);
    }
    return this._budgets;
  }

  protected _categories: CategoriesApi;
  public get categories(): CategoriesApi {
    if (!this._categories) {
      this._categories = new CategoriesApi(this.configuration);
    }
    return this._categories;
  }

  protected _months: MonthsApi;
  public get months(): MonthsApi {
    if (!this._months) {
      this._months = new MonthsApi(this.configuration);
    }
    return this._months;
  }

  protected _payees: PayeesApi;
  public get payees(): PayeesApi {
    if (!this._payees) {
      this._payees = new PayeesApi(this.configuration);
    }
    return this._payees;
  }

  protected _payeeLocations: PayeeLocationsApi;
  public get payeeLocations(): PayeeLocationsApi {
    if (!this._payeeLocations) {
      this._payeeLocations = new PayeeLocationsApi(this.configuration);
    }
    return this._payeeLocations;
  }

  protected _transactions: TransactionsApi;
  public get transactions(): TransactionsApi {
    if (!this._transactions) {
      this._transactions = new TransactionsApi(this.configuration);
    }
    return this._transactions;
  }

  protected _scheduledTransactions: ScheduledTransactionsApi;
  public get scheduledTransactions(): ScheduledTransactionsApi {
    if (!this._scheduledTransactions) {
      this._scheduledTransactions = new ScheduledTransactionsApi(
        this.configuration
      );
    }
    return this._scheduledTransactions;
  }
}
