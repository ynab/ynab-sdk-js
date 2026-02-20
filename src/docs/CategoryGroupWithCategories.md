
# CategoryGroupWithCategories


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`hidden` | boolean
`deleted` | boolean
`categories` | [Array&lt;Category&gt;](Category.md)

## Example

```typescript
import type { CategoryGroupWithCategories } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "hidden": null,
  "deleted": null,
  "categories": null,
} satisfies CategoryGroupWithCategories

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CategoryGroupWithCategories
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


