import * as CodeGen from "./api";
export declare class TransactionsApi extends CodeGen.TransactionsApi {
    /**
     * Returns budget transactions by type
     * @summary List transactions
     * @param {string} budget_id - The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     * @param {&#39;uncategorized&#39; | &#39;unapproved&#39;} [type] - If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported.
     * @param {number} [last_knowledge_of_server] - The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getTransactionsByType(budget_id: string, type: "uncategorized" | "unapproved", last_knowledge_of_server?: number, options?: any): Promise<CodeGen.TransactionsResponse & {
        rateLimit: string | null;
    }>;
    /**
     * Creates multiple transactions. Provide a body containing a 'transactions' array, multiple transactions will be created.
     * @summary Create a single transaction or multiple transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {SaveTransactionsWrapper} data - An object containing transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    createTransactions(budget_id: string, data: CodeGen.SaveTransactionsWrapper, options?: any): Promise<CodeGen.SaveTransactionsResponse & {
        rateLimit: string | null;
    }>;
    /**
     * Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
     * @summary Bulk create transactions
     * @param {string} budget_id - The id of the budget (\"last-used\" can also be used to specify the last used budget)
     * @param {BulkTransactions} transactions - The list of transactions to create
     * @param {*} [options] - Override http request options.
     * @throws {RequiredError}
     */
    bulkCreateTransactions(budget_id: string, transactions: CodeGen.BulkTransactions, options?: any): Promise<CodeGen.BulkResponse & {
        rateLimit: string | null;
    }>;
}
