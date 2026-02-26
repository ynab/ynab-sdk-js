# YNAB API JavaScript Library

[![Build](https://github.com/ynab/ynab-sdk-js/actions/workflows/build-test.yml/badge.svg)](https://github.com/ynab/ynab-sdk-js/actions/workflows/build-test.yml)
[![npm version](https://badge.fury.io/js/ynab.svg?icon=si%3Anpm)](https://badge.fury.io/js/ynab)

Please read the [YNAB API documentation](https://api.ynab.com) for an overview of using the API and a complete list of available resources.

This client is generated using the [OpenAPI Generator](https://openapi-generator.tech/).

## Installation

First, install the module with npm:

```shell
npm install ynab
```

Then, depending upon your usage context, add a reference to it:

### CommonJS / Node

```
const ynab = require("ynab");
```

### ESM / TypeScript

```
import * as ynab from "ynab";
```

### Browser

The API supports [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for asynchronous browser requests from any origin.

The `dist/browser/ynab.js` file (located in node_modules/ynab after installation) is specifically built to run in a browser / window context and exports `ynab` variable to global namespace. No other dependencies are needed.

```
<script src="ynab.js" async></script>
...
<script>
  // This assignment is not necessary but demonstrates that
  // once the library is loaded, the global 'ynab' object will be available.
  var ynab = window.ynab;
</script>
```

#### CDN

A simple way to load the library in a browser is by using the [unpkg](https://unpkg.com/) CDN, which is a
"fast, global content delivery network for everything on npm".  To use it, include a script tag like this in your file:

```
<script src="https://unpkg.com/ynab@latest/dist/browser/ynab.js" async></script>
```

Using the "latest" tag will result in a 302 redirect to the latest version tag so it is highly recommended to use a specific version tag such as https://unpkg.com/ynab@1.5.0/dist/browser/ynab.js to avoid this redirect.

## Usage

To use this client, you must
[obtain an access token](https://api.ynab.com/#authentication) from
the [Account Settings](https://app.ynab.com/settings) area of the YNAB web
application.

```typescript
const ynab = require("ynab");
const accessToken = "b43439eaafe2_this_is_fake_b43439eaafe2";
const ynabAPI = new ynab.API(accessToken);

(async function() {
  const plansResponse = await ynabAPI.plans.getPlans();
  const plans = plansResponse.data.budgets;
  for (let plan of plans) {
    console.log(`Plan Name: ${plan.name}`);
  }
})();
```

### Error Handling

If a response is returned with a code >= 300, instead of returning the response,
the response will be thrown as an error to be caught.

```typescript
const ynab = require("ynab");
const accessToken = "invalid_token";
const ynabAPI = new ynab.API(accessToken);

const plansResponse = ynabAPI.plans
  .getPlans()
  .then(plansResponse => {
    // Won't get here because an error will be thrown
  })
  .catch(e => {
    console.log(e);
    // {
    //   error: {
    //    id: "401",
    //    name: "unauthorized",
    //    detail: "Unauthorized"
    //   }
    // }
  });
```

### Rate Limiting

The API enforces [Rate Limiting](https://api.ynab.com/#rate-limiting).

If the rate limit is exceeded, a `429` [Error Response](https://api.ynab.com/#errors) will be returned from the API which will result in an [error being thrown](https://github.com/ynab/ynab-sdk-js#error-handling) in this library.


## Examples

See the [examples](https://github.com/ynab/ynab-sdk-js/tree/main/examples)
folder for example usage scenarios.

## Methods

The following methods are available in this library.

|                            | Method                                                                                                                                                         | Description                                           |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| **User**                   | [user.getUser()](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/UserApi.d.ts)                                                                         | Returns authenticated user information                |
| **Plans**                  | [plans.getPlans()](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PlansApi.d.ts)                                                                | Returns plans list with summary information         |
|                            | [plans.getPlanById(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PlansApi.d.ts)                                                    | Returns a single plan with all related entities     |
|                            | [plans.getPlanSettingsById(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PlansApi.d.ts)                                            | Returns settings for a plan                         |
| **Accounts**               | [accounts.getAccounts(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/AccountsApi.d.ts)                                                    | Returns all accounts                                  |
|                            | [accounts.getAccountById(plan_id, account_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/AccountsApi.d.ts)                                     | Returns a single account                              |
|                            | [accounts.createAccount(plan_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/AccountsApi.d.ts)                                            | Creates a new account                                 |
| **Categories**             | [categories.getCategories(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                                              | Returns all categories grouped by category group.     |
|                            | [categories.getCategoryById(plan_id, category_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                               | Returns a single category                             |
|                            | [categories.getMonthCategoryById(plan_id, month, category_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                   | Returns a single category for a specific plan month |
|                            | [categories.createCategory(plan_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                                       | Creates a new category                                |
|                            | [categories.updateCategory(plan_id, category_id, category)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                      | Update a category                                     |
|                            | [categories.updateMonthCategory(plan_id, month, category_id, month_category)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)    | Update a category for a specific month                |
|                            | [categories.createCategoryGroup(plan_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                                  | Creates a new category group                          |
|                            | [categories.updateCategoryGroup(plan_id, category_group_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)               | Update a category group                               |
| **Payees**                 | [payees.getPayees(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeesApi.d.ts)                                                          | Returns all payees                                    |
|                            | [payees.getPayeeById(plan_id, payee_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeesApi.d.ts)                                             | Returns a single payee                                |
|                            | [payees.updatePayee(plan_id, payee_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeesApi.d.ts)                                        | Update a payee                                        |
| **Payee Locations**        | [payee_locations.getPayeeLocations(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeeLocationsApi.d.ts)                                 | Returns all payee locations                           |
|                            | [payee_locations.getPayeeLocationById(plan_id, payee_location_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeeLocationsApi.d.ts)           | Returns a single payee location                       |
|                            | [payee_locations.getPayeeLocationsByPayee(plan_id, payee_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeeLocationsApi.d.ts)                | Returns all payee locations for the specified payee   |
| **Months**                 | [months.getPlanMonths(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MonthsApi.d.ts)                                                    | Returns all plan months                             |
|                            | [months.getPlanMonth(plan_id, month)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MonthsApi.d.ts)                                              | Returns a single plan month                         |
| **Money Movements**        | [money_movements.getMoneyMovements(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MoneyMovementsApi.d.ts)                                 | Returns all money movements                           |
|                            | [money_movements.getMoneyMovementsByMonth(plan_id, month)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MoneyMovementsApi.d.ts)                   | Returns all money movements for a specific month      |
|                            | [money_movements.getMoneyMovementGroups(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MoneyMovementsApi.d.ts)                            | Returns all money movement groups                     |
|                            | [money_movements.getMoneyMovementGroupsByMonth(plan_id, month)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MoneyMovementsApi.d.ts)              | Returns all money movement groups for a specific month|
| **Transactions**           | [transactions.getTransactions(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                                        | Returns plan transactions, excluding any pending      |
|                            | [transactions.getTransactionsByAccount(plan_id, account_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                   | Returns all transactions for a specified account      |
|                            | [transactions.getTransactionsByCategory(plan_id, category_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                 | Returns all transactions for a specified category     |
|                            | [transactions.getTransactionsByPayee(plan_id, payee_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                       | Returns all transactions for a specified payee        |
|                            | [transactions.getTransactionsByMonth(plan_id, month)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                          | Returns all transactions for a specified month        |
|                            | [transactions.getTransactionById(plan_id, transaction_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                     | Returns a single transaction                          |
|                            | [transactions.createTransaction(plan_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                                | Creates a single transaction or multiple transactions |
|                            | [transactions.updateTransaction(plan_id, transaction_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                | Updates a single transaction                          |
|                            | [transactions.updateTransactions(plan_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                               | Updates multiple transactions                         |
|                            | [transactions.deleteTransaction(plan_id, transaction_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                      | Deletes a transaction                                 |
|                            | [transactions.importTransactions(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                                     | Imports transactions                                  |
| **Scheduled Transactions** | [scheduled_transactions.getScheduledTransactions(plan_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/ScheduledTransactionsApi.d.ts)            | Returns all scheduled transactions                    |
|                            | [scheduled_transactions.getScheduledTransactionById(plan_id, scheduled_transaction_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/ScheduledTransactionsApi.d.ts) | Returns a single scheduled transaction          |
|                            | [scheduled_transactions.createScheduledTransaction(plan_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/ScheduledTransactionsApi.d.ts)    | Creates a single scheduled transaction          |
|                            | [scheduled_transactions.updateScheduledTransaction(plan_id, scheduled_transaction_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/ScheduledTransactionsApi.d.ts)    | Updates a single scheduled transaction          |
|                            | [scheduled_transactions.deleteScheduledTransaction(plan_id, scheduled_transaction_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/ScheduledTransactionsApi.d.ts)    | Deletes a scheduled transaction                 |

### Utilities

There are several utilities available on the `utils` export to make working
with [ISO dates and milliunits](https://api.ynab.com/#formats) a bit
easier.

```typescript
// Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
utils.getCurrentMonthInISOFormat(): string;
// Returns the current date (system timezone) in ISO 8601 format (i.e. '2015-12-15')
utils.getCurrentDateInISOFormat(): string;
// Converts an ISO 8601 formatted string to a JS date object
utils.convertFromISODateString(isoDateString: string): Date;
// Converts a milliunits amount to a currency amount
utils.convertMilliUnitsToCurrencyAmount(milliunits: number, currencyDecimalDigits: number): number;
```

## Versioning

The version of this client is defined in the `package.json` file and follows [semantic versioning](https://semver.org/).  The version of this client is maintained independently and does not align with the the version of YNAB API itself (which is defined in the [OpenAPI spec](https://api.ynab.com/papi/open_api_spec.yaml)).  To determine which spec version of the YNAB API was used when generating this client you can refer to the "description" field in the `package.json` file.

## License

Copyright (c) 2022 YNAB

Licensed under the Apache-2.0 license
