# ScheduledTransactionsApi

All URIs are relative to *https://api.youneedabudget.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScheduledTransactionById**](ScheduledTransactionsApi.md#getScheduledTransactionById) | **GET** /budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id} | Single scheduled transaction
[**getScheduledTransactions**](ScheduledTransactionsApi.md#getScheduledTransactions) | **GET** /budgets/{budget_id}/scheduled_transactions | List scheduled transactions


<a name="getScheduledTransactionById"></a>
# **getScheduledTransactionById**
> ScheduledTransactionResponse getScheduledTransactionById(budgetId, scheduledTransactionId)

Single scheduled transaction

Returns a single scheduled transaction

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 
 **scheduledTransactionId** | [**String**](.md)| The ID of the Scheduled Transaction. | 

### Return type

[**ScheduledTransactionResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+ScheduledTransactionResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

<a name="getScheduledTransactions"></a>
# **getScheduledTransactions**
> ScheduledTransactionsResponse getScheduledTransactions(budgetId)

List scheduled transactions

Returns all scheduled transactions

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)| The ID of the Budget.  \&quot;last-used\&quot; can also be used to specify the last used budget. | 

### Return type

[**ScheduledTransactionsResponse**](https://github.com/ynab/ynab-sdk-js/search?q=%22export+interface+User%22Response%22+filename%3Aapi.d.ts+path%3Adist%2Fesm&unscoped_q=%22export+interface+ScheduledTransactionsResponse%22+filename%3Aapi.d.ts+path%3Adist%2Fesm)

