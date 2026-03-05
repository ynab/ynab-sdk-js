# PayeeLocationsApi

All URIs are relative to *https://api.ynab.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPayeeLocationById**](PayeeLocationsApi.md#getpayeelocationbyid) | **GET** /plans/{plan_id}/payee_locations/{payee_location_id} | Get a payee location |
| [**getPayeeLocations**](PayeeLocationsApi.md#getpayeelocations) | **GET** /plans/{plan_id}/payee_locations | Get all payee locations |
| [**getPayeeLocationsByPayee**](PayeeLocationsApi.md#getpayeelocationsbypayee) | **GET** /plans/{plan_id}/payees/{payee_id}/payee_locations | Get all locations for a payee |



## getPayeeLocationById

> PayeeLocationResponse getPayeeLocationById(planId, payeeLocationId)

Get a payee location

Returns a single payee location

### Example

```ts
import {
  Configuration,
  PayeeLocationsApi,
} from '';
import type { GetPayeeLocationByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayeeLocationsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | id of payee location
    payeeLocationId: payeeLocationId_example,
  } satisfies GetPayeeLocationByIdRequest;

  try {
    const data = await api.getPayeeLocationById(body);
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
| **payeeLocationId** | `string` | id of payee location | [Defaults to `undefined`] |

### Return type

[**PayeeLocationResponse**](PayeeLocationResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The payee location |  -  |
| **404** | The payee location was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPayeeLocations

> PayeeLocationsResponse getPayeeLocations(planId)

Get all payee locations

Returns all payee locations

### Example

```ts
import {
  Configuration,
  PayeeLocationsApi,
} from '';
import type { GetPayeeLocationsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayeeLocationsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
  } satisfies GetPayeeLocationsRequest;

  try {
    const data = await api.getPayeeLocations(body);
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

[**PayeeLocationsResponse**](PayeeLocationsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of payee locations |  -  |
| **404** | No payees locations were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPayeeLocationsByPayee

> PayeeLocationsResponse getPayeeLocationsByPayee(planId, payeeId)

Get all locations for a payee

Returns all payee locations for a specified payee

### Example

```ts
import {
  Configuration,
  PayeeLocationsApi,
} from '';
import type { GetPayeeLocationsByPayeeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayeeLocationsApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | id of payee
    payeeId: payeeId_example,
  } satisfies GetPayeeLocationsByPayeeRequest;

  try {
    const data = await api.getPayeeLocationsByPayee(body);
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
| **payeeId** | `string` | id of payee | [Defaults to `undefined`] |

### Return type

[**PayeeLocationsResponse**](PayeeLocationsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of requested payee locations |  -  |
| **404** | No payees locations were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

