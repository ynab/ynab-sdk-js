import * as Factory from "./factory";
import * as api from "../src/api";

export const budgetSummaryFactory = Factory.makeFactory<api.BudgetSummary>({
  id: Factory.each(i => `${i}`),
  name: Factory.each(i => `Budget ${i}`),
  last_accessed_on: new Date().toISOString(),
  date_format: { locale: "en-us" },
  currency_format: { locale: "en-us" }
});

export const budgetSummaryResponseFactory = Factory.makeFactory<
  api.BudgetSummaryResponse
>({
  data: {
    budgets: Factory.makeFactory<api.BudgetSummary>({
      id: Factory.each(i => `${i}`),
      name: Factory.each(i => `Budget ${i}`),
      last_accessed_on: new Date().toISOString(),
      date_format: { locale: "en-us" },
      currency_format: { locale: "en-us" }
    }).buildList(3)
  }
});

export const budgetDetailResponseFactory = Factory.makeFactory<
  api.BudgetDetailResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each(i => i),
    budget: Factory.makeFactory<api.BudgetDetail>({
      id: Factory.each(i => `${i}`),
      name: Factory.each(i => `Budget ${i}`),
      last_accessed_on: new Date().toISOString(),
      date_format: { locale: "en-us" },
      currency_format: { locale: "en-us" },
      accounts: [], //Array<Account>,
      payees: [], //Array<Payee>,
      payee_locations: [], //Array<PayeeLocation>,
      category_groups: [], //Array<CategoryGroup>,
      categories: [], //Array<Category>,
      months: [], //Array<MonthDetail>,
      transactions: [], //Array<TransactionSummary>,
      subtransactions: [], //Array<SubTransaction>,
      scheduled_transactions: [], //Array<ScheduledTransactionSummary>,
      scheduled_subtransactions: [] //Array<ScheduledSubTransaction>,
    })
  })
});

export const accountFactory = Factory.makeFactory({
  id: Factory.each(i => `AccountID${i}`),
  name: Factory.each(i => `Account ${i}`),
  type: "checking",
  on_budget: true,
  closed: false,
  note: Factory.each(i => `Note #${i}`),
  balance: 5000
});

export const accountsResponseFactory = Factory.makeFactory<
  api.AccountsResponse
>({
  data: Factory.makeFactory({
    accounts: accountFactory.buildList(5)
  })
});

export const accountResponseFactory = Factory.makeFactory({
  data: Factory.makeFactory<api.AccountWrapper>({
    account: accountFactory.build()
  })
});

export const categoryFactory = Factory.makeFactory<api.Category>({
  id: Factory.each(i => `ID#${i}`),
  name: Factory.each(i => `Name ${i}`),
  category_group_id: Factory.each(i => `CategoryGroupID#${i}`),
  hidden: false,
  note: Factory.each(i => `Note#${i}`),
  budgeted: Factory.each(i => i * 1000),
  activity: Factory.each(i => i * 1000),
  balance: Factory.each(i => i * 1000)
});

export const categoryGroupWithCategoriesFactory = Factory.makeFactory<
  api.CategoryGroupWithCategories
>({
  id: Factory.each(i => `ID#${i}`),
  name: Factory.each(i => `Name ${i}`),
  hidden: false,
  categories: categoryFactory.buildList(3)
});

export const categoriesResponseFactory = Factory.makeFactory<
  api.CategoriesResponse
>({
  data: Factory.makeFactory({
    category_groups: categoryGroupWithCategoriesFactory.buildList(3)
  })
});

export const categoryResponseFactory = Factory.makeFactory<
  api.CategoryResponse
>({
  data: Factory.makeFactory({
    category: categoryFactory.build()
  })
});

export const monthSummaryFactory = Factory.makeFactory<api.MonthSummary>({
  month: "2017-01-01",
  note: Factory.each(i => `Note #${i}`),
  to_be_budgeted: Factory.each(i => i * 2000),
  age_of_money: Factory.each(i => i)
});

export const monthSummariesResponseFactory = Factory.makeFactory<
  api.MonthSummariesResponse
>({
  data: Factory.makeFactory({
    months: monthSummaryFactory.buildList(5)
  })
});

class x implements api.MonthDetail {
  month: string;
  note: string;
  to_be_budgeted: number;
  age_of_money: number;
  categories: api.Category[];
}
export const monthDetailFactory = Factory.makeFactory<api.MonthDetail>({
  month: "2017-01-01",
  note: Factory.each(i => `Note #${i}`),
  to_be_budgeted: Factory.each(i => i * 2000),
  age_of_money: Factory.each(i => i),
  categories: categoryFactory.buildList(3)
});

export const monthDetailResponseFactory = Factory.makeFactory<
  api.MonthDetailResponse
>({
  data: Factory.makeFactory({
    month: monthDetailFactory.build()
  })
});
