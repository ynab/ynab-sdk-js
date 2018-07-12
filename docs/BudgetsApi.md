# BudgetsApi

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

### Parameters
This endpoint does not need any parameter.

### Return type

[**BudgetSummaryResponse**](BudgetSummaryResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

