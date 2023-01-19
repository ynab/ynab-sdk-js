import * as ynab from "../../src/index";
const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);
(async function () {
    await ynabAPI.transactions.updateTransactions("default", {
        transactions: [
            { id: "8fdf39f9-8f62-4efe-8dd2-64cb167ac6da", memo: "Updated memo" },
            {
                id: "829278fb-9820-4e47-8f6c-2f9cae18ce22",
                flag_color: ynab.SaveTransaction.FlagColorEnum.Green,
            },
            {
                id: "cfbacd22-1e71-4dab-9733-ad2da64c824d",
                category_id: "50847dd8-5d8d-41cc-af8b-a3b5fd46150c",
            },
        ],
    });
})();
