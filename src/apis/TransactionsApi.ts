/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  HybridTransactionsResponse,
  PatchTransactionsWrapper,
  PostTransactionsWrapper,
  PutTransactionWrapper,
  SaveTransactionsResponse,
  TransactionResponse,
  TransactionsImportResponse,
  TransactionsResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    HybridTransactionsResponseFromJSON,
    HybridTransactionsResponseToJSON,
    PatchTransactionsWrapperFromJSON,
    PatchTransactionsWrapperToJSON,
    PostTransactionsWrapperFromJSON,
    PostTransactionsWrapperToJSON,
    PutTransactionWrapperFromJSON,
    PutTransactionWrapperToJSON,
    SaveTransactionsResponseFromJSON,
    SaveTransactionsResponseToJSON,
    TransactionResponseFromJSON,
    TransactionResponseToJSON,
    TransactionsImportResponseFromJSON,
    TransactionsImportResponseToJSON,
    TransactionsResponseFromJSON,
    TransactionsResponseToJSON,
} from '../models/index';

export interface CreateTransactionRequest {
    budgetId: string;
    data: PostTransactionsWrapper;
}

export interface DeleteTransactionRequest {
    budgetId: string;
    transactionId: string;
}

export interface GetTransactionByIdRequest {
    budgetId: string;
    transactionId: string;
}

export interface GetTransactionsRequest {
    budgetId: string;
    sinceDate?: string;
    type?: GetTransactionsTypeEnum;
    lastKnowledgeOfServer?: number;
}

export interface GetTransactionsByAccountRequest {
    budgetId: string;
    accountId: string;
    sinceDate?: string;
    type?: GetTransactionsByAccountTypeEnum;
    lastKnowledgeOfServer?: number;
}

export interface GetTransactionsByCategoryRequest {
    budgetId: string;
    categoryId: string;
    sinceDate?: string;
    type?: GetTransactionsByCategoryTypeEnum;
    lastKnowledgeOfServer?: number;
}

export interface GetTransactionsByPayeeRequest {
    budgetId: string;
    payeeId: string;
    sinceDate?: string;
    type?: GetTransactionsByPayeeTypeEnum;
    lastKnowledgeOfServer?: number;
}

export interface ImportTransactionsRequest {
    budgetId: string;
}

export interface UpdateTransactionRequest {
    budgetId: string;
    transactionId: string;
    data: PutTransactionWrapper;
}

export interface UpdateTransactionsRequest {
    budgetId: string;
    data: PatchTransactionsWrapper;
}

/**
 * 
 */
export class TransactionsApi extends runtime.BaseAPI {

