import { Configuration } from "./configuration";
import { Utils } from "./utils";
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

export let utils = new Utils();

/**
 * The YNAB API client
 */
export class api {
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

  protected _budgets: BudgetsApi;
  /**
   * /budgets endpoints interface
   */
  public get budgets(): BudgetsApi {
    if (!this._budgets) {
      this._budgets = new BudgetsApi(this._configuration);
    }
    return this._budgets;
  }

  protected _accounts: AccountsApi;
  /**
   * /budgets/{budget_id}/accounts endpoints interface
   */
  public get accounts(): AccountsApi {
    if (!this._accounts) {
      this._accounts = new AccountsApi(this._configuration);
    }
    return this._accounts;
  }

  protected _categories: CategoriesApi;
  /**
   * /budgets/{budget_id}/categories endpoints interface
   */
  public get categories(): CategoriesApi {
    if (!this._categories) {
      this._categories = new CategoriesApi(this._configuration);
    }
    return this._categories;
  }

  protected _months: MonthsApi;
  /**
   * /budgets/{budget_id}/months endpoints interface
   */
  public get months(): MonthsApi {
    if (!this._months) {
      this._months = new MonthsApi(this._configuration);
    }
    return this._months;
  }

  protected _payees: PayeesApi;
  /**
   * /budgets/{budget_id}/payees endpoints interface
   */
  public get payees(): PayeesApi {
    if (!this._payees) {
      this._payees = new PayeesApi(this._configuration);
    }

    return this._payees;
  }

  protected _payeeLocations: PayeeLocationsApi;
  /**
   * /budgets/{budget_id}/payee_locations endpoints interface
   */
  public get payeeLocations(): PayeeLocationsApi {
    if (!this._payeeLocations) {
      this._payeeLocations = new PayeeLocationsApi(this._configuration);
    }
    return this._payeeLocations;
  }

  protected _transactions: TransactionsApi;
  /**
   * /budgets/{budget_id}/transactions endpoints interface
   */
  public get transactions(): TransactionsApi {
    if (!this._transactions) {
      this._transactions = new TransactionsApi(this._configuration);
    }
    return this._transactions;
  }

  protected _scheduledTransactions: ScheduledTransactionsApi;
  /**
   * /budgets/{budget_id}/scheduled_transactions endpoints interface
   */
  public get scheduledTransactions(): ScheduledTransactionsApi {
    if (!this._scheduledTransactions) {
      this._scheduledTransactions = new ScheduledTransactionsApi(
        this._configuration
      );
    }
    return this._scheduledTransactions;
  }
}
