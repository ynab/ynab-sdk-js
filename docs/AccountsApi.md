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

[**AccountResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+AccountResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

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

[**AccountsResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+AccountsResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

