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

ynabAPI.categories
  .getCategoryById(
    "f968197b-2863-473a-8974-c2406dbe7f0d",
    "697b1c31-3740-4816-82fc-3299cf26889d"
  )
  .then(response => {
    let category = response.data.category;
    console.log(`\
============
CATEGORY
============
      Name: ${category.name}
  Budgeted: ${category.budgeted}
   Balance: ${category.balance}
`);
  })
  .catch(e => {
    console.log(`ERROR: ${JSON.stringify(e)}`);
  });
