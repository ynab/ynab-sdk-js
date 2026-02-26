
# PlanDetail


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`last_modified_on` | string
`first_month` | string
`last_month` | string
`date_format` | [DateFormat](DateFormat.md)
`currency_format` | [CurrencyFormat](CurrencyFormat.md)
`accounts` | [Array&lt;Account&gt;](Account.md)
`payees` | [Array&lt;Payee&gt;](Payee.md)
`payee_locations` | [Array&lt;PayeeLocation&gt;](PayeeLocation.md)
`category_groups` | [Array&lt;CategoryGroup&gt;](CategoryGroup.md)
`categories` | [Array&lt;Category&gt;](Category.md)
`months` | [Array&lt;MonthDetail&gt;](MonthDetail.md)
`transactions` | [Array&lt;TransactionSummary&gt;](TransactionSummary.md)
`subtransactions` | [Array&lt;SubTransaction&gt;](SubTransaction.md)
`scheduled_transactions` | [Array&lt;ScheduledTransactionSummary&gt;](ScheduledTransactionSummary.md)
`scheduled_subtransactions` | [Array&lt;ScheduledSubTransaction&gt;](ScheduledSubTransaction.md)

## Example

```typescript
import type { PlanDetail } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "last_modified_on": null,
  "first_month": null,
  "last_month": null,
  "date_format": null,
  "currency_format": null,
  "accounts": null,
  "payees": null,
  "payee_locations": null,
  "category_groups": null,
  "categories": null,
  "months": null,
  "transactions": null,
  "subtransactions": null,
  "scheduled_transactions": null,
  "scheduled_subtransactions": null,
} satisfies PlanDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


