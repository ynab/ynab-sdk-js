# HybridTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Whether the hybrid transaction represents a regular transaction or a subtransaction | 
**parentTransactionId** | **String** | For subtransaction types, this is the id of the pararent transaction.  For transaction types, this id will be always be null. | 
**accountName** | **String** |  | 
**payeeName** | **String** |  | 
**categoryName** | **String** |  | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `transaction` (value: `"transaction"`)

* `subtransaction` (value: `"subtransaction"`)




