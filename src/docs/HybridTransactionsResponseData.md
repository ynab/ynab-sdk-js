
# HybridTransactionsResponseData


## Properties

Name | Type
------------ | -------------
`transactions` | [Array&lt;HybridTransaction&gt;](HybridTransaction.md)
`server_knowledge` | number

## Example

```typescript
import type { HybridTransactionsResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "transactions": null,
  "server_knowledge": null,
} satisfies HybridTransactionsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HybridTransactionsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


