"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.ynab.com
 *
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransactionsByPayeeTypeEnum = exports.GetTransactionsByMonthTypeEnum = exports.GetTransactionsByCategoryTypeEnum = exports.GetTransactionsByAccountTypeEnum = exports.GetTransactionsTypeEnum = exports.TransactionsApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class TransactionsApi extends runtime.BaseAPI {
    /**
     * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions (transactions with a future date) cannot be created on this endpoint.
     * Create a single transaction or multiple transactions
     */
    async createTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling createTransaction.');
        }
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling createTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
            body: (0, index_1.PostTransactionsWrapperToJSON)(requestParameters.data),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SaveTransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions (transactions with a future date) cannot be created on this endpoint.
     * Create a single transaction or multiple transactions
     */
    async createTransaction(budgetId, data, initOverrides) {
        const response = await this.createTransactionRaw({ budgetId: budgetId, data: data }, initOverrides);
        return await response.value();
    }
    /**
     * Deletes a transaction
     * Deletes an existing transaction
     */
    async deleteTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling deleteTransaction.');
        }
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId', 'Required parameter requestParameters.transactionId was null or undefined when calling deleteTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionResponseFromJSON)(jsonValue));
    }
    /**
     * Deletes a transaction
     * Deletes an existing transaction
     */
    async deleteTransaction(budgetId, transactionId, initOverrides) {
        const response = await this.deleteTransactionRaw({ budgetId: budgetId, transactionId: transactionId }, initOverrides);
        return await response.value();
    }
    /**
     * Returns a single transaction
     * Single transaction
     */
    async getTransactionByIdRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getTransactionById.');
        }
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId', 'Required parameter requestParameters.transactionId was null or undefined when calling getTransactionById.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionResponseFromJSON)(jsonValue));
    }
    /**
     * Returns a single transaction
     * Single transaction
     */
    async getTransactionById(budgetId, transactionId, initOverrides) {
        const response = await this.getTransactionByIdRaw({ budgetId: budgetId, transactionId: transactionId }, initOverrides);
        return await response.value();
    }
    /**
     * Returns budget transactions, excluding any pending transactions
     * List transactions
     */
    async getTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getTransactions.');
        }
        const queryParameters = {};
        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns budget transactions, excluding any pending transactions
     * List transactions
     */
    async getTransactions(budgetId, sinceDate, type, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getTransactionsRaw({ budgetId: budgetId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all transactions for a specified account, excluding any pending transactions
     * List account transactions
     */
    async getTransactionsByAccountRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getTransactionsByAccount.');
        }
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getTransactionsByAccount.');
        }
        const queryParameters = {};
        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all transactions for a specified account, excluding any pending transactions
     * List account transactions
     */
    async getTransactionsByAccount(budgetId, accountId, sinceDate, type, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getTransactionsByAccountRaw({ budgetId: budgetId, accountId: accountId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all transactions for a specified category
     * List category transactions, excluding any pending transactions
     */
    async getTransactionsByCategoryRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getTransactionsByCategory.');
        }
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId', 'Required parameter requestParameters.categoryId was null or undefined when calling getTransactionsByCategory.');
        }
        const queryParameters = {};
        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.HybridTransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all transactions for a specified category
     * List category transactions, excluding any pending transactions
     */
    async getTransactionsByCategory(budgetId, categoryId, sinceDate, type, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getTransactionsByCategoryRaw({ budgetId: budgetId, categoryId: categoryId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all transactions for a specified month
     * List transactions in month, excluding any pending transactions
     */
    async getTransactionsByMonthRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getTransactionsByMonth.');
        }
        if (requestParameters.month === null || requestParameters.month === undefined) {
            throw new runtime.RequiredError('month', 'Required parameter requestParameters.month was null or undefined when calling getTransactionsByMonth.');
        }
        const queryParameters = {};
        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }
        const headerParameters = {};
        headerParameters['Accept'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/budgets/{budget_id}/months/{month}/transactions`.replace(`{${"budget_id"}}`, encodeURIComponent(String(requestParameters.budgetId))).replace(`{${"month"}}`, encodeURIComponent(String(requestParameters.month))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.HybridTransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all transactions for a specified month
     * List transactions in month, excluding any pending transactions
     */
    async getTransactionsByMonth(budgetId, month, sinceDate, type, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getTransactionsByMonthRaw({ budgetId: budgetId, month: month, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
    /**
     * Returns all transactions for a specified payee
     * List payee transactions, excluding any pending transactions
     */
    async getTransactionsByPayeeRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling getTransactionsByPayee.');
        }
        if (requestParameters.payeeId === null || requestParameters.payeeId === undefined) {
            throw new runtime.RequiredError('payeeId', 'Required parameter requestParameters.payeeId was null or undefined when calling getTransactionsByPayee.');
        }
        const queryParameters = {};
        if (requestParameters.sinceDate !== undefined) {
            queryParameters['since_date'] = requestParameters.sinceDate;
        }
        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }
        if (requestParameters.lastKnowledgeOfServer !== undefined) {
            queryParameters['last_knowledge_of_server'] = requestParameters.lastKnowledgeOfServer;
        }
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.HybridTransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all transactions for a specified payee
     * List payee transactions, excluding any pending transactions
     */
    async getTransactionsByPayee(budgetId, payeeId, sinceDate, type, lastKnowledgeOfServer, initOverrides) {
        const response = await this.getTransactionsByPayeeRaw({ budgetId: budgetId, payeeId: payeeId, sinceDate: sinceDate, type: type, lastKnowledgeOfServer: lastKnowledgeOfServer }, initOverrides);
        return await response.value();
    }
    /**
     * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking \"Import\" on each account in the web application or tapping the \"New Transactions\" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
     * Import transactions
     */
    async importTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling importTransactions.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionsImportResponseFromJSON)(jsonValue));
    }
    /**
     * Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking \"Import\" on each account in the web application or tapping the \"New Transactions\" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
     * Import transactions
     */
    async importTransactions(budgetId, initOverrides) {
        const response = await this.importTransactionsRaw({ budgetId: budgetId }, initOverrides);
        return await response.value();
    }
    /**
     * Updates a single transaction
     * Updates an existing transaction
     */
    async updateTransactionRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling updateTransaction.');
        }
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId', 'Required parameter requestParameters.transactionId was null or undefined when calling updateTransaction.');
        }
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling updateTransaction.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
            body: (0, index_1.PutTransactionWrapperToJSON)(requestParameters.data),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TransactionResponseFromJSON)(jsonValue));
    }
    /**
     * Updates a single transaction
     * Updates an existing transaction
     */
    async updateTransaction(budgetId, transactionId, data, initOverrides) {
        const response = await this.updateTransactionRaw({ budgetId: budgetId, transactionId: transactionId, data: data }, initOverrides);
        return await response.value();
    }
    /**
     * Updates multiple transactions, by `id` or `import_id`.
     * Update multiple transactions
     */
    async updateTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.budgetId === null || requestParameters.budgetId === undefined) {
            throw new runtime.RequiredError('budgetId', 'Required parameter requestParameters.budgetId was null or undefined when calling updateTransactions.');
        }
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling updateTransactions.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
            body: (0, index_1.PatchTransactionsWrapperToJSON)(requestParameters.data),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SaveTransactionsResponseFromJSON)(jsonValue));
    }
    /**
     * Updates multiple transactions, by `id` or `import_id`.
     * Update multiple transactions
     */
    async updateTransactions(budgetId, data, initOverrides) {
        const response = await this.updateTransactionsRaw({ budgetId: budgetId, data: data }, initOverrides);
        return await response.value();
    }
}
exports.TransactionsApi = TransactionsApi;
/**
 * @export
 */
exports.GetTransactionsTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
};
/**
 * @export
 */
exports.GetTransactionsByAccountTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
};
/**
 * @export
 */
exports.GetTransactionsByCategoryTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
};
/**
 * @export
 */
exports.GetTransactionsByMonthTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
};
/**
 * @export
 */
exports.GetTransactionsByPayeeTypeEnum = {
    Uncategorized: 'uncategorized',
    Unapproved: 'unapproved'
};
