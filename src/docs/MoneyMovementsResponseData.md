
# MoneyMovementsResponseData


## Properties

Name | Type
------------ | -------------
`money_movements` | [Array&lt;MoneyMovement&gt;](MoneyMovement.md)
`server_knowledge` | number

## Example

```typescript
import type { MoneyMovementsResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "money_movements": null,
  "server_knowledge": null,
} satisfies MoneyMovementsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MoneyMovementsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


