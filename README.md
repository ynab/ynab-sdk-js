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

## Examples

See the [examples](https://github.com/ynab/ynab-sdk-js/tree/master/examples)
folder for example usage scenarios.

## Methods

The following methods are available in this library. For more details on parameters and usage, the [TypeScript declaration file](https://github.com/ynab/ynab-sdk-js/blob/master/dist/api.d.ts) can be referenced.

|                            | Method                                                                                                                                    | Description                                         |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **User**                   | [user.getUser()](docs/UserApi.md#getuser)                                                                                            | Returns authenticated user information              |
| **Budgets**                | [budgets.getBudgets()](docs/BudgetsApi.md#getbudgets)                                                                                   | Returns budgets list with summary information       |
|                            | [budgets.getBudgetById(budget_id)](docs/BudgetsApi.md#getbudgetbyid)                                                                       | Returns a single budget with all related entities   |
|                            | [budgets.getBudgetSettingsById(budget_id)](docs/BudgetsApi.md#getbudgetsettingsbyid)                                                     | Returns settings for a budget                       |
| **Accounts**               | [accounts.getAccounts(budget_id)](docs/AccountsApi.md#getaccounts)                                                                      | Returns all accounts                                |
|                            | [accounts.getAccountById(budget_id, account_id)](docs/AccountsApi.md#getaccountbyid)                                                        | Returns a single account                            |
| **Categories**             | [categories.getCategories(budget_id)](docs/CategoriesApi.md#getcategories)                                                              | Returns all categories grouped by category group.   |
|                            | [categories.getCategoryById(budget_id, category_id)](docs/CategoriesApi.md#getcategorybyid)                                                  | Returns a single category                           |
| **Payees**                 | [payees.getPayees(budget_id)](docs/PayeesApi.md#getpayees)                                                                              | Returns all payees                                  |
|                            | [payees.getPayeeById(budget_id, payee_id)](docs/PayeesApi.md#getpayeebyid)                                                                | Returns single payee                                |
| **Payee Locations**        | [payee_locations.getPayeeLocations(budget_id)](docs/PayeeLocationsApi.md#getpayeelocations)                                           | Returns all payee locations                         |
|                            | [payee_locations.getPayeeLocationById(budget_id, payee_location_id)](docs/PayeeLocationsApi.md#getpayeelocationbyid)                             | Returns a single payee location                     |
|                            | [payee_locations.getPayeeLocationsByPayee(budget_id, payee_id)](docs/PayeeLocationsApi.md#getpayeelocationsbypayee)                     | Returns all payee locations for the specified payee |
| **Months**                 | [months.getBudgetMonths(budget_id)](docs/MonthsApi.md#getbudgetmonths)                                                                | Returns all budget months                           |
|                            | [months.getBudgetMonth(budget_id, month)](docs/MonthsApi.md#getbudgetmonth)                                                           | Returns a single budget month                       |
| **Transactions**           | [transactions.getTransactions(budget_id)](docs/TransactionsApi.md#gettransactions)                                                      | Returns budget transactions                         |
|                            | [transactions.getTransactionsByAccount(budget_id, account_id)](docs/TransactionsApi.md#gettransactionsbyaccount)                            | Returns all transactions for a specified account    |
|                            | [transactions.getTransactionsByCategory(budget_id, category_id)](docs/TransactionsApi.md#gettransactionsbycategory)                          | Returns all transactions for a specified category   |
|                            | [transactions.getTransactionById(budget_id, transaction_id)](docs/TransactionsApi.md#gettransactionbyid)                                      | Returns a single transaction                        |
|                            | [transactions.updateTransaction(budget_id, transaction_id, transaction)](docs/TransactionsApi.md#updatetransaction)                                 | Updates a transaction                               |
|                            | [transactions.createTransaction(budget_id, transaction)](docs/TransactionsApi.md#createtransaction)                                     | Creates a new transaction                           |
|                            | [transactions.bulkCreateTransactions(budget_id, transactions)](docs/TransactionsApi.md#bulkcreatetransactions)                        | Creates multiple transactions                       |
| **Scheduled Transactions** | [scheduled_transactions.getScheduled_Transactions(budget_id)](docs/ScheduledTransactionsApi.md#getscheduledtransactions)               | Returns all scheduled transactions                  |
|                            | [scheduled_transactions.getScheduledTransactionById(budget_id, scheduled_transaction_id)](docs/ScheduledTransactionsApi.md#getscheduledtransactionbyid) | Returns a single scheduled transaction              |
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

- Install dependencies: `npm install`
- Generate latest client based on swagger spec: `npm run generate`
- Run tests: `npm test`
- Publish to npm: `npm run release`

## License

Copyright (c) 2018 You Need A Budget, LLC

Licensed under the Apache-2.0 license
