import * as ynab from "../../dist/index.js";
import * as yargs from "yargs";

const argv = yargs
  .env("YNAB_API")
  .option("accessToken", { alias: "access_token" }).argv;
// You can get your API key from the My Account section of YNAB
if (!argv.accessToken) {
  console.warn(`
'access_token' argument is required!  You can pass it in one of the following ways:
  --access_token=123 CLI argument
  YNAB_API_ACCESS_TOKEN environment variable
`);
  process.exit(1);
}

const ynabAPI = new ynab.api(argv.accessToken);

ynabAPI.months
  .getBudgetMonth("f968197b-2863-473a-8974-c2406dbe7f0d", ynab.utils.getCurrentMonthInISOFormat())
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
