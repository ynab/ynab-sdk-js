
# PayeeLocation


## Properties

Name | Type
------------ | -------------
`id` | string
`payee_id` | string
`latitude` | string
`longitude` | string
`deleted` | boolean

## Example

```typescript
import type { PayeeLocation } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "payee_id": null,
  "latitude": null,
  "longitude": null,
  "deleted": null,
} satisfies PayeeLocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PayeeLocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


