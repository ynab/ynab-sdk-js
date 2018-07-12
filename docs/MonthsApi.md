# YnabApiEndpoints.MonthsApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBudgetMonth**](MonthsApi.md#getBudgetMonth) | **GET** /budgets/{budget_id}/months/{month} | Single budget month
[**getBudgetMonths**](MonthsApi.md#getBudgetMonths) | **GET** /budgets/{budget_id}/months | List budget months


<a name="getBudgetMonth"></a>
# **getBudgetMonth**
> MonthDetailResponse getBudgetMonth(budgetId, month)

Single budget month

Returns a single budget month

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.MonthsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var month = new Date("2013-10-20"); // Date | The Budget Month.  \"current\" can also be used to specify the current calendar month (UTC).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBudgetMonth(budgetId, month, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **month** | **Date**| The Budget Month.  \&quot;current\&quot; can also be used to specify the current calendar month (UTC). | 

### Return type

[**MonthDetailResponse**](MonthDetailResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBudgetMonths"></a>
# **getBudgetMonths**
> MonthSummariesResponse getBudgetMonths(budgetId)

List budget months

Returns all budget months

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.MonthsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBudgetMonths(budgetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 

### Return type

[**MonthSummariesResponse**](MonthSummariesResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

