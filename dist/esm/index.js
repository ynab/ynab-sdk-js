import { Configuration } from "./configuration";
import * as CodeGen from "./api";
import utils from "./utils";
export * from "./api";
export { utils };
/**
 * The YNAB API client
 */
export class api {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    constructor(accessToken, endpointUrl = "https://api.youneedabudget.com/v1") {
        this._configuration = new Configuration(accessToken, endpointUrl);
    }
    /**
     * /budgets endpoints interface
     */
    get budgets() {
        if (!this._budgets) {
            this._budgets = new CodeGen.BudgetsApi(this._configuration);
        }
        return this._budgets;
    }
    /**
     * /budgets/{budget_id}/accounts endpoints interface
     */
    get accounts() {
        if (!this._accounts) {
            this._accounts = new CodeGen.AccountsApi(this._configuration);
        }
        return this._accounts;
    }
    /**
     * /budgets/{budget_id}/categories endpoints interface
     */
    get categories() {
        if (!this._categories) {
            this._categories = new CodeGen.CategoriesApi(this._configuration);
        }
        return this._categories;
    }
    /**
     * /budgets/{budget_id}/months endpoints interface
     */
    get months() {
        if (!this._months) {
            this._months = new CodeGen.MonthsApi(this._configuration);
        }
        return this._months;
    }
    /**
     * /budgets/{budget_id}/payees endpoints interface
     */
    get payees() {
        if (!this._payees) {
            this._payees = new CodeGen.PayeesApi(this._configuration);
        }
        return this._payees;
    }
    /**
     * /budgets/{budget_id}/payee_locations endpoints interface
     */
    get payeeLocations() {
        if (!this._payeeLocations) {
            this._payeeLocations = new CodeGen.PayeeLocationsApi(this._configuration);
        }
        return this._payeeLocations;
    }
    /**
     * /budgets/{budget_id}/transactions endpoints interface
     */
    get transactions() {
        if (!this._transactions) {
            this._transactions = new CodeGen.TransactionsApi(this._configuration);
        }
        return this._transactions;
    }
    /**
     * /budgets/{budget_id}/scheduled_transactions endpoints interface
     */
    get scheduledTransactions() {
        if (!this._scheduledTransactions) {
            this._scheduledTransactions = new CodeGen.ScheduledTransactionsApi(this._configuration);
        }
        return this._scheduledTransactions;
    }
}
