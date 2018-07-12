# TransactionSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**_date** | **Date** |  | 
**amount** | **Number** | The transaction amount in milliunits format | 
**memo** | **String** |  | 
**cleared** | **String** | The cleared status of the transaction | 
**approved** | **Boolean** | Whether or not the transaction is approved | 
**flagColor** | **String** | The transaction flag | 
**accountId** | **String** |  | 
**payeeId** | **String** |  | 
**categoryId** | **String** |  | 
**transferAccountId** | **String** |  | 
**importId** | **String** | If the Transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: &#39;YNAB:[milliunit_amount]:[iso_date]:[occurrence]&#39;.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of &#39;YNAB:-294230:2015-12-30:1&#39;.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be &#39;YNAB:-294230:2015-12-30:2&#39;. | 
**deleted** | **Boolean** | Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests. | 


<a name="ClearedEnum"></a>
## Enum: ClearedEnum


* `cleared` (value: `"cleared"`)

* `uncleared` (value: `"uncleared"`)

* `reconciled` (value: `"reconciled"`)




<a name="FlagColorEnum"></a>
## Enum: FlagColorEnum


* `red` (value: `"red"`)

* `orange` (value: `"orange"`)

* `yellow` (value: `"yellow"`)

* `green` (value: `"green"`)

* `blue` (value: `"blue"`)

* `purple` (value: `"purple"`)




