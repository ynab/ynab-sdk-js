# YNAB API Javascript (Node) Library

[![Build Status](https://travis-ci.org/ynab/ynab-sdk-js.svg?branch=master)](https://travis-ci.org/ynab/ynab-sdk-js) [![NPM Package](https://img.shields.io/npm/v/ynab-sdk-js.svg)](https://www.npmjs.com/package/ynab-sdk-js) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The YNAB API JavaScript library provides access to the YNAB API from applications written in Node.js / JavaScript.

Please read the [YNAB API documentation](https://api.youneedabudget.com) for an overview of using the API and a complete list of the available resources.


## Installation

```
npm install ynab-sdk-js
```

## Usage

To use this client, you must [obtain an access token](https://api.youneedabudget.com/#authentication) from the [My Account](https://app.youneedabudget.com/settings) area of the YNAB web application.

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

## Examples

See the [examples](https://github.com/ynab/ynab-sdk-js/tree/master/examples) folder for example usage scenarios.

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