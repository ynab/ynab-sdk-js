# PayeesApi

All URIs are relative to *https://api.ynab.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPayeeById**](PayeesApi.md#getpayeebyid) | **GET** /budgets/{plan_id}/payees/{payee_id} | Get a payee |
| [**getPayees**](PayeesApi.md#getpayees) | **GET** /budgets/{plan_id}/payees | Get all payees |
| [**updatePayee**](PayeesApi.md#updatepayee) | **PATCH** /budgets/{plan_id}/payees/{payee_id} | Update a payee |



## getPayeeById

> PayeeResponse getPayeeById(planId, payeeId)

Get a payee

Returns a single payee

### Example

```ts
import {
  Configuration,
  PayeesApi,
} from '';
import type { GetPayeeByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayeesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The id of the payee
    payeeId: payeeId_example,
  } satisfies GetPayeeByIdRequest;

  try {
    const data = await api.getPayeeById(body);
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
| **planId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **payeeId** | `string` | The id of the payee | [Defaults to `undefined`] |

### Return type

[**PayeeResponse**](PayeeResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested payee |  -  |
| **404** | The payee was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPayees

> PayeesResponse getPayees(planId, lastKnowledgeOfServer)

Get all payees

Returns all payees

### Example

```ts
import {
  Configuration,
  PayeesApi,
} from '';
import type { GetPayeesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayeesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetPayeesRequest;

  try {
    const data = await api.getPayees(body);
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
| **planId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **lastKnowledgeOfServer** | `number` | The starting server knowledge.  If provided, only entities that have changed since &#x60;last_knowledge_of_server&#x60; will be included. | [Optional] [Defaults to `undefined`] |

### Return type

[**PayeesResponse**](PayeesResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested list of payees |  -  |
| **404** | No payees were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePayee

> SavePayeeResponse updatePayee(planId, payeeId, data)

Update a payee

Update a payee

### Example

```ts
import {
  Configuration,
  PayeesApi,
} from '';
import type { UpdatePayeeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayeesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The id of the payee
    payeeId: payeeId_example,
    // PatchPayeeWrapper | The payee to update
    data: ...,
  } satisfies UpdatePayeeRequest;

  try {
    const data = await api.updatePayee(body);
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
| **planId** | `string` | The id of the plan. \&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan). | [Defaults to `undefined`] |
| **payeeId** | `string` | The id of the payee | [Defaults to `undefined`] |
| **data** | [PatchPayeeWrapper](PatchPayeeWrapper.md) | The payee to update | |

### Return type

[**SavePayeeResponse**](SavePayeeResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The payee was successfully updated |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

