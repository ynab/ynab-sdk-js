import * as ynab from "../../src/index";

const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);

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
