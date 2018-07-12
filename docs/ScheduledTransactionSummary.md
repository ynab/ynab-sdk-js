# YnabApiEndpoints.ScheduledTransactionSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**dateFirst** | **Date** | The first date for which the Scheduled Transaction was scheduled. | 
**dateNext** | **Date** | The next date for which the Scheduled Transaction is scheduled. | 
**frequency** | **String** |  | 
**amount** | **Number** | The scheduled transaction amount in milliunits format | 
**memo** | **String** |  | 
**flagColor** | **String** | The scheduled transaction flag | 
**accountId** | **String** |  | 
**payeeId** | **String** |  | 
**categoryId** | **String** |  | 
**transferAccountId** | **String** | If a transfer, the account_id which the scheduled transaction transfers to | 
**deleted** | **Boolean** | Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests. | 


<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum


* `never` (value: `"never"`)

* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `everyOtherWeek` (value: `"everyOtherWeek"`)

* `twiceAMonth` (value: `"twiceAMonth"`)

* `every4Weeks` (value: `"every4Weeks"`)

* `monthly` (value: `"monthly"`)

* `everyOtherMonth` (value: `"everyOtherMonth"`)

* `every3Months` (value: `"every3Months"`)

* `every4Months` (value: `"every4Months"`)

* `twiceAYear` (value: `"twiceAYear"`)

* `yearly` (value: `"yearly"`)

* `everyOtherYear` (value: `"everyOtherYear"`)




<a name="FlagColorEnum"></a>
## Enum: FlagColorEnum


* `red` (value: `"red"`)

* `orange` (value: `"orange"`)

* `yellow` (value: `"yellow"`)

* `green` (value: `"green"`)

* `blue` (value: `"blue"`)

* `purple` (value: `"purple"`)




