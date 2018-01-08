# YNAB API Javascript (Node) Library

[![Build Status](https://travis-ci.org/ynab/ynab-sdk-js.svg?branch=master)](https://travis-ci.org/ynab/ynab-sdk-js)
[![NPM Package](https://img.shields.io/npm/v/ynab.svg)](https://www.npmjs.com/package/ynab) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The YNAB API JavaScript library provides access to the YNAB API from
applications written in Node.js / JavaScript.

Please read the [YNAB API documentation](https://api.youneedabudget.com) for an
overview of using the API and a complete list of the available resources.

## Installation

```shell
npm install ynab
```

## Usage

To use this client, you must
[obtain an access token](https://api.youneedabudget.com/#authentication) from
the [My Account](https://app.youneedabudget.com/settings) area of the YNAB web
application.

```typescript
const ynabApi = require("ynab");
const accessToken = "bf0cbb14b4330e9d5f4312a646eb0115b80a169ad1425d3de12e66a389eaafe2";
const ynab = new ynabApi(accessToken);

async function listBudgets(){
  const budgetsResponse = await ynab.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  for(let budget of budgets) {
    console.log(`Budget Name: ${budget.name}`);
  }
}

listBudgets();
```

### Error Handling

If a response is returned with a code >= 300, instead of returning the response,
the response will be "thrown" as an error to be caught.

```typescript
const ynabApi = require("ynab-sdk-js");
const accessToken = "invalid_token";
const ynab = new ynabApi(accessToken);

const budgetsResponse = ynab.budgets.getBudgets()
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

### Utilities

There are several utilities available on the `ynab.utils` object to make working
with [ISO dates and milliunits](https://api.youneedabudget.com/#formats) a bit
easier.

```typescript
/**
  * Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
  */
getCurrentMonthInISOFormat(): string;

/**
  * Converts an ISO 8601 formatted string to a JS date object
  * @param {string} isoDate - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
  */
convertFromISODateString(isoDateString: string): Date;

/**
 * Converts a milliunits amount to a currency amount
 * @param milliunits - The milliunits amount (i.e. 293294)
 * @param currencyDecimalDigits - The number of decimals in the currency (i.e. 2 for USD)
 */
convertMilliUnitsToCurrencyAmount(milliunits: number, currencyDecimalDigits: number): number;
```

## Examples

See the [examples](https://github.com/ynab/ynab-sdk-js/tree/master/examples)
folder for example usage scenarios.

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
