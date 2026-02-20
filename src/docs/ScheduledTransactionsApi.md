# ScheduledTransactionsApi

All URIs are relative to *https://api.ynab.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createScheduledTransaction**](ScheduledTransactionsApi.md#createscheduledtransaction) | **POST** /budgets/{budget_id}/scheduled_transactions | Create a scheduled transaction |
| [**deleteScheduledTransaction**](ScheduledTransactionsApi.md#deletescheduledtransaction) | **DELETE** /budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id} | Delete a scheduled transaction |
| [**getScheduledTransactionById**](ScheduledTransactionsApi.md#getscheduledtransactionbyid) | **GET** /budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id} | Get a scheduled transaction |
| [**getScheduledTransactions**](ScheduledTransactionsApi.md#getscheduledtransactions) | **GET** /budgets/{budget_id}/scheduled_transactions | Get all scheduled transactions |
| [**updateScheduledTransaction**](ScheduledTransactionsApi.md#updatescheduledtransaction) | **PUT** /budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id} | Update a scheduled transaction |



## createScheduledTransaction

> ScheduledTransactionResponse createScheduledTransaction(budgetId, data)

Create a scheduled transaction

Creates a single scheduled transaction (a transaction with a future date).

### Example

```ts
import {
  Configuration,
  ScheduledTransactionsApi,
} from '';
import type { CreateScheduledTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ScheduledTransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // PostScheduledTransactionWrapper | The scheduled transaction to create
    data: ...,
  } satisfies CreateScheduledTransactionRequest;

  try {
    const data = await api.createScheduledTransaction(body);
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
| **data** | [PostScheduledTransactionWrapper](PostScheduledTransactionWrapper.md) | The scheduled transaction to create | |

### Return type

[**ScheduledTransactionResponse**](ScheduledTransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The scheduled transaction was successfully created |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteScheduledTransaction

> ScheduledTransactionResponse deleteScheduledTransaction(budgetId, scheduledTransactionId)

Delete a scheduled transaction

Deletes a scheduled transaction

### Example

```ts
import {
  Configuration,
  ScheduledTransactionsApi,
} from '';
import type { DeleteScheduledTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ScheduledTransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the scheduled transaction
    scheduledTransactionId: scheduledTransactionId_example,
  } satisfies DeleteScheduledTransactionRequest;

  try {
    const data = await api.deleteScheduledTransaction(body);
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
| **scheduledTransactionId** | `string` | The id of the scheduled transaction | [Defaults to `undefined`] |

### Return type

[**ScheduledTransactionResponse**](ScheduledTransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The scheduled transaction was successfully deleted |  -  |
| **404** | The scheduled transaction was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getScheduledTransactionById

> ScheduledTransactionResponse getScheduledTransactionById(budgetId, scheduledTransactionId)

Get a scheduled transaction

Returns a single scheduled transaction

### Example

```ts
import {
  Configuration,
  ScheduledTransactionsApi,
} from '';
import type { GetScheduledTransactionByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ScheduledTransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the scheduled transaction
    scheduledTransactionId: scheduledTransactionId_example,
  } satisfies GetScheduledTransactionByIdRequest;

  try {
    const data = await api.getScheduledTransactionById(body);
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
| **scheduledTransactionId** | `string` | The id of the scheduled transaction | [Defaults to `undefined`] |

### Return type

[**ScheduledTransactionResponse**](ScheduledTransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested Scheduled Transaction |  -  |
| **404** | The scheduled transaction was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getScheduledTransactions

> ScheduledTransactionsResponse getScheduledTransactions(budgetId, lastKnowledgeOfServer)

Get all scheduled transactions

Returns all scheduled transactions

### Example

```ts
import {
  Configuration,
  ScheduledTransactionsApi,
} from '';
import type { GetScheduledTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ScheduledTransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetScheduledTransactionsRequest;

  try {
    const data = await api.getScheduledTransactions(body);
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
| **lastKnowledgeOfServer** | `number` | The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included. | [Optional] [Defaults to `undefined`] |

### Return type

[**ScheduledTransactionsResponse**](ScheduledTransactionsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested scheduled transactions |  -  |
| **404** | No scheduled transactions were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateScheduledTransaction

> ScheduledTransactionResponse updateScheduledTransaction(budgetId, scheduledTransactionId, putScheduledTransactionWrapper)

Update a scheduled transaction

Updates a single scheduled transaction

### Example

```ts
import {
  Configuration,
  ScheduledTransactionsApi,
} from '';
import type { UpdateScheduledTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ScheduledTransactionsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    budgetId: budgetId_example,
    // string | The id of the scheduled transaction
    scheduledTransactionId: scheduledTransactionId_example,
    // PutScheduledTransactionWrapper | The scheduled transaction to update
    putScheduledTransactionWrapper: ...,
  } satisfies UpdateScheduledTransactionRequest;

  try {
    const data = await api.updateScheduledTransaction(body);
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
| **scheduledTransactionId** | `string` | The id of the scheduled transaction | [Defaults to `undefined`] |
| **putScheduledTransactionWrapper** | [PutScheduledTransactionWrapper](PutScheduledTransactionWrapper.md) | The scheduled transaction to update | |

### Return type

[**ScheduledTransactionResponse**](ScheduledTransactionResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The scheduled transaction was successfully updated |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

