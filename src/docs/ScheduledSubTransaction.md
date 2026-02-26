
# ScheduledSubTransaction


## Properties

Name | Type
------------ | -------------
`id` | string
`scheduled_transaction_id` | string
`amount` | number
`memo` | string
`payee_id` | string
`payee_name` | string
`category_id` | string
`category_name` | string
`transfer_account_id` | string
`deleted` | boolean

## Example

```typescript
import type { ScheduledSubTransaction } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "scheduled_transaction_id": null,
  "amount": null,
  "memo": null,
  "payee_id": null,
  "payee_name": null,
  "category_id": null,
  "category_name": null,
  "transfer_account_id": null,
  "deleted": null,
} satisfies ScheduledSubTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduledSubTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


