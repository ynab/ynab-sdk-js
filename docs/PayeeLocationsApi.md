# YnabApiEndpoints.PayeeLocationsApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayeeLocationById**](PayeeLocationsApi.md#getPayeeLocationById) | **GET** /budgets/{budget_id}/payee_locations/{payee_location_id} | Single payee location
[**getPayeeLocations**](PayeeLocationsApi.md#getPayeeLocations) | **GET** /budgets/{budget_id}/payee_locations | List payee locations
[**getPayeeLocationsByPayee**](PayeeLocationsApi.md#getPayeeLocationsByPayee) | **GET** /budgets/{budget_id}/payees/{payee_id}/payee_locations | List locations for a payee


<a name="getPayeeLocationById"></a>
# **getPayeeLocationById**
> PayeeLocationResponse getPayeeLocationById(budgetId, payeeLocationId)

Single payee location

Returns a single payee location

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.PayeeLocationsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var payeeLocationId = "payeeLocationId_example"; // String | ID of payee location


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayeeLocationById(budgetId, payeeLocationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **payeeLocationId** | [**String**](.md)| ID of payee location | 

### Return type

[**PayeeLocationResponse**](PayeeLocationResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayeeLocations"></a>
# **getPayeeLocations**
> PayeeLocationsResponse getPayeeLocations(budgetId)

List payee locations

Returns all payee locations

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.PayeeLocationsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayeeLocations(budgetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 

### Return type

[**PayeeLocationsResponse**](PayeeLocationsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayeeLocationsByPayee"></a>
# **getPayeeLocationsByPayee**
> PayeeLocationsResponse getPayeeLocationsByPayee(budgetId, payeeId)

List locations for a payee

Returns all payee locations for the specified payee

### Example
```javascript
var YnabApiEndpoints = require('ynab_api_endpoints');
var defaultClient = YnabApiEndpoints.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new YnabApiEndpoints.PayeeLocationsApi();

var budgetId = "budgetId_example"; // String | The ID of the Budget.

var payeeId = "payeeId_example"; // String | ID of payee


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayeeLocationsByPayee(budgetId, payeeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **payeeId** | [**String**](.md)| ID of payee | 

### Return type

[**PayeeLocationsResponse**](PayeeLocationsResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

