const ynabApi = require("../../dist/index.js");
const accessToken = "0f14e2f274d8baeb0b18795588e3818eb3e837654a00eab0b2eb81649670693a";
const budgetId = "38b2e846-411f-4b32-9764-a9bf8cad33b2";
const categoryId = "ab4a28a5-ee06-463e-8e91-77f6d5481031";
const ynab = new ynabApi(accessToken);
ynab.categories.getCategoryById(budgetId, categoryId).then((response)=>{
    let category = response.data.category;
    console.log(`
Category: ${category.name}
 Balance: ${category.balance}
`);
});
