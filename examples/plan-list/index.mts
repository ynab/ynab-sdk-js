import * as ynab from "ynab";

const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);

console.log(`Fetching plans...`);
try {
  const plansResponse = await ynabAPI.plans.getPlans();
  const plans = plansResponse.data.budgets;
  console.log(`This user has ${plans.length} plans.`);

  console.log(`\
===========
PLAN LIST
===========
`);

  for (let plan of plans) {
    console.log(
      `[id: ${plan.id}, name: ${plan.name}, last_modified_on: ${plan.last_modified_on}]`
    );
  }
} catch (e) {
  console.log(`ERROR: ${JSON.stringify(e)}`);
}
