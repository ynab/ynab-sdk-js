
# SaveScheduledTransaction


## Properties

Name | Type
------------ | -------------
`account_id` | string
`date` | string
`amount` | number
`payee_id` | string
`payee_name` | string
`category_id` | string
`memo` | string
`flag_color` | [TransactionFlagColor](TransactionFlagColor.md)
`frequency` | [ScheduledTransactionFrequency](ScheduledTransactionFrequency.md)

## Example

```typescript
import type { SaveScheduledTransaction } from ''

// TODO: Update the object below with actual values
const example = {
  "account_id": null,
  "date": null,
  "amount": null,
  "payee_id": null,
  "payee_name": null,
  "category_id": null,
  "memo": null,
  "flag_color": null,
  "frequency": null,
} satisfies SaveScheduledTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SaveScheduledTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


