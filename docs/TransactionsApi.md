# TransactionsApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCreateTransactions**](TransactionsApi.md#bulkCreateTransactions) | **POST** /budgets/{budget_id}/transactions/bulk | Bulk create transactions
[**createTransaction**](TransactionsApi.md#createTransaction) | **POST** /budgets/{budget_id}/transactions | Create new transaction
[**getTransactionById**](TransactionsApi.md#getTransactionById) | **GET** /budgets/{budget_id}/transactions/{transaction_id} | Single transaction
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /budgets/{budget_id}/transactions | List transactions
[**getTransactionsByAccount**](TransactionsApi.md#getTransactionsByAccount) | **GET** /budgets/{budget_id}/accounts/{account_id}/transactions | List account transactions
[**getTransactionsByCategory**](TransactionsApi.md#getTransactionsByCategory) | **GET** /budgets/{budget_id}/categories/{category_id}/transactions | List category transactions
[**getTransactionsByPayee**](TransactionsApi.md#getTransactionsByPayee) | **GET** /budgets/{budget_id}/payees/{payee_id}/transactions | List payee transactions
[**updateTransaction**](TransactionsApi.md#updateTransaction) | **PUT** /budgets/{budget_id}/transactions/{transaction_id} | Updates an existing transaction


<a name="bulkCreateTransactions"></a>
# **bulkCreateTransactions**
> BulkResponse bulkCreateTransactions(budgetId, transactions)

Bulk create transactions

Creates multiple transactions

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **transactions** | [**BulkTransactions**](BulkTransactions.md)| The list of Transactions to create. | 

### Return type

[**BulkResponse**](BulkResponse.md)

<a name="createTransaction"></a>
# **createTransaction**
> TransactionResponse createTransaction(budgetId, transaction)

Create new transaction

Creates a transaction

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **transaction** | [**SaveTransactionWrapper**](SaveTransactionWrapper.md)| The Transaction to create. | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

<a name="getTransactionById"></a>
# **getTransactionById**
> TransactionResponse getTransactionById(budgetId, transactionId)

Single transaction

Returns a single transaction

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **transactionId** | [**String**](.md)| The ID of the Transaction. | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

<a name="getTransactions"></a>
# **getTransactions**
> TransactionsResponse getTransactions(budgetId, opts)

List transactions

Returns budget transactions

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (&#39;uncategorized&#39; and &#39;unapproved&#39; are currently supported) | [optional] 

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

<a name="getTransactionsByAccount"></a>
# **getTransactionsByAccount**
> TransactionsResponse getTransactionsByAccount(budgetId, accountId, opts)

List account transactions

Returns all transactions for a specified account

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **accountId** | [**String**](.md)| The ID of the Account. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (i.e. &#39;uncategorized&#39;, &#39;unapproved&#39;) | [optional] 

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

<a name="getTransactionsByCategory"></a>
# **getTransactionsByCategory**
> HybridTransactionsResponse getTransactionsByCategory(budgetId, categoryId, opts)

List category transactions

Returns all transactions for a specified category

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **categoryId** | [**String**](.md)| The ID of the Category. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (i.e. &#39;uncategorized&#39;, &#39;unapproved&#39;) | [optional] 

### Return type

[**HybridTransactionsResponse**](HybridTransactionsResponse.md)

<a name="getTransactionsByPayee"></a>
# **getTransactionsByPayee**
> HybridTransactionsResponse getTransactionsByPayee(budgetId, payeeId, opts)

List payee transactions

Returns all transactions for a specified payee

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **payeeId** | [**String**](.md)| The ID of the Payee. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (i.e. &#39;uncategorized&#39;, &#39;unapproved&#39;) | [optional] 

### Return type

[**HybridTransactionsResponse**](HybridTransactionsResponse.md)

<a name="updateTransaction"></a>
# **updateTransaction**
> TransactionResponse updateTransaction(budgetId, transactionId, transaction)

Updates an existing transaction

Updates a transaction

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **transactionId** | [**String**](.md)| The ID of the Transaction. | 
 **transaction** | [**SaveTransactionWrapper**](SaveTransactionWrapper.md)| The Transaction to update. | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

