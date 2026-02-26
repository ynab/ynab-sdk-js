
# TransactionResponseData


## Properties

Name | Type
------------ | -------------
`transaction` | [TransactionDetail](TransactionDetail.md)
`server_knowledge` | number

## Example

```typescript
import type { TransactionResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "transaction": null,
  "server_knowledge": null,
} satisfies TransactionResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


