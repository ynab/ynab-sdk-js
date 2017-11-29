import { Configuration } from "./configuration";
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

/**
 * ynabApi is the entrypoint to the YNAB API client.
 */
class ynabApi {
  protected _configuration: Configuration;

  /**
   *
   * @param accessToken The access token used for authentication
   * @param endpointUrl The API endpoint URL (Optional)
   */
  public constructor(
    accessToken: string,
    endpointUrl: string = "https://api.youneedabudget.com/v1"
  ) {
    this._configuration = new Configuration(accessToken, endpointUrl);
  }

  protected _accounts: AccountsApi;
  public get accounts(): AccountsApi {
    if (!this._accounts) {
      this._accounts = new AccountsApi(this._configuration);
    }
    return this._accounts;
  }

  protected _budgets: BudgetsApi;
  public get budgets(): BudgetsApi {
    if (!this._budgets) {
      this._budgets = new BudgetsApi(this._configuration);
    }
    return this._budgets;
  }

  protected _categories: CategoriesApi;
  public get categories(): CategoriesApi {
    if (!this._categories) {
      this._categories = new CategoriesApi(this._configuration);
    }
    return this._categories;
  }

  protected _months: MonthsApi;
  public get months(): MonthsApi {
    if (!this._months) {
      this._months = new MonthsApi(this._configuration);
    }
    return this._months;
  }

  protected _payees: PayeesApi;
  public get payees(): PayeesApi {
    if (!this._payees) {
      this._payees = new PayeesApi(this._configuration);
    }

    return this._payees;
  }

  protected _payeeLocations: PayeeLocationsApi;
  public get payeeLocations(): PayeeLocationsApi {
    if (!this._payeeLocations) {
      this._payeeLocations = new PayeeLocationsApi(this._configuration);
    }
    return this._payeeLocations;
  }

  protected _transactions: TransactionsApi;
  public get transactions(): TransactionsApi {
    if (!this._transactions) {
      this._transactions = new TransactionsApi(this._configuration);
    }
    return this._transactions;
  }

  protected _scheduledTransactions: ScheduledTransactionsApi;
  public get scheduledTransactions(): ScheduledTransactionsApi {
    if (!this._scheduledTransactions) {
      this._scheduledTransactions = new ScheduledTransactionsApi(
        this._configuration
      );
    }
    return this._scheduledTransactions;
  }
}

export = ynabApi;
