
# PlanSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`last_modified_on` | string
`first_month` | string
`last_month` | string
`date_format` | [DateFormat](DateFormat.md)
`currency_format` | [CurrencyFormat](CurrencyFormat.md)
`accounts` | [Array&lt;Account&gt;](Account.md)

## Example

```typescript
import type { PlanSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "last_modified_on": null,
  "first_month": null,
  "last_month": null,
  "date_format": null,
  "currency_format": null,
  "accounts": null,
} satisfies PlanSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


