# CategoriesApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategories**](CategoriesApi.md#getCategories) | **GET** /budgets/{budget_id}/categories | List categories
[**getCategoryById**](CategoriesApi.md#getCategoryById) | **GET** /budgets/{budget_id}/categories/{category_id} | Single category


<a name="getCategories"></a>
# **getCategories**
> CategoriesResponse getCategories(budgetId)

List categories

Returns all categories grouped by category group.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 

### Return type

[**CategoriesResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+CategoriesResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

<a name="getCategoryById"></a>
# **getCategoryById**
> CategoryResponse getCategoryById(budgetId, categoryId)

Single category

Returns a single category

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **categoryId** | [**String**](.md)| The ID of the Category. | 

### Return type

[**CategoryResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+CategoryResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

