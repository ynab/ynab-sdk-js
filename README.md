# YNAB API Javascript (Node) Library

[![Build Status](https://travis-ci.org/ynab/ynab-sdk-js.svg?branch=master)](https://travis-ci.org/ynab/ynab-sdk-js)
[![NPM Package](https://img.shields.io/npm/v/ynab-sdk-js.svg)](https://www.npmjs.com/package/ynab-sdk-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The YNAB API JavaScript library provides access to the YNAB API from
applications written in Node.js / JavaScript.

Please read the [YNAB API documentation](https://api.youneedabudget.com) for an
overview of using the API and a complete list of the available resources.

## Installation

```
npm install ynab-sdk-js
```

## Usage

To use this client, you must
[obtain an access token](https://api.youneedabudget.com/#authentication) from
the [My Account](https://app.youneedabudget.com/settings) area of the YNAB web
application.

```
const ynabApi = require("ynab-sdk-js");
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

```
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
    //    name: "Unauthorized",
    //    description: "unauthorized"
    //   }
    // }
  });
```

### Utilities

There are several utilities available on the `utilties` object to make working
with [ISO dates and millidollars](https://api.youneedabudget.com/#formats) a bit
easier.

```
/**
  * Returns today's date (system timezone) in ISO 8601 format (i.e. '2015-12-30')
  */
getTodaysDateInISOFormat(): string;

/**
  * Converts an ISO 8601 formatted string to a JS date object
  * @param {string} isoDate - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
  */
convertISODateToDate(isoDate: string): Date;

/**
  * Converts an millidollars amount to a currency amount
  * @param millidollars - The millidollars amount (i.e. 293294)
  * @param currencyDecimalDigits - The number of decimals in the currency (i.e. 2 for USD)
  */
convertMilliDollarsToCurrencyAmount(millidollars: number, currencyDecimalDigits: number): number;
```

#### Examples

```
ynab.utils.getTodaysDateInISOFormat(); // > "2015-12-30"
ynab.utils.convertISODateToDate("2015-12-30"); // > "Wed Nov 29 2017 12:35:54 GMT-0500 (EST)"
ynab.utils.convertMilliDollarsToCurrencyAmount(239320, 2); // > 239.32
```

## Examples

See the [examples](https://github.com/ynab/ynab-sdk-js/tree/master/examples)
folder for example usage scenarios.

## Development

To build and compile:

```
npm install
npm run build
```

To run tests:

```
npm test
```
