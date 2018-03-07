Object.defineProperty(exports, "__esModule", { value: true });
const ynab = require("../../dist/index.js");
const yargs = require("yargs");
const process = require("process");
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
(async function () {
    const ynabAPI = new ynab.api(argv.accessToken);
    console.log(`Fetching budgets...`);
    try {
        const budgetsResponse = await ynabAPI.budgets.getBudgets();
        const budgets = budgetsResponse.data.budgets;
        console.log(`This user has ${budgets.length} budgets.`);
        console.log(`\
===========
BUDGET LIST
===========
`);
        for (let budget of budgets) {
            console.log(`[id: ${budget.id}, name: ${budget.name}, last_modified_on: ${budget.last_modified_on}]`);
        }
    }
    catch (e) {
        console.log(`ERROR: ${JSON.stringify(e)}`);
    }
})();
