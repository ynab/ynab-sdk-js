import * as ynab from "ynab";

const accessToken = "ccbb2db8-7c1b-not-real-b755-784876927790";
const ynabAPI = new ynab.API(accessToken);

try {
  // You can get your API key from the My Account section of YNAB
  const API_KEY = process.env.YNAB_API_ACCESS_TOKEN;
  if (API_KEY == null || API_KEY == "") {
    console.warn(
      "You will need to define the YNAB_API_ACCESS_TOKEN environment variable."
    );
    process.exit(1);
  }
  const ynabAPI = new ynab.API(API_KEY);

  console.log(`Fetching plans...`);
  const getPlansResponse = await ynabAPI.plans.getPlans();
  const allPlans = getPlansResponse.data.plans;

  const pollWaitTimeInMs = 5000;

  if (allPlans.length > 0) {
    let planToFetch: ynab.PlanSummary = null;
    const planNameToFetch = "My Plan";
    for (let tempPlan of allPlans) {
      if (tempPlan.name == planNameToFetch) {
        planToFetch = tempPlan;
        break;
      }
    }
    if (!planToFetch) {
      throw new Error(`Could not find plan named '${planNameToFetch}'`);
    }
    console.log(
      `Fetching contents of plan: ${planToFetch.name} - ${planToFetch.id}`
    );
    const planContents = await ynabAPI.plans.getPlanById(
      planToFetch.id
    );

    const categories = planContents.data.plan.categories;

    console.log(`Here is the plan data for the current month: `);
    const currentMonthISO = ynab.utils.getCurrentMonthInISOFormat();
    const monthDetailForCurrentMonth = planContents.data.plan.months.find(
      (m) => {
        return m.month == currentMonthISO;
      }
    );

    if (monthDetailForCurrentMonth) {
      console.log(`${JSON.stringify(monthDetailForCurrentMonth, null, 2)}`);
    } else {
      console.error(
        `Could not find monthDetail for the current month: ${currentMonthISO}`
      );
    }

    let lastServerKnowledge = planContents.data.server_knowledge;

    function queueUpPoll() {
      console.log(`Current server knowledge is: ${lastServerKnowledge}`);
      console.log(`Will poll for changes in ${pollWaitTimeInMs}ms...`);
      setTimeout(async () => {
        console.log("Polling for changes now...");
        const planChangesResponse = await ynabAPI.plans.getPlanById(
          planToFetch.id,
          lastServerKnowledge
        );

        console.log(
          `Current server knowledge is now : ${planChangesResponse.data.server_knowledge}`
        );
        if (planChangesResponse.data.server_knowledge > lastServerKnowledge) {
          lastServerKnowledge = planChangesResponse.data.server_knowledge;
          console.log(
            `There have been some changes to the following entities: `
          );
          console.log(
            JSON.stringify(planChangesResponse.data.plan, null, 2)
          );
        } else {
          console.log("No changes found");
        }
        queueUpPoll();
      }, pollWaitTimeInMs);
    }
    queueUpPoll();
  }
} catch (e) {
  if (e instanceof Error) {
    console.error(`Error: ${e}`);
  } else {
    console.error(`Error: ${JSON.stringify(e)}`);
  }
}
