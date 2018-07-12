# YnabApiEndpoints.SubTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**transactionId** | **String** |  | 
**amount** | **Number** | The subtransaction amount in milliunits format | 
**memo** | **String** |  | 
**payeeId** | **String** |  | 
**categoryId** | **String** |  | 
**transferAccountId** | **String** | If a transfer, the account_id which the subtransaction transfers to | 
**deleted** | **Boolean** | Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests. | 


