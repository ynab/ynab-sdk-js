# YnabApiEndpoints.BudgetsApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBudgetById**](BudgetsApi.md#getBudgetById) | **GET** /budgets/{budget_id} | Single budget
[**getBudgetSettingsById**](BudgetsApi.md#getBudgetSettingsById) | **GET** /budgets/{budget_id}/settings | Budget Settings
[**getBudgets**](BudgetsApi.md#getBudgets) | **GET** /budgets | List budgets


<a name="getBudgetById"></a>
# **getBudgetById**
> BudgetDetailResponse getBudgetById(budgetId, opts)

Single budget

Returns a single budget with all related entities.  This resource is effectively a full budget export.

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.BudgetsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var opts = { 
  'lastKnowledgeOfServer': 8.14 // Number | The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBudgetById(budgetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **lastKnowledgeOfServer** | **Number**| The starting server knowledge.  If provided, only entities that have changed since last_knowledge_of_server will be included. | [optional] 

### Return type

[**BudgetDetailResponse**](BudgetDetailResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBudgetSettingsById"></a>
# **getBudgetSettingsById**
> BudgetSettingsResponse getBudgetSettingsById(budgetId)

Budget Settings

Returns settings for a budget.

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.BudgetsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBudgetSettingsById(budgetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 

### Return type

[**BudgetSettingsResponse**](BudgetSettingsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBudgets"></a>
# **getBudgets**
> BudgetSummaryResponse getBudgets()

List budgets

Returns budgets list with summary information.

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.BudgetsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBudgets(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BudgetSummaryResponse**](BudgetSummaryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

