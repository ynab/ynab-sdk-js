
# Category


## Properties

Name | Type
------------ | -------------
`id` | string
`category_group_id` | string
`category_group_name` | string
`name` | string
`hidden` | boolean
`original_category_group_id` | string
`note` | string
`budgeted` | number
`activity` | number
`balance` | number
`goal_type` | string
`goal_needs_whole_amount` | boolean
`goal_day` | number
`goal_cadence` | number
`goal_cadence_frequency` | number
`goal_creation_month` | string
`goal_target` | number
`goal_target_month` | string
`goal_target_date` | string
`goal_percentage_complete` | number
`goal_months_to_budget` | number
`goal_under_funded` | number
`goal_overall_funded` | number
`goal_overall_left` | number
`goal_snoozed_at` | string
`deleted` | boolean

## Example

```typescript
import type { Category } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "category_group_id": null,
  "category_group_name": null,
  "name": null,
  "hidden": null,
  "original_category_group_id": null,
  "note": null,
  "budgeted": null,
  "activity": null,
  "balance": null,
  "goal_type": null,
  "goal_needs_whole_amount": null,
  "goal_day": null,
  "goal_cadence": null,
  "goal_cadence_frequency": null,
  "goal_creation_month": null,
  "goal_target": null,
  "goal_target_month": null,
  "goal_target_date": null,
  "goal_percentage_complete": null,
  "goal_months_to_budget": null,
  "goal_under_funded": null,
  "goal_overall_funded": null,
  "goal_overall_left": null,
  "goal_snoozed_at": null,
  "deleted": null,
} satisfies Category

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Category
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


