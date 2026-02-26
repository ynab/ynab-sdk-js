
# PlanSummaryResponseData


## Properties

Name | Type
------------ | -------------
`budgets` | [Array&lt;PlanSummary&gt;](PlanSummary.md)
`default_budget` | [PlanSummary](PlanSummary.md)

## Example

```typescript
import type { PlanSummaryResponseData } from ''

// TODO: Update the object below with actual values
const example = {
  "budgets": null,
  "default_budget": null,
} satisfies PlanSummaryResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanSummaryResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


