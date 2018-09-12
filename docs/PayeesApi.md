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
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **payeeId** | [**String**](.md)| The ID of the Payee. | 

### Return type

[**PayeeResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+PayeeResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

<a name="getPayees"></a>
# **getPayees**
> PayeesResponse getPayees(budgetId)

List payees

Returns all payees

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 

### Return type

[**PayeesResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+PayeesResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

