# PayeeLocationsApi

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **payeeLocationId** | [**String**](.md)| ID of payee location | 

### Return type

[**PayeeLocationResponse**](PayeeLocationResponse.md)

<a name="getPayeeLocations"></a>
# **getPayeeLocations**
> PayeeLocationsResponse getPayeeLocations(budgetId)

List payee locations

Returns all payee locations

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 

### Return type

[**PayeeLocationsResponse**](PayeeLocationsResponse.md)

<a name="getPayeeLocationsByPayee"></a>
# **getPayeeLocationsByPayee**
> PayeeLocationsResponse getPayeeLocationsByPayee(budgetId, payeeId)

List locations for a payee

Returns all payee locations for the specified payee

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **payeeId** | [**String**](.md)| ID of payee | 

### Return type

[**PayeeLocationsResponse**](PayeeLocationsResponse.md)

