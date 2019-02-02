var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as CodeGen from "./api";
var TransactionsApi = /** @class */ (function (_super) {
    __extends(TransactionsApi, _super);
    function TransactionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates multiple transactions. Provide a body containing a 'transactions' array, multiple transactions will be created.
     * @summary Create a single transaction or multiple transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {SaveTransactionsWrapper} data - An object containing transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    TransactionsApi.prototype.createTransactions = function (budget_id, data, options) {
        return CodeGen.TransactionsApiFp(this.configuration).createTransaction(budget_id, data, options)();
    };
    /**
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
     * @summary Bulk create transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {BulkTransactions} transactions - The list of transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     */
    TransactionsApi.prototype.bulkCreateTransactions = function (budget_id, transactions, options) {
        return CodeGen.DeprecatedApiFp(this.configuration).bulkCreateTransactions(budget_id, transactions, options)();
    };
    return TransactionsApi;
}(CodeGen.TransactionsApi));
export { TransactionsApi };
