
# ScheduledTransactionSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`date_first` | string
`date_next` | string
`frequency` | string
`amount` | number
`memo` | string
`flag_color` | [TransactionFlagColor](TransactionFlagColor.md)
`flag_name` | string
`account_id` | string
`payee_id` | string
`category_id` | string
`transfer_account_id` | string
`deleted` | boolean

## Example

```typescript
import type { ScheduledTransactionSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "date_first": null,
  "date_next": null,
  "frequency": null,
  "amount": null,
  "memo": null,
  "flag_color": null,
  "flag_name": null,
  "account_id": null,
  "payee_id": null,
  "category_id": null,
  "transfer_account_id": null,
  "deleted": null,
} satisfies ScheduledTransactionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduledTransactionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


