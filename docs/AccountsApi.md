# YnabApiEndpoints.AccountsApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountById**](AccountsApi.md#getAccountById) | **GET** /budgets/{budget_id}/accounts/{account_id} | Single account
[**getAccounts**](AccountsApi.md#getAccounts) | **GET** /budgets/{budget_id}/accounts | Account list


<a name="getAccountById"></a>
# **getAccountById**
> AccountResponse getAccountById(budgetId, accountId)

Single account

Returns a single account

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.AccountsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var accountId = "accountId_example"; // String | The ID of the Account.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountById(budgetId, accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **accountId** | [**String**](.md)| The ID of the Account. | 

### Return type

[**AccountResponse**](AccountResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccounts"></a>
# **getAccounts**
> AccountsResponse getAccounts(budgetId)

Account list

Returns all accounts

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.AccountsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccounts(budgetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 

### Return type

[**AccountsResponse**](AccountsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

