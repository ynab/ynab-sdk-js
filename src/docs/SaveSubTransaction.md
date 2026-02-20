
# SaveSubTransaction


## Properties

Name | Type
------------ | -------------
`amount` | number
`payee_id` | string
`payee_name` | string
`category_id` | string
`memo` | string

## Example

```typescript
import type { SaveSubTransaction } from ''

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "payee_id": null,
  "payee_name": null,
  "category_id": null,
  "memo": null,
} satisfies SaveSubTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SaveSubTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


