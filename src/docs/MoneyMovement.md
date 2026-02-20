
# MoneyMovement


## Properties

Name | Type
------------ | -------------
`id` | string
`month` | string
`moved_at` | string
`note` | string
`money_movement_group_id` | string
`performed_by_user_id` | string
`from_category_id` | string
`to_category_id` | string
`amount` | number

## Example

```typescript
import type { MoneyMovement } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "month": null,
  "moved_at": null,
  "note": null,
  "money_movement_group_id": null,
  "performed_by_user_id": null,
  "from_category_id": null,
  "to_category_id": null,
  "amount": null,
} satisfies MoneyMovement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MoneyMovement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


