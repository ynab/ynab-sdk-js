
# ScheduledTransactionsResponseData


## Properties

Name | Type
------------ | -------------
`scheduled_transactions` | [Array&lt;ScheduledTransactionDetail&gt;](ScheduledTransactionDetail.md)
`server_knowledge` | number

## Example

```typescript
import type { ScheduledTransactionsResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "scheduled_transactions": null,
  "server_knowledge": null,
} satisfies ScheduledTransactionsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduledTransactionsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


