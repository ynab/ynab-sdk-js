# YNAB API JavaScript Library

[![Build Status](https://travis-ci.org/ynab/ynab-sdk-js.svg?branch=master)](https://travis-ci.org/ynab/ynab-sdk-js)
[![npm version](https://badge.fury.io/js/ynab.svg)](https://badge.fury.io/js/ynab)

Please read the [YNAB API documentation](https://api.youneedabudget.com) for an overview of using the API and a complete list of available resources.

This client is generated using the [Swagger Code Generator](https://github.com/swagger-api/swagger-codegen).

## Installation

First, install the module with npm (or yarn):

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
  var ynab = window.ynab;
</script>
```

## Usage

To use this client, you must
[obtain an access token](https://api.youneedabudget.com/#authentication-overview) from
the [My Account](https://app.youneedabudget.com/settings) area of the YNAB web
application.

```typescript
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
the response will be "thrown" as an error to be caught.

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

## Examples

See the [examples](https://github.com/ynab/ynab-sdk-js/tree/master/examples)
folder for example usage scenarios.

## Methods

The following methods are available in this library. For more details on parameters and usage, the [TypeScript declaration file](https://github.com/ynab/ynab-sdk-js/blob/master/dist/api.d.ts) can be referenced.

|                            | Method                                                                                                                                    | Description                                         |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **User**                   | [budgets.get_user()](docs/UserApi.md#get_user)                                                                                            | Returns authenticated user information              |
| **Budgets**                | [budgets.get_budgets()](docs/BudgetsApi.md#get_budgets)                                                                                   | Returns budgets list with summary information       |
|                            | [budgets.get_budget_by_id(id)](docs/BudgetsApi.md#get_budget_by_id)                                                                       | Returns a single budget with all related entities   |
|                            | [budgets.get_budget_settings_by_id(id)](docs/BudgetsApi.md#get_budget_settings_by_id)                                                     | Returns settings for a budget                       |
| **Accounts**               | [accounts.get_accounts(budget_id)](docs/AccountsApi.md#get_accounts)                                                                      | Returns all accounts                                |
|                            | [accounts.get_account_by_id(budget_id, id)](docs/AccountsApi.md#get_account_by_id)                                                        | Returns a single account                            |
| **Categories**             | [categories.get_categories(budget_id)](docs/CategoriesApi.md#get_categories)                                                              | Returns all categories grouped by category group.   |
|                            | [categories.get_category_by_id(budget_id, id)](docs/CategoriesApi.md#get_category_by_id)                                                  | Returns a single category                           |
| **Payees**                 | [payees.get_payees(budget_id)](docs/PayeesApi.md#get_payees)                                                                              | Returns all payees                                  |
|                            | [payees.get_payee_by_id(budget_id, id)](docs/PayeesApi.md#get_payee_by_id)                                                                | Returns single payee                                |
| **Payee Locations**        | [payee_locations.get_payee_locations(budget_id)](docs/PayeeLocationsApi.md#get_payee_locations)                                           | Returns all payee locations                         |
|                            | [payee_locations.get_payee_location_by_id(budget_id, id)](docs/PayeeLocationsApi.md#get_payee_location_by_id)                             | Returns a single payee location                     |
|                            | [payee_locations.get_payee_locations_by_payee(budget_id, id)](docs/PayeeLocationsApi.md#get_payee_locations_by_payee)                     | Returns all payee locations for the specified payee |
| **Months**                 | [months.get_budget_months(budget_id)](docs/MonthsApi.md#get_budget_months)                                                                | Returns all budget months                           |
|                            | [months.get_budget_month(budget_id, month)](docs/MonthsApi.md#get_budget_month)                                                           | Returns a single budget month                       |
| **Transactions**           | [transactions.get_transactions(budget_id)](docs/TransactionsApi.md#get_transactions)                                                      | Returns budget transactions                         |
|                            | [transactions.get_transactions_by_account(budget_id, id)](docs/TransactionsApi.md#get_transactions_by_account)                            | Returns all transactions for a specified account    |
|                            | [transactions.get_transactions_by_category(budget_id, id)](docs/TransactionsApi.md#get_transactions_by_category)                          | Returns all transactions for a specified category   |
|                            | [transactions.get_transactions_by_id(budget_id, id)](docs/TransactionsApi.md#get_transactions_by_id)                                      | Returns a single transaction                        |
|                            | [transactions.update_transaction(budget_id, id, transaction)](docs/TransactionsApi.md#update_transaction)                                 | Updates a transaction                               |
|                            | [transactions.create_transaction(budget_id, transaction)](docs/TransactionsApi.md#create_transaction)                                     | Creates a new transaction                           |
|                            | [transactions.bulk_create_transactions(budget_id, transactions)](docs/TransactionsApi.md#bulk_create_transactions)                        | Creates multiple transactions                       |
| **Scheduled Transactions** | [scheduled_transactions.get_scheduled_transactions(budget_id)](docs/ScheduledTransactionsApi.md#get_scheduled_transactions)               | Returns all scheduled transactions                  |
|                            | [scheduled_transactions.get_scheduled_transaction_by_id(budget_id, id)](docs/ScheduledTransactionsApi.md#get_scheduled_transaction_by_id) | Returns a single scheduled transaction              |
                                                                |

### Utilities

There are several utilities available on the `utils` export to make working
with [ISO dates and milliunits](https://api.youneedabudget.com/#formats) a bit
easier.

```typescript
// Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
getCurrentMonthInISOFormat(): string;
// Returns the current date (system timezone) in ISO 8601 format (i.e. '2015-12-15')
getCurrentDateInISOFormat(): string;
// Converts an ISO 8601 formatted string to a JS date object
convertFromISODateString(isoDateString: string): Date;
// Converts a milliunits amount to a currency amount
convertMilliUnitsToCurrencyAmount(milliunits: number, currencyDecimalDigits: number): number;
```

## Development

To build and compile:

```shell
npm install
npm run build
```

To run tests:

```shell
npm test
```

## License

Copyright (c) 2018 You Need A Budget, LLC

Licensed under the Apache-2.0 license
