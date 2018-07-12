# PayeesApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayeeById**](PayeesApi.md#getPayeeById) | **GET** /budgets/{budget_id}/payees/{payee_id} | Single payee
[**getPayees**](PayeesApi.md#getPayees) | **GET** /budgets/{budget_id}/payees | List payees


<a name="getPayeeById"></a>
# **getPayeeById**
> PayeeResponse getPayeeById(budgetId, payeeId)

Single payee

Returns single payee

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 
 **payeeId** | [**String**](.md)| The ID of the Payee. | 

### Return type

[**PayeeResponse**](PayeeResponse.md)

<a name="getPayees"></a>
# **getPayees**
> PayeesResponse getPayees(budgetId)

List payees

Returns all payees

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget. | 

### Return type

[**PayeesResponse**](PayeesResponse.md)

