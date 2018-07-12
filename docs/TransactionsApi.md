# YnabApiEndpoints.TransactionsApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCreateTransactions**](TransactionsApi.md#bulkCreateTransactions) | **POST** /budgets/{budget_id}/transactions/bulk | Bulk create transactions
[**createTransaction**](TransactionsApi.md#createTransaction) | **POST** /budgets/{budget_id}/transactions | Create new transaction
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /budgets/{budget_id}/transactions | List transactions
[**getTransactionsByAccount**](TransactionsApi.md#getTransactionsByAccount) | **GET** /budgets/{budget_id}/accounts/{account_id}/transactions | List account transactions
[**getTransactionsByCategory**](TransactionsApi.md#getTransactionsByCategory) | **GET** /budgets/{budget_id}/categories/{category_id}/transactions | List category transactions
[**getTransactionsById**](TransactionsApi.md#getTransactionsById) | **GET** /budgets/{budget_id}/transactions/{transaction_id} | Single transaction
[**getTransactionsByPayee**](TransactionsApi.md#getTransactionsByPayee) | **GET** /budgets/{budget_id}/payees/{payee_id}/transactions | List payee transactions
[**updateTransaction**](TransactionsApi.md#updateTransaction) | **PUT** /budgets/{budget_id}/transactions/{transaction_id} | Updates an existing transaction


<a name="bulkCreateTransactions"></a>
# **bulkCreateTransactions**
> BulkResponse bulkCreateTransactions(budgetId, transactions)

Bulk create transactions

Creates multiple transactions

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var transactions = new YnabApiEndpoints.BulkTransactions(); // BulkTransactions | The list of Transactions to create.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkCreateTransactions(budgetId, transactions, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **transactions** | [**BulkTransactions**](BulkTransactions.md)| The list of Transactions to create. | 

### Return type

[**BulkResponse**](BulkResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTransaction"></a>
# **createTransaction**
> TransactionResponse createTransaction(budgetId, transaction)

Create new transaction

Creates a transaction

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var transaction = new YnabApiEndpoints.SaveTransactionWrapper(); // SaveTransactionWrapper | The Transaction to create.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTransaction(budgetId, transaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **transaction** | [**SaveTransactionWrapper**](SaveTransactionWrapper.md)| The Transaction to create. | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactions"></a>
# **getTransactions**
> TransactionsResponse getTransactions(budgetId, opts)

List transactions

Returns budget transactions

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var opts = { 
  'sinceDate': new Date("2013-10-20"), // Date | Only return transactions on or after this date.
  'type': "type_example" // String | Only return transactions of a certain type ('uncategorized' and 'unapproved' are currently supported)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactions(budgetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (&#39;uncategorized&#39; and &#39;unapproved&#39; are currently supported) | [optional] 

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionsByAccount"></a>
# **getTransactionsByAccount**
> TransactionsResponse getTransactionsByAccount(budgetId, accountId, opts)

List account transactions

Returns all transactions for a specified account

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var accountId = "accountId_example"; // String | The ID of the Account.

var opts = { 
  'sinceDate': new Date("2013-10-20"), // Date | Only return transactions on or after this date.
  'type': "type_example" // String | Only return transactions of a certain type (i.e. 'uncategorized', 'unapproved')
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionsByAccount(budgetId, accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **accountId** | [**String**](.md)| The ID of the Account. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (i.e. &#39;uncategorized&#39;, &#39;unapproved&#39;) | [optional] 

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionsByCategory"></a>
# **getTransactionsByCategory**
> HybridTransactionsResponse getTransactionsByCategory(budgetId, categoryId, opts)

List category transactions

Returns all transactions for a specified category

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var categoryId = "categoryId_example"; // String | The ID of the Category.

var opts = { 
  'sinceDate': new Date("2013-10-20"), // Date | Only return transactions on or after this date.
  'type': "type_example" // String | Only return transactions of a certain type (i.e. 'uncategorized', 'unapproved')
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionsByCategory(budgetId, categoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **categoryId** | [**String**](.md)| The ID of the Category. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (i.e. &#39;uncategorized&#39;, &#39;unapproved&#39;) | [optional] 

### Return type

[**HybridTransactionsResponse**](HybridTransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionsById"></a>
# **getTransactionsById**
> TransactionResponse getTransactionsById(budgetId, transactionId)

Single transaction

Returns a single transaction

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var transactionId = "transactionId_example"; // String | The ID of the Transaction.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionsById(budgetId, transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **transactionId** | [**String**](.md)| The ID of the Transaction. | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionsByPayee"></a>
# **getTransactionsByPayee**
> HybridTransactionsResponse getTransactionsByPayee(budgetId, payeeId, opts)

List payee transactions

Returns all transactions for a specified payee

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var payeeId = "payeeId_example"; // String | The ID of the Payee.

var opts = { 
  'sinceDate': new Date("2013-10-20"), // Date | Only return transactions on or after this date.
  'type': "type_example" // String | Only return transactions of a certain type (i.e. 'uncategorized', 'unapproved')
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionsByPayee(budgetId, payeeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **payeeId** | [**String**](.md)| The ID of the Payee. | 
 **sinceDate** | **Date**| Only return transactions on or after this date. | [optional] 
 **type** | **String**| Only return transactions of a certain type (i.e. &#39;uncategorized&#39;, &#39;unapproved&#39;) | [optional] 

### Return type

[**HybridTransactionsResponse**](HybridTransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTransaction"></a>
# **updateTransaction**
> TransactionResponse updateTransaction(budgetId, transactionId, transaction)

Updates an existing transaction

Updates a transaction

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.TransactionsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var transactionId = "transactionId_example"; // String | The ID of the Transaction.

var transaction = new YnabApiEndpoints.SaveTransactionWrapper(); // SaveTransactionWrapper | The Transaction to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTransaction(budgetId, transactionId, transaction, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **transactionId** | [**String**](.md)| The ID of the Transaction. | 
 **transaction** | [**SaveTransactionWrapper**](SaveTransactionWrapper.md)| The Transaction to update. | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

