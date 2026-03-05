# MoneyMovementsApi

All URIs are relative to *https://api.ynab.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMoneyMovementGroups**](MoneyMovementsApi.md#getmoneymovementgroups) | **GET** /plans/{plan_id}/money_movement_groups | Get all money movement groups |
| [**getMoneyMovementGroupsByMonth**](MoneyMovementsApi.md#getmoneymovementgroupsbymonth) | **GET** /plans/{plan_id}/months/{month}/money_movement_groups | Get money movement groups for a plan month |
| [**getMoneyMovements**](MoneyMovementsApi.md#getmoneymovements) | **GET** /plans/{plan_id}/money_movements | Get all money movements |
| [**getMoneyMovementsByMonth**](MoneyMovementsApi.md#getmoneymovementsbymonth) | **GET** /plans/{plan_id}/months/{month}/money_movements | Get money movements for a plan month |



## getMoneyMovementGroups

> MoneyMovementGroupsResponse getMoneyMovementGroups(planId)

Get all money movement groups

Returns all money movement groups

### Example

```ts
import {
  Configuration,
  MoneyMovementsApi,
} from '';
import type { GetMoneyMovementGroupsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MoneyMovementsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
  } satisfies GetMoneyMovementGroupsRequest;

  try {
    const data = await api.getMoneyMovementGroups(body);
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

### Return type

[**MoneyMovementGroupsResponse**](MoneyMovementGroupsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested money movement groups |  -  |
| **404** | No money movement groups were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMoneyMovementGroupsByMonth

> MoneyMovementGroupsResponse getMoneyMovementGroupsByMonth(planId, month)

Get money movement groups for a plan month

Returns all money movement groups for a specific month

### Example

```ts
import {
  Configuration,
  MoneyMovementsApi,
} from '';
import type { GetMoneyMovementGroupsByMonthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MoneyMovementsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The plan month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
    month: 2013-10-20,
  } satisfies GetMoneyMovementGroupsByMonthRequest;

  try {
    const data = await api.getMoneyMovementGroupsByMonth(body);
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
| **month** | `string` | The plan month in ISO format (e.g. 2016-12-01) (\&quot;current\&quot; can also be used to specify the current calendar month (UTC)) | [Defaults to `undefined`] |

### Return type

[**MoneyMovementGroupsResponse**](MoneyMovementGroupsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested money movement groups |  -  |
| **404** | No money movement groups were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMoneyMovements

> MoneyMovementsResponse getMoneyMovements(planId)

Get all money movements

Returns all money movements

### Example

```ts
import {
  Configuration,
  MoneyMovementsApi,
} from '';
import type { GetMoneyMovementsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MoneyMovementsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
  } satisfies GetMoneyMovementsRequest;

  try {
    const data = await api.getMoneyMovements(body);
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

### Return type

[**MoneyMovementsResponse**](MoneyMovementsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested money movements |  -  |
| **404** | No money movements were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMoneyMovementsByMonth

> MoneyMovementsResponse getMoneyMovementsByMonth(planId, month)

Get money movements for a plan month

Returns all money movements for a specific month

### Example

```ts
import {
  Configuration,
  MoneyMovementsApi,
} from '';
import type { GetMoneyMovementsByMonthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MoneyMovementsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The plan month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
    month: 2013-10-20,
  } satisfies GetMoneyMovementsByMonthRequest;

  try {
    const data = await api.getMoneyMovementsByMonth(body);
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
| **month** | `string` | The plan month in ISO format (e.g. 2016-12-01) (\&quot;current\&quot; can also be used to specify the current calendar month (UTC)) | [Defaults to `undefined`] |

### Return type

[**MoneyMovementsResponse**](MoneyMovementsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested money movements |  -  |
| **404** | No money movements were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

