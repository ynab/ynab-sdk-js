
# SaveTransactionsResponseData


## Properties

Name | Type
------------ | -------------
`transaction_ids` | Array&lt;string&gt;
`transaction` | [TransactionDetail](TransactionDetail.md)
`transactions` | [Array&lt;TransactionDetail&gt;](TransactionDetail.md)
`duplicate_import_ids` | Array&lt;string&gt;
`server_knowledge` | number

## Example

```typescript
import type { SaveTransactionsResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "transaction_ids": null,
  "transaction": null,
  "transactions": null,
  "duplicate_import_ids": null,
  "server_knowledge": null,
} satisfies SaveTransactionsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SaveTransactionsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


