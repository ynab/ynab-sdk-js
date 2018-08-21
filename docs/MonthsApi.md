# MonthsApi

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **month** | **Date**| The Budget Month in ISO format (e.g. 2016-12-01).    \&quot;current\&quot; can also be used to specify the current calendar month (UTC). | 

### Return type

[**MonthDetailResponse**](MonthDetailResponse.md)

<a name="getBudgetMonths"></a>
# **getBudgetMonths**
> MonthSummariesResponse getBudgetMonths(budgetId)

List budget months

Returns all budget months

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 

### Return type

[**MonthSummariesResponse**](MonthSummariesResponse.md)

