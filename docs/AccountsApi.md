# AccountsApi

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **accountId** | [**String**](.md)| The ID of the Account. | 

### Return type

[**AccountResponse**](AccountResponse.md)

<a name="getAccounts"></a>
# **getAccounts**
> AccountsResponse getAccounts(budgetId)

Account list

Returns all accounts

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 

### Return type

[**AccountsResponse**](AccountsResponse.md)

