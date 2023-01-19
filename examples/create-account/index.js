import * as ynab from "../../src/index";
const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);
const budgetId = "378f111e-4b27-4ee5-a9fd-0ba03c1de0f0";
(async function () {
    const account = {
        name: "New Account",
        type: ynab.AccountType.Checking,
        balance: 103352,
    };
    try {
        await ynabAPI.accounts.createAccount(budgetId, { account });
    }
    catch (err) {
        const error = err.error;
        console.log(`ERROR: id=${error.id}; name=${error.name}; detail: ${error.detail}`);
    }
})();
