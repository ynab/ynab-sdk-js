import * as CodeGen from "./api";
export declare class TransactionsApi extends CodeGen.TransactionsApi {
    /**
     * Creates multiple transactions. Provide a body containing a 'transactions' array, multiple transactions will be created.
     * @summary Create a single transaction or multiple transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {SaveTransactionsWrapper} data - An object containing transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    createTransactions(budget_id: string, data: CodeGen.SaveTransactionsWrapper, options?: any): Promise<CodeGen.SaveTransactionsResponse>;
    /**
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
     * @summary Bulk create transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {BulkTransactions} transactions - The list of transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     */
    bulkCreateTransactions(budget_id: string, transactions: CodeGen.BulkTransactions, options?: any): Promise<CodeGen.BulkResponse>;
}
