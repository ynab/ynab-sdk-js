# PlansApi

All URIs are relative to *https://api.ynab.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPlanById**](PlansApi.md#getplanbyid) | **GET** /plans/{plan_id} | Get a plan |
| [**getPlanSettingsById**](PlansApi.md#getplansettingsbyid) | **GET** /plans/{plan_id}/settings | Get plan settings |
| [**getPlans**](PlansApi.md#getplans) | **GET** /plans | Get all plans |



## getPlanById

> PlanDetailResponse getPlanById(planId, lastKnowledgeOfServer)

Get a plan

Returns a single plan with all related entities.  This resource is effectively a full plan export.

### Example

```ts
import {
  Configuration,
  PlansApi,
} from '';
import type { GetPlanByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PlansApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetPlanByIdRequest;

  try {
    const data = await api.getPlanById(body);
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

[**PlanDetailResponse**](PlanDetailResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested plan |  -  |
| **404** | The specified plan was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanSettingsById

> PlanSettingsResponse getPlanSettingsById(planId)

Get plan settings

Returns settings for a plan

### Example

```ts
import {
  Configuration,
  PlansApi,
} from '';
import type { GetPlanSettingsByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PlansApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
  } satisfies GetPlanSettingsByIdRequest;

  try {
    const data = await api.getPlanSettingsById(body);
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

[**PlanSettingsResponse**](PlanSettingsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested plan settings |  -  |
| **404** | The specified plan was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlans

> PlanSummaryResponse getPlans(includeAccounts)

Get all plans

Returns plans list with summary information

### Example

```ts
import {
  Configuration,
  PlansApi,
} from '';
import type { GetPlansRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PlansApi(config);

  const body = {
    // boolean | Whether to include the list of plan accounts (optional)
    includeAccounts: true,
  } satisfies GetPlansRequest;

  try {
    const data = await api.getPlans(body);
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
| **includeAccounts** | `boolean` | Whether to include the list of plan accounts | [Optional] [Defaults to `undefined`] |

### Return type

[**PlanSummaryResponse**](PlanSummaryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of plans |  -  |
| **404** | No plans were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

