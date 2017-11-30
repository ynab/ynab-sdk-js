"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ynabApi = require("../../dist/index.js");
const accessToken = "eca4740bef0a9510808b67c2cce4ac5cc8645a8bec389f5347f76dd0d819f11c";
const budgetId = "38b2e846-411f-4b32-9764-a9bf8cad33b2";
const ynab = new ynabApi(accessToken);
ynab.months
    .getBudgetMonth(budgetId, ynab.utils.getCurrentMonthInISOFormat())
    .then(response => {
    let budgetMonth = response.data.month;
    console.log(`
             Month: ${budgetMonth.month}
              Note: ${budgetMonth.note}
      Age Of Money: ${budgetMonth.age_of_money}
 Category Balances:`);
    for (let category of budgetMonth.categories) {
        let balance = ynab.utils
            .convertMilliCentsToCurrencyAmount(category.balance, 2)
            .toFixed(2);
        console.log(`                    ${category.name} - $${balance}`);
        /*
                 Month: 2017-11-01
                  Note: Month Note here
          Age Of Money: 103
     Category Balances:
                        Medical - $50.00
                        Deferred Income SubCategory - $0.00
                        Immediate Income SubCategory - $0.00
                        Renter's/Home Insurance - $0.00
                        ...
        */
    }
});
