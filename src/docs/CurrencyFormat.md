
# CurrencyFormat

The currency format setting for the plan.  In some cases the format will not be available and will be specified as null.

## Properties

Name | Type
------------ | -------------
`iso_code` | string
`example_format` | string
`decimal_digits` | number
`decimal_separator` | string
`symbol_first` | boolean
`group_separator` | string
`currency_symbol` | string
`display_symbol` | boolean

## Example

```typescript
import type { CurrencyFormat } from ''

// TODO: Update the object below with actual values
const example = {
  "iso_code": null,
  "example_format": null,
  "decimal_digits": null,
  "decimal_separator": null,
  "symbol_first": null,
  "group_separator": null,
  "currency_symbol": null,
  "display_symbol": null,
} satisfies CurrencyFormat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CurrencyFormat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


