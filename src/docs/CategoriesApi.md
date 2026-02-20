# CategoriesApi

All URIs are relative to *https://api.ynab.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCategory**](CategoriesApi.md#createcategory) | **POST** /budgets/{plan_id}/categories | Create a category |
| [**createCategoryGroup**](CategoriesApi.md#createcategorygroup) | **POST** /budgets/{plan_id}/category_groups | Create a category group |
| [**getCategories**](CategoriesApi.md#getcategories) | **GET** /budgets/{plan_id}/categories | Get all categories |
| [**getCategoryById**](CategoriesApi.md#getcategorybyid) | **GET** /budgets/{plan_id}/categories/{category_id} | Get a category |
| [**getMonthCategoryById**](CategoriesApi.md#getmonthcategorybyid) | **GET** /budgets/{plan_id}/months/{month}/categories/{category_id} | Get a category for a specific plan month |
| [**updateCategory**](CategoriesApi.md#updatecategory) | **PATCH** /budgets/{plan_id}/categories/{category_id} | Update a category |
| [**updateCategoryGroup**](CategoriesApi.md#updatecategorygroup) | **PATCH** /budgets/{plan_id}/category_groups/{category_group_id} | Update a category group |
| [**updateMonthCategory**](CategoriesApi.md#updatemonthcategory) | **PATCH** /budgets/{plan_id}/months/{month}/categories/{category_id} | Update a category for a specific month |



## createCategory

> SaveCategoryResponse createCategory(planId, data)

Create a category

Creates a new category

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { CreateCategoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan (\"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan)
    planId: planId_example,
    // PostCategoryWrapper | The category to create.
    data: ...,
  } satisfies CreateCategoryRequest;

  try {
    const data = await api.createCategory(body);
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
| **planId** | `string` | The id of the plan (\&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan) | [Defaults to `undefined`] |
| **data** | [PostCategoryWrapper](PostCategoryWrapper.md) | The category to create. | |

### Return type

[**SaveCategoryResponse**](SaveCategoryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The category was successfully created |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCategoryGroup

> SaveCategoryGroupResponse createCategoryGroup(planId, data)

Create a category group

Creates a new category group

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { CreateCategoryGroupRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan (\"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan)
    planId: planId_example,
    // PostCategoryGroupWrapper | The category group to create.
    data: ...,
  } satisfies CreateCategoryGroupRequest;

  try {
    const data = await api.createCategoryGroup(body);
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
| **planId** | `string` | The id of the plan (\&quot;last-used\&quot; can be used to specify the last used plan and \&quot;default\&quot; can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan) | [Defaults to `undefined`] |
| **data** | [PostCategoryGroupWrapper](PostCategoryGroupWrapper.md) | The category group to create. | |

### Return type

[**SaveCategoryGroupResponse**](SaveCategoryGroupResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The category group was successfully created |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCategories

> CategoriesResponse getCategories(planId, lastKnowledgeOfServer)

Get all categories

Returns all categories grouped by category group.  Amounts (assigned, activity, available, etc.) are specific to the current plan month (UTC).

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { GetCategoriesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // number | The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included. (optional)
    lastKnowledgeOfServer: 789,
  } satisfies GetCategoriesRequest;

  try {
    const data = await api.getCategories(body);
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

[**CategoriesResponse**](CategoriesResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The categories grouped by category group |  -  |
| **404** | No categories were found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCategoryById

> CategoryResponse getCategoryById(planId, categoryId)

Get a category

Returns a single category.  Amounts (assigned, activity, available, etc.) are specific to the current plan month (UTC).

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { GetCategoryByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The id of the category
    categoryId: categoryId_example,
  } satisfies GetCategoryByIdRequest;

  try {
    const data = await api.getCategoryById(body);
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
| **categoryId** | `string` | The id of the category | [Defaults to `undefined`] |

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested category |  -  |
| **404** | The category was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMonthCategoryById

> CategoryResponse getMonthCategoryById(planId, month, categoryId)

Get a category for a specific plan month

Returns a single category for a specific plan month.  Amounts (assigned, activity, available, etc.) are specific to the current plan month (UTC).

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { GetMonthCategoryByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The plan month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
    month: 2013-10-20,
    // string | The id of the category
    categoryId: categoryId_example,
  } satisfies GetMonthCategoryByIdRequest;

  try {
    const data = await api.getMonthCategoryById(body);
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
| **categoryId** | `string` | The id of the category | [Defaults to `undefined`] |

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested month category |  -  |
| **404** | The month category was not was found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCategory

> SaveCategoryResponse updateCategory(planId, categoryId, data)

Update a category

Update a category

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { UpdateCategoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The id of the category
    categoryId: categoryId_example,
    // PatchCategoryWrapper | The category to update
    data: ...,
  } satisfies UpdateCategoryRequest;

  try {
    const data = await api.updateCategory(body);
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
| **categoryId** | `string` | The id of the category | [Defaults to `undefined`] |
| **data** | [PatchCategoryWrapper](PatchCategoryWrapper.md) | The category to update | |

### Return type

[**SaveCategoryResponse**](SaveCategoryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The category was successfully updated |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCategoryGroup

> SaveCategoryGroupResponse updateCategoryGroup(planId, categoryGroupId, data)

Update a category group

Update a category group

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { UpdateCategoryGroupRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The id of the category group
    categoryGroupId: categoryGroupId_example,
    // PatchCategoryGroupWrapper | The category group to update
    data: ...,
  } satisfies UpdateCategoryGroupRequest;

  try {
    const data = await api.updateCategoryGroup(body);
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
| **categoryGroupId** | `string` | The id of the category group | [Defaults to `undefined`] |
| **data** | [PatchCategoryGroupWrapper](PatchCategoryGroupWrapper.md) | The category group to update | |

### Return type

[**SaveCategoryGroupResponse**](SaveCategoryGroupResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The category group was successfully updated |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMonthCategory

> SaveCategoryResponse updateMonthCategory(planId, month, categoryId, data)

Update a category for a specific month

Update a category for a specific month.  Only &#x60;budgeted&#x60; (assigned) amount can be updated.

### Example

```ts
import {
  Configuration,
  CategoriesApi,
} from '';
import type { UpdateMonthCategoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CategoriesApi(config);

  const body = {
    // string | The id of the plan. \"last-used\" can be used to specify the last used plan and \"default\" can be used if default plan selection is enabled (see: https://api.ynab.com/#oauth-default-plan).
    planId: planId_example,
    // string | The plan month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))
    month: 2013-10-20,
    // string | The id of the category
    categoryId: categoryId_example,
    // PatchMonthCategoryWrapper | The category to update.  Only `budgeted` (assigned) amount can be updated and any other fields specified will be ignored.
    data: ...,
  } satisfies UpdateMonthCategoryRequest;

  try {
    const data = await api.updateMonthCategory(body);
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
| **categoryId** | `string` | The id of the category | [Defaults to `undefined`] |
| **data** | [PatchMonthCategoryWrapper](PatchMonthCategoryWrapper.md) | The category to update.  Only &#x60;budgeted&#x60; (assigned) amount can be updated and any other fields specified will be ignored. | |

### Return type

[**SaveCategoryResponse**](SaveCategoryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The month category was successfully updated |  -  |
| **400** | The request could not be understood due to malformed syntax or validation error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

