
# AccountsResponseData


## Properties

Name | Type
------------ | -------------
`accounts` | [Array&lt;Account&gt;](Account.md)
`server_knowledge` | number

## Example

```typescript
import type { AccountsResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "accounts": null,
  "server_knowledge": null,
} satisfies AccountsResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountsResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


