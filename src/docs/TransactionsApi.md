# TransactionsApi

All URIs are relative to *https://api.ynab.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTransaction**](TransactionsApi.md#createtransaction) | **POST** /budgets/{budget_id}/transactions | Create a single transaction or multiple transactions |
| [**deleteTransaction**](TransactionsApi.md#deletetransaction) | **DELETE** /budgets/{budget_id}/transactions/{transaction_id} | Delete a transaction |
| [**getTransactionById**](TransactionsApi.md#gettransactionbyid) | **GET** /budgets/{budget_id}/transactions/{transaction_id} | Get a transaction |
| [**getTransactions**](TransactionsApi.md#gettransactions) | **GET** /budgets/{budget_id}/transactions | Get all transactions |
| [**getTransactionsByAccount**](TransactionsApi.md#gettransactionsbyaccount) | **GET** /budgets/{budget_id}/accounts/{account_id}/transactions | Get all account transactions |
| [**getTransactionsByCategory**](TransactionsApi.md#gettransactionsbycategory) | **GET** /budgets/{budget_id}/categories/{category_id}/transactions | Get all category transactions |
| [**getTransactionsByMonth**](TransactionsApi.md#gettransactionsbymonth) | **GET** /budgets/{budget_id}/months/{month}/transactions | Get all plan month transactions |
| [**getTransactionsByPayee**](TransactionsApi.md#gettransactionsbypayee) | **GET** /budgets/{budget_id}/payees/{payee_id}/transactions | Get all payee transactions |
| [**importTransactions**](TransactionsApi.md#importtransactions) | **POST** /budgets/{budget_id}/transactions/import | Import transactions |
| [**updateTransaction**](TransactionsApi.md#updatetransaction) | **PUT** /budgets/{budget_id}/transactions/{transaction_id} | Update a transaction |
| [**updateTransactions**](TransactionsApi.md#updatetransactions) | **PATCH** /budgets/{budget_id}/transactions | Update multiple transactions |



## createTransaction

> SaveTransactionsResponse createTransaction(budgetId, data)

Create a single transaction or multiple transactions

Creates a single transaction or multiple transactions.  If you provide a body containing a &#x60;transaction&#x60; object, a single transaction will be created and if you provide a body containing a &#x60;transactions&#x60; array, multiple transactions will be created.  Scheduled transactions (transactions with a future date) cannot be created on this endpoint.

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { CreateTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // PostTransactionsWrapper | The transaction or transactions to create.  To create a single transaction you can specify a value for the `transaction` object and to create multiple transactions you can specify an array of `transactions`.  It is expected that you will only provide a value for one of these objects.
    data: ...,
  } satisfies CreateTransactionRequest;

  try {
    const data = await api.createTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **data** | [PostTransactionsWrapper](PostTransactionsWrapper.md) | The transaction or transactions to create.  To create a single transaction you can specify a value for the &#x60;transaction&#x60; object and to create multiple transactions you can specify an array of &#x60;transactions&#x60;.  It is expected that you will only provide a value for one of these objects. | |

### Return type

[**SaveTransactionsResponse**](SaveTransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The transaction or transactions were successfully created |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s). |  -  |
| **409** | A transaction on the same account with the same &#x60;import_id&#x60; already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTransaction

> TransactionResponse deleteTransaction(budgetId, transactionId)

Delete a transaction

Deletes a transaction

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { DeleteTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the transaction
    transactionId: transactionId_example,
  } satisfies DeleteTransactionRequest;

  try {
    const data = await api.deleteTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **transactionId** | `string` | The id of the transaction | [Defaults to `undefined`] |

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The transaction was successfully deleted |  -  |
| **404** | The transaction was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionById

> TransactionResponse getTransactionById(budgetId, transactionId)

Get a transaction

Returns a single transaction

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { GetTransactionByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the transaction
    transactionId: transactionId_example,
  } satisfies GetTransactionByIdRequest;

  try {
    const data = await api.getTransactionById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **transactionId** | `string` | The id of the transaction | [Defaults to `undefined`] |

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested transaction |  -  |
| **404** | The transaction was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactions

> TransactionsResponse getTransactions(budgetId, sinceDate, type, lastKnowledgeOfServer)

Get all transactions

Returns plan transactions, excluding any pending transactions

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { GetTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). (optional)
    sinceDate: 2013-10-20,
    // 'uncategorized' | 'unapproved' | If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported. (optional)
    type: type_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetTransactionsRequest;

  try {
    const data = await api.getTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **sinceDate** | `string` | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). | [Optional] [Defaults to `undefined`] |
| **type** | `uncategorized`, `unapproved` | If specified, only transactions of the specified type will be included. \&quot;uncategorized\&quot; and \&quot;unapproved\&quot; are currently supported. | [Optional] [Defaults to `undefined`] [Enum: uncategorized, unapproved] |
| **lastKnowledgeOfServer** | `number` | The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included. | [Optional] [Defaults to `undefined`] |

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested transactions |  -  |
| **400** | An error occurred |  -  |
| **404** | No transactions were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionsByAccount

> TransactionsResponse getTransactionsByAccount(budgetId, accountId, sinceDate, type, lastKnowledgeOfServer)

Get all account transactions

Returns all transactions for a specified account, excluding any pending transactions

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { GetTransactionsByAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the account
    accountId: accountId_example,
    // string | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). (optional)
    sinceDate: 2013-10-20,
    // 'uncategorized' | 'unapproved' | If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported. (optional)
    type: type_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetTransactionsByAccountRequest;

  try {
    const data = await api.getTransactionsByAccount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **accountId** | `string` | The id of the account | [Defaults to `undefined`] |
| **sinceDate** | `string` | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). | [Optional] [Defaults to `undefined`] |
| **type** | `uncategorized`, `unapproved` | If specified, only transactions of the specified type will be included. \&quot;uncategorized\&quot; and \&quot;unapproved\&quot; are currently supported. | [Optional] [Defaults to `undefined`] [Enum: uncategorized, unapproved] |
| **lastKnowledgeOfServer** | `number` | The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included. | [Optional] [Defaults to `undefined`] |

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested transactions |  -  |
| **404** | No transactions were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionsByCategory

> HybridTransactionsResponse getTransactionsByCategory(budgetId, categoryId, sinceDate, type, lastKnowledgeOfServer)

Get all category transactions

Returns all transactions for a specified category, excluding any pending transactions

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { GetTransactionsByCategoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the category
    categoryId: categoryId_example,
    // string | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). (optional)
    sinceDate: 2013-10-20,
    // 'uncategorized' | 'unapproved' | If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported. (optional)
    type: type_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetTransactionsByCategoryRequest;

  try {
    const data = await api.getTransactionsByCategory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **categoryId** | `string` | The id of the category | [Defaults to `undefined`] |
| **sinceDate** | `string` | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). | [Optional] [Defaults to `undefined`] |
| **type** | `uncategorized`, `unapproved` | If specified, only transactions of the specified type will be included. \&quot;uncategorized\&quot; and \&quot;unapproved\&quot; are currently supported. | [Optional] [Defaults to `undefined`] [Enum: uncategorized, unapproved] |
| **lastKnowledgeOfServer** | `number` | The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included. | [Optional] [Defaults to `undefined`] |

### Return type

[**HybridTransactionsResponse**](HybridTransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested transactions |  -  |
| **404** | No transactions were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionsByMonth

> TransactionsResponse getTransactionsByMonth(budgetId, month, sinceDate, type, lastKnowledgeOfServer)

Get all plan month transactions

Returns all transactions for a specified month, excluding any pending transactions

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { GetTransactionsByMonthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The plan month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
    month: month_example,
    // string | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). (optional)
    sinceDate: 2013-10-20,
    // 'uncategorized' | 'unapproved' | If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported. (optional)
    type: type_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetTransactionsByMonthRequest;

  try {
    const data = await api.getTransactionsByMonth(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **month** | `string` | The plan month in ISO format (e.g. 2016-12-01) (\&quot;current\&quot; can also be used to specify the current calendar month (UTC)) | [Defaults to `undefined`] |
| **sinceDate** | `string` | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). | [Optional] [Defaults to `undefined`] |
| **type** | `uncategorized`, `unapproved` | If specified, only transactions of the specified type will be included. \&quot;uncategorized\&quot; and \&quot;unapproved\&quot; are currently supported. | [Optional] [Defaults to `undefined`] [Enum: uncategorized, unapproved] |
| **lastKnowledgeOfServer** | `number` | The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included. | [Optional] [Defaults to `undefined`] |

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested transactions |  -  |
| **404** | No transactions were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransactionsByPayee

> HybridTransactionsResponse getTransactionsByPayee(budgetId, payeeId, sinceDate, type, lastKnowledgeOfServer)

Get all payee transactions

Returns all transactions for a specified payee, excluding any pending transactions

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { GetTransactionsByPayeeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the payee
    payeeId: payeeId_example,
    // string | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). (optional)
    sinceDate: 2013-10-20,
    // 'uncategorized' | 'unapproved' | If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported. (optional)
    type: type_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetTransactionsByPayeeRequest;

  try {
    const data = await api.getTransactionsByPayee(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **payeeId** | `string` | The id of the payee | [Defaults to `undefined`] |
| **sinceDate** | `string` | If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30). | [Optional] [Defaults to `undefined`] |
| **type** | `uncategorized`, `unapproved` | If specified, only transactions of the specified type will be included. \&quot;uncategorized\&quot; and \&quot;unapproved\&quot; are currently supported. | [Optional] [Defaults to `undefined`] [Enum: uncategorized, unapproved] |
| **lastKnowledgeOfServer** | `number` | The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included. | [Optional] [Defaults to `undefined`] |

### Return type

[**HybridTransactionsResponse**](HybridTransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested transactions |  -  |
| **404** | No transactions were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importTransactions

> TransactionsImportResponse importTransactions(budgetId)

Import transactions

Imports available transactions on all linked accounts for the given plan.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking \&quot;Import\&quot; on each account in the web application or tapping the \&quot;New Transactions\&quot; banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { ImportTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
  } satisfies ImportTransactionsRequest;

  try {
    const data = await api.importTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |

### Return type

[**TransactionsImportResponse**](TransactionsImportResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The request was successful but there were no transactions to import |  -  |
| **201** | One or more transactions were imported successfully |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTransaction

> TransactionResponse updateTransaction(budgetId, transactionId, data)

Update a transaction

Updates a single transaction

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { UpdateTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the transaction
    transactionId: transactionId_example,
    // PutTransactionWrapper | The transaction to update
    data: ...,
  } satisfies UpdateTransactionRequest;

  try {
    const data = await api.updateTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **transactionId** | `string` | The id of the transaction | [Defaults to `undefined`] |
| **data** | [PutTransactionWrapper](PutTransactionWrapper.md) | The transaction to update | |

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The transaction was successfully updated |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTransactions

> SaveTransactionsResponse updateTransactions(budgetId, data)

Update multiple transactions

Updates multiple transactions, by &#x60;id&#x60; or &#x60;import_id&#x60;.

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { UpdateTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // PatchTransactionsWrapper | The transactions to update. Each transaction must have either an `id` or `import_id` specified. If `id` is specified as null an `import_id` value can be provided which will allow transaction(s) to be updated by its `import_id`. If an `id` is specified, it will always be used for lookup.  You should not specify both `id` and `import_id`.  Updating an `import_id` on an existing transaction is not allowed; if an `import_id` is specified, it will only be used to lookup the transaction.
    data: ...,
  } satisfies UpdateTransactionsRequest;

  try {
    const data = await api.updateTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **budgetId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **data** | [PatchTransactionsWrapper](PatchTransactionsWrapper.md) | The transactions to update. Each transaction must have either an &#x60;id&#x60; or &#x60;import_id&#x60; specified. If &#x60;id&#x60; is specified as null an &#x60;import_id&#x60; value can be provided which will allow transaction(s) to be updated by its &#x60;import_id&#x60;. If an &#x60;id&#x60; is specified, it will always be used for lookup.  You should not specify both &#x60;id&#x60; and &#x60;import_id&#x60;.  Updating an &#x60;import_id&#x60; on an existing transaction is not allowed; if an &#x60;import_id&#x60; is specified, it will only be used to lookup the transaction. | |

### Return type

[**SaveTransactionsResponse**](SaveTransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **209** | The transactions were successfully updated |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

