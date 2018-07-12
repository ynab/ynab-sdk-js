# YnabApiEndpoints.ScheduledSubTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**scheduledTransactionId** | **String** |  | 
**amount** | **Number** | The scheduled subtransaction amount in milliunits format | 
**memo** | **String** |  | 
**payeeId** | **String** |  | 
**categoryId** | **String** |  | 
**transferAccountId** | **String** | If a transfer, the account_id which the scheduled subtransaction transfers to | 
**deleted** | **Boolean** | Whether or not the scheduled subtransaction has been deleted.  Deleted scheduled subtransactions will only be included in delta requests. | 


