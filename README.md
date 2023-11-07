# YNAB API JavaScript Library

[![Continuous Integration](https://github.com/ynab/ynab-sdk-js/actions/workflows/ci.yml/badge.svg)](https://github.com/ynab/ynab-sdk-js/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/ynab.svg)](https://badge.fury.io/js/ynab)

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
[obtain an access token](https://api.ynab.com/#authentication-overview) from
the [Account Settings](https://app.ynab.com/settings) area of the YNAB web
application.

```typescript
const ynab = require("ynab");
const accessToken = "b43439eaafe2_this_is_fake_b43439eaafe2";
const ynabAPI = new ynab.API(accessToken);

(async function() {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  for (let budget of budgets) {
    console.log(`Budget Name: ${budget.name}`);
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

const budgetsResponse = ynabAPI.budgets
  .getBudgets()
  .then(budgetsResponse => {
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
| **Budgets**                | [budgets.getBudgets()](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/BudgetsApi.d.ts)                                                                | Returns budgets list with summary information         |
|                            | [budgets.getBudgetById(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/BudgetsApi.d.ts)                                                    | Returns a single budget with all related entities     |
|                            | [budgets.getBudgetSettingsById(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/BudgetsApi.d.ts)                                            | Returns settings for a budget                         |
| **Accounts**               | [accounts.getAccounts(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/AccountsApi.d.ts)                                                    | Returns all accounts                                  |
|                            | [accounts.getAccountById(budget_id, account_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/AccountsApi.d.ts)                                     | Returns a single account                              |
| **Categories**             | [categories.getCategories(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                                              | Returns all categories grouped by category group.     |
|                            | [categories.getCategoryById(budget_id, category_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)                               | Returns a single category                             |
|                            | [categories.updateMonthCategory(budget_id, month, category_id, month_category)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/CategoriesApi.d.ts)    | Update an existing month category                     |
| **Payees**                 | [payees.getPayees(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeesApi.d.ts)                                                          | Returns all payees                                    |
|                            | [payees.getPayeeById(budget_id, payee_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeesApi.d.ts)                                             | Returns single payee                                  |
| **Payee Locations**        | [payee_locations.getPayeeLocations(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeeLocationsApi.d.ts)                                 | Returns all payee locations                           |
|                            | [payee_locations.getPayeeLocationById(budget_id, payee_location_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeeLocationsApi.d.ts)           | Returns a single payee location                       |
|                            | [payee_locations.getPayeeLocationsByPayee(budget_id, payee_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/PayeeLocationsApi.d.ts)                | Returns all payee locations for the specified payee   |
| **Months**                 | [months.getBudgetMonths(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MonthsApi.d.ts)                                                    | Returns all budget months                             |
|                            | [months.getBudgetMonth(budget_id, month)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MonthsApi.d.ts)                                              | Returns a single budget month                         |
|                            | [months.getMonthCategory_by_id(budget_id, month, category_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/MonthsApi.d.ts)                         | Returns a single category for a specific budget month |
| **Transactions**           | [transactions.getTransactions(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                                        | Returns budget transactions                           |
|                            | [transactions.getTransactionsByAccount(budget_id, account_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                   | Returns all transactions for a specified account      |
|                            | [transactions.getTransactionsByCategory(budget_id, category_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                 | Returns all transactions for a specified category     |
|                            | [transactions.getTransactionsByType(budget_id, type)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                            | Returns all transactions of a specified type ("unapproved" or "uncategorized")     |
|                            | [transactions.getTransactionById(budget_id, transaction_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                     | Returns a single transaction                          |
|                            | [transactions.createTransaction(budget_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                                | Creates a single transaction                          |
|                            | [transactions.createTransactions(budget_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                               | Creates multiple transactions                         |
|                            | [transactions.updateTransaction(budget_id, transaction_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                | Updates a single transaction                          |
|                            | [transactions.updateTransactions(budget_id, data)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                               | Updates multiple transactions                         |
|                            | [transactions.deleteTransaction(budget_id, transaction_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                      | Deletes a transaction                                 |
|                            | [transactions.importTransactions(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/TransactionsApi.d.ts)                                     | Imports transactions                                  |
| **Scheduled Transactions** | [scheduled_transactions.getScheduledTransactions(budget_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/ScheduledTransactionsApi.d.ts)            | Returns all scheduled transactions                    |
|                            | [scheduled_transactions.getScheduledTransactionById(budget_id, scheduled_transaction_id)](https://github.com/ynab/ynab-sdk-js/blob/main/dist/apis/ScheduledTransactionsApi.d.ts) | Returns a single scheduled transaction          |

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

## License

Copyright (c) 2022 You Need A Budget, LLC

Licensed under the Apache-2.0 license
