
# Payee


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`transfer_account_id` | string
`deleted` | boolean

## Example

```typescript
import type { Payee } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "transfer_account_id": null,
  "deleted": null,
} satisfies Payee

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Payee
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


