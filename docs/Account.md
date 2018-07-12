# YnabApiEndpoints.Account

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**type** | **String** | The type of account. Note: payPal, merchantAccount, investmentAccount, and mortgage types have been deprecated and will be removed in the future. | 
**onBudget** | **Boolean** | Whether this account is on budget or not | 
**closed** | **Boolean** | Whether this account is closed or not | 
**note** | **String** |  | 
**balance** | **Number** | The current balance of the account in milliunits format | 
**clearedBalance** | **Number** | The current cleared balance of the account in milliunits format | 
**unclearedBalance** | **Number** | The current uncleared balance of the account in milliunits format | 
**deleted** | **Boolean** | Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `checking` (value: `"checking"`)

* `savings` (value: `"savings"`)

* `cash` (value: `"cash"`)

* `creditCard` (value: `"creditCard"`)

* `lineOfCredit` (value: `"lineOfCredit"`)

* `otherAsset` (value: `"otherAsset"`)

* `otherLiability` (value: `"otherLiability"`)

* `payPal` (value: `"payPal"`)

* `merchantAccount` (value: `"merchantAccount"`)

* `investmentAccount` (value: `"investmentAccount"`)

* `mortgage` (value: `"mortgage"`)




