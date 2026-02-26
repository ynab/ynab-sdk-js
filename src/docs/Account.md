
# Account


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`type` | [AccountType](AccountType.md)
`on_budget` | boolean
`closed` | boolean
`note` | string
`balance` | number
`cleared_balance` | number
`uncleared_balance` | number
`transfer_payee_id` | string
`direct_import_linked` | boolean
`direct_import_in_error` | boolean
`last_reconciled_at` | string
`debt_original_balance` | number
`debt_interest_rates` | { [key: string]: number; }
`debt_minimum_payments` | { [key: string]: number; }
`debt_escrow_amounts` | { [key: string]: number; }
`deleted` | boolean

## Example

```typescript
import type { Account } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "type": null,
  "on_budget": null,
  "closed": null,
  "note": null,
  "balance": null,
  "cleared_balance": null,
  "uncleared_balance": null,
  "transfer_payee_id": null,
  "direct_import_linked": null,
  "direct_import_in_error": null,
  "last_reconciled_at": null,
  "debt_original_balance": null,
  "debt_interest_rates": null,
  "debt_minimum_payments": null,
  "debt_escrow_amounts": null,
  "deleted": null,
} satisfies Account

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Account
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


