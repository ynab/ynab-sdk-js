# YNAB Javascript SDK

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The YNAB API JavaScript SDK library provides access to the YNAB API from applications written in Node.js / JavaScript.


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
try {
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