    /**
     * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions (transactions with a future date) cannot be created on this endpoint.
     * Create a single transaction or multiple transactions
     */
    async createTransactionRaw(requestParameters: CreateTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SaveTransactionsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling createTransaction.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling createTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostTransactionsWrapperToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SaveTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions (transactions with a future date) cannot be created on this endpoint.
     * Create a single transaction or multiple transactions
     */
    async createTransaction(budgetId: string, data: PostTransactionsWrapper, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SaveTransactionsResponse> {
        const response = await this.createTransactionRaw({ budgetId: budgetId, data: data }, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a transaction
     * Deletes an existing transaction
     */
    async deleteTransactionRaw(requestParameters: DeleteTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling deleteTransaction.');
        }

        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling deleteTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions/{transaction_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionResponseFromJSON(jsonValue));
    }

    /**
     * Deletes a transaction
     * Deletes an existing transaction
     */
    async deleteTransaction(budgetId: string, transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionResponse> {
        const response = await this.deleteTransactionRaw({ budgetId: budgetId, transactionId: transactionId }, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single transaction
     * Single transaction
     */
    async getTransactionByIdRaw(requestParameters: GetTransactionByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getTransactionById.');
        }

        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling getTransactionById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions/{transaction_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionResponseFromJSON(jsonValue));
    }

    /**
     * Returns a single transaction
     * Single transaction
     */
    async getTransactionById(budgetId: string, transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionResponse> {
        const response = await this.getTransactionByIdRaw({ budgetId: budgetId, transactionId: transactionId }, initOverrides);
        return await response.value();
    }

    /**
     * Returns budget transactions, excluding any pending transactions
     * List transactions
     */
    async getTransactionsRaw(requestParameters: GetTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getTransactions.');
        }

        const queryParameters: any = {};

        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Returns budget transactions, excluding any pending transactions
     * List transactions
     */
    async getTransactions(budgetId: string, sinceDate?: string, type?: GetTransactionsTypeEnum, lastKnowledgeOfServer?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionsResponse> {
        const response = await this.getTransactionsRaw({ budgetId: budgetId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }

    /**
     * Returns all transactions for a specified account, excluding any pending transactions
     * List account transactions
     */
    async getTransactionsByAccountRaw(requestParameters: GetTransactionsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getTransactionsByAccount.');
        }

        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getTransactionsByAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/accounts/{account_id}/transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Returns all transactions for a specified account, excluding any pending transactions
     * List account transactions
     */
    async getTransactionsByAccount(budgetId: string, accountId: string, sinceDate?: string, type?: GetTransactionsByAccountTypeEnum, lastKnowledgeOfServer?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionsResponse> {
        const response = await this.getTransactionsByAccountRaw({ budgetId: budgetId, accountId: accountId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }

    /**
     * Returns all transactions for a specified category
     * List category transactions, excluding any pending transactions
     */
    async getTransactionsByCategoryRaw(requestParameters: GetTransactionsByCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HybridTransactionsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getTransactionsByCategory.');
        }

        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getTransactionsByCategory.');
        }

        const queryParameters: any = {};

        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/categories/{category_id}/transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"category_id"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HybridTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Returns all transactions for a specified category
     * List category transactions, excluding any pending transactions
     */
    async getTransactionsByCategory(budgetId: string, categoryId: string, sinceDate?: string, type?: GetTransactionsByCategoryTypeEnum, lastKnowledgeOfServer?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HybridTransactionsResponse> {
        const response = await this.getTransactionsByCategoryRaw({ budgetId: budgetId, categoryId: categoryId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }

    /**
     * Returns all transactions for a specified payee
     * List payee transactions, excluding any pending transactions
     */
    async getTransactionsByPayeeRaw(requestParameters: GetTransactionsByPayeeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HybridTransactionsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling getTransactionsByPayee.');
        }

        if (requestParameters.payeeId === null || requestParameters.payeeId === undefined) {
            throw new runtime.RequiredError('payeeId','Required parameter requestParameters.payeeId was null or undefined when calling getTransactionsByPayee.');
        }

        const queryParameters: any = {};

        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/payees/{payee_id}/transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"payee_id"}}`, encodeURIComponent(String(requestParameters.payeeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HybridTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Returns all transactions for a specified payee
     * List payee transactions, excluding any pending transactions
     */
    async getTransactionsByPayee(budgetId: string, payeeId: string, sinceDate?: string, type?: GetTransactionsByPayeeTypeEnum, lastKnowledgeOfServer?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HybridTransactionsResponse> {
        const response = await this.getTransactionsByPayeeRaw({ budgetId: budgetId, payeeId: payeeId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }

    /**
     * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking \"Import\" on each account in the web application or tapping the \"New Transactions\" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
     * Import transactions
     */
    async importTransactionsRaw(requestParameters: ImportTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionsImportResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling importTransactions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions/import`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsImportResponseFromJSON(jsonValue));
    }

    /**
     * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking \"Import\" on each account in the web application or tapping the \"New Transactions\" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
     * Import transactions
     */
    async importTransactions(budgetId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionsImportResponse> {
        const response = await this.importTransactionsRaw({ budgetId: budgetId }, initOverrides);
        return await response.value();
    }

    /**
     * Updates a single transaction
     * Updates an existing transaction
     */
    async updateTransactionRaw(requestParameters: UpdateTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling updateTransaction.');
        }

        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling updateTransaction.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling updateTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions/{transaction_id}`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutTransactionWrapperToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionResponseFromJSON(jsonValue));
    }

    /**
     * Updates a single transaction
     * Updates an existing transaction
     */
    async updateTransaction(budgetId: string, transactionId: string, data: PutTransactionWrapper, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionResponse> {
        const response = await this.updateTransactionRaw({ budgetId: budgetId, transactionId: transactionId, data: data }, initOverrides);
        return await response.value();
    }

    /**
     * Updates multiple transactions, by `id` or `import_id`.
     * Update multiple transactions
     */
    async updateTransactionsRaw(requestParameters: UpdateTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SaveTransactionsResponse>> {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId','Required parameter requestParameters.budgetId was null or undefined when calling updateTransactions.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling updateTransactions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Accept'] = 'application/json';

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchTransactionsWrapperToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SaveTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Updates multiple transactions, by `id` or `import_id`.
     * Update multiple transactions
     */
    async updateTransactions(budgetId: string, data: PatchTransactionsWrapper, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SaveTransactionsResponse> {
        const response = await this.updateTransactionsRaw({ budgetId: budgetId, data: data }, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetTransactionsTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
} as const;
export type GetTransactionsTypeEnum = typeof GetTransactionsTypeEnum[keyof typeof GetTransactionsTypeEnum];
/**
 * @export
 */
export const GetTransactionsByAccountTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
} as const;
export type GetTransactionsByAccountTypeEnum = typeof GetTransactionsByAccountTypeEnum[keyof typeof GetTransactionsByAccountTypeEnum];
/**
 * @export
 */
export const GetTransactionsByCategoryTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
} as const;
export type GetTransactionsByCategoryTypeEnum = typeof GetTransactionsByCategoryTypeEnum[keyof typeof GetTransactionsByCategoryTypeEnum];
/**
 * @export
 */
export const GetTransactionsByPayeeTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
} as const;
export type GetTransactionsByPayeeTypeEnum = typeof GetTransactionsByPayeeTypeEnum[keyof typeof GetTransactionsByPayeeTypeEnum];
