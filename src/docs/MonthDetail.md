
# MonthDetail


## Properties

Name | Type
------------ | -------------
`month` | string
`note` | string
`income` | number
`budgeted` | number
`activity` | number
`to_be_budgeted` | number
`age_of_money` | number
`deleted` | boolean
`categories` | [Array&lt;Category&gt;](Category.md)

## Example

```typescript
import type { MonthDetail } from ''

// TODO: Update the object below with actual values
const example = {
  "month": null,
  "note": null,
  "income": null,
  "budgeted": null,
  "activity": null,
  "to_be_budgeted": null,
  "age_of_money": null,
  "deleted": null,
  "categories": null,
} satisfies MonthDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MonthDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


