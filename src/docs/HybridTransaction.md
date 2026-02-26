
# HybridTransaction


## Properties

Name | Type
------------ | -------------
`id` | string
`date` | string
`amount` | number
`memo` | string
`cleared` | [TransactionClearedStatus](TransactionClearedStatus.md)
`approved` | boolean
`flag_color` | [TransactionFlagColor](TransactionFlagColor.md)
`flag_name` | string
`account_id` | string
`payee_id` | string
`category_id` | string
`transfer_account_id` | string
`transfer_transaction_id` | string
`matched_transaction_id` | string
`import_id` | string
`import_payee_name` | string
`import_payee_name_original` | string
`debt_transaction_type` | string
`deleted` | boolean
`type` | string
`parent_transaction_id` | string
`account_name` | string
`payee_name` | string
`category_name` | string

## Example

```typescript
import type { HybridTransaction } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "date": null,
  "amount": null,
  "memo": null,
  "cleared": null,
  "approved": null,
  "flag_color": null,
  "flag_name": null,
  "account_id": null,
  "payee_id": null,
  "category_id": null,
  "transfer_account_id": null,
  "transfer_transaction_id": null,
  "matched_transaction_id": null,
  "import_id": null,
  "import_payee_name": null,
  "import_payee_name_original": null,
  "debt_transaction_type": null,
  "deleted": null,
  "type": null,
  "parent_transaction_id": null,
  "account_name": null,
  "payee_name": null,
  "category_name": null,
} satisfies HybridTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HybridTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


