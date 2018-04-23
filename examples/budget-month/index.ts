import * as ynab from "../../dist/index.js";

const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);

ynabAPI.months
  .getBudgetMonth(
    "f968197b-2863-473a-8974-c2406dbe7f0d",
    ynab.utils.getCurrentMonthInISOFormat()
  )
  .then(response => {
    let budgetMonth = response.data.month;
    console.log(`
============
BUDGET MONTH
============
             Month: ${budgetMonth.month}
              Note: ${budgetMonth.note || ""}
      Age Of Money: ${budgetMonth.age_of_money}
 Category Balances:`);

    for (let category of budgetMonth.categories) {
      let balance = ynab.utils
        .convertMilliUnitsToCurrencyAmount(category.balance, 2)
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
