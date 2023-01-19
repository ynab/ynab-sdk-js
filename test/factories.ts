import * as Factory from "./factory";
import * as api from "../src/api";

export const userFactory = Factory.makeFactory<api.User>({
  id: Factory.each((i) => `${i}`),
});

export const userResponseFactory = Factory.makeFactory<
  api.UserResponse & { rateLimit: string | null }
>({
  data: {
    user: userFactory.build(),
  },
  rateLimit: "1/200",
});

export const budgetSummaryFactory = Factory.makeFactory<api.BudgetSummary>({
  id: Factory.each((i) => `${i}`),
  name: Factory.each((i) => `Budget ${i}`),
  last_modified_on: new Date().toISOString(),
  date_format: {
    format: "MM/DD/YYYY",
  },
  currency_format: {
    iso_code: "USD",
    example_format: "123,456.78",
    decimal_digits: 2,
    decimal_separator: ".",
    symbol_first: true,
    group_separator: ",",
    currency_symbol: "$",
    display_symbol: true,
  },
});

export const budgetSummaryResponseFactory = Factory.makeFactory<
  api.BudgetSummaryResponse & { rateLimit: string | null }
>({
  data: {
    budgets: budgetSummaryFactory.buildList(3),
    default_budget: budgetSummaryFactory.build(),
  },
  rateLimit: "1/200",
});

export const accountFactory = Factory.makeFactory<api.Account>({
  id: Factory.each((i) => `AccountID${i}`),
  name: Factory.each((i) => `Account ${i}`),
  type: api.AccountType.Checking,
  on_budget: true,
  closed: false,
  note: Factory.each((i) => `Note #${i}`),
  balance: 5000,
  cleared_balance: 2000,
  uncleared_balance: 3000,
  transfer_payee_id: null!,
  deleted: false,
});

export const accountsResponseFactory = Factory.makeFactory<
  api.AccountsResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    accounts: accountFactory.buildList(5),
  }),
  rateLimit: "1/200",
});

export const accountResponseFactory = Factory.makeFactory<
  api.AccountResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    account: accountFactory.build(),
  }),
  rateLimit: "1/200",
});

export const saveAccountFactory = Factory.makeFactory<api.SaveAccount>({
  name: `AccountID${1}`,
  type: api.AccountType.Checking,
  balance: 140235,
});

export const saveAccountWrapperFactory =
  Factory.makeFactory<api.PostAccountWrapper>({
    account: saveAccountFactory.build(),
  });

export const categoryFactory = Factory.makeFactory<api.Category>({
  id: Factory.each((i) => `ID#${i}`),
  name: Factory.each((i) => `Name ${i}`),
  category_group_id: Factory.each((i) => `CategoryGroupID#${i}`),
  hidden: false,
  note: Factory.each((i) => `Note#${i}`),
  budgeted: Factory.each((i) => i * 1000),
  activity: Factory.each((i) => i * 1000),
  balance: Factory.each((i) => i * 1000),
  deleted: false,
  goal_type: api.Category.GoalTypeEnum.TBD,
  goal_creation_month: "2018-01-01",
  goal_target: 100000,
  goal_target_month: "2020-01-01",
  goal_percentage_complete: 40,
});

export const categoryGroupWithCategoriesFactory =
  Factory.makeFactory<api.CategoryGroupWithCategories>({
    id: Factory.each((i) => `ID#${i}`),
    name: Factory.each((i) => `Name ${i}`),
    hidden: false,
    categories: categoryFactory.buildList(3),
    deleted: false,
  });

export const categoriesResponseFactory = Factory.makeFactory<
  api.CategoriesResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    category_groups: categoryGroupWithCategoriesFactory.buildList(3),
  }),
  rateLimit: "1/200",
});

export const categoryResponseFactory = Factory.makeFactory<
  api.CategoryResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory<api.CategoryResponseData>({
    category: categoryFactory.build(),
  }),
  rateLimit: "1/200",
});

export const monthSummaryFactory = Factory.makeFactory<api.MonthSummary>({
  month: "2017-01-01",
  note: Factory.each((i) => `Note #${i}`),
  to_be_budgeted: Factory.each((i) => i * 2000),
  age_of_money: Factory.each((i) => i),
  income: Factory.each((i) => i * 100),
  budgeted: Factory.each((i) => i * 110),
  activity: Factory.each((i) => i * 120),
  deleted: false,
});

export const monthSummariesResponseFactory = Factory.makeFactory<
  api.MonthSummariesResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    months: monthSummaryFactory.buildList(5),
  }),
  rateLimit: "1/200",
});

export const monthDetailFactory = Factory.makeFactory<api.MonthDetail>({
  month: "2017-01-01",
  note: Factory.each((i) => `Note #${i}`),
  to_be_budgeted: Factory.each((i) => i * 2000),
  age_of_money: Factory.each((i) => i),
  categories: categoryFactory.buildList(3),
  income: Factory.each((i) => i * 100),
  budgeted: Factory.each((i) => i * 110),
  activity: Factory.each((i) => i * 120),
  deleted: false,
});

export const monthDetailResponseFactory = Factory.makeFactory<
  api.MonthDetailResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory<api.MonthDetailResponseData>({
    month: monthDetailFactory.build(),
  }),
  rateLimit: "1/200",
});

export const payeeFactory = Factory.makeFactory<api.Payee>({
  id: Factory.each((i) => `id #${i}`),
  name: Factory.each((i) => `name #${i}`),
  transfer_account_id: Factory.each((i) => `Transfer_account_id #${i}`),
  deleted: false,
});

export const payeesResponseFactory = Factory.makeFactory<
  api.PayeesResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    payees: payeeFactory.buildList(5),
  }),
  rateLimit: "1/200",
});

export const payeeResponseFactory = Factory.makeFactory<
  api.PayeeResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    payee: payeeFactory.build(),
  }),
  rateLimit: "1/200",
});

export const payeeLocationFactory = Factory.makeFactory<api.PayeeLocation>({
  id: Factory.each((i) => `id #${i}`),
  payee_id: Factory.each((i) => `name #${i}`),
  latitude: Factory.each((i) => `lat #${i}`),
  longitude: Factory.each((i) => `lon #${i}`),
  deleted: false,
});

export const payeeLocationsResponseFactory = Factory.makeFactory<
  api.PayeeLocationsResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    payee_locations: payeeLocationFactory.buildList(5),
  }),
  rateLimit: "1/200",
});

export const payeeLocationResponseFactory = Factory.makeFactory<
  api.PayeeLocationResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    payee_location: payeeLocationFactory.build(),
  }),
  rateLimit: "1/200",
});

export const subTransactionFactory = Factory.makeFactory<api.SubTransaction>({
  id: Factory.each((i) => `id #${i}`),
  amount: Factory.each((i) => i * 1000),
  memo: Factory.each((i) => `memo #${i}`),
  transaction_id: Factory.each((i) => `transaction_id #${i}`),
  payee_id: Factory.each((i) => `payee_id #${i}`),
  category_id: Factory.each((i) => `category_id #${i}`),
  transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
  deleted: false,
});

export const transactionFactory = Factory.makeFactory<api.TransactionDetail>({
  id: Factory.each((i) => `id #${i}`),
  date: "2017-01-02",
  amount: Factory.each((i) => i * 1000),
  memo: Factory.each((i) => `memo #${i}`),
  cleared: api.TransactionDetail.ClearedEnum.Cleared,
  approved: true,
  flag_color: api.TransactionDetail.FlagColorEnum.Red,
  account_id: Factory.each((i) => `account_id #${i}`),
  account_name: "Test Account",
  payee_id: Factory.each((i) => `payee_id #${i}`),
  payee_name: "Test Payee",
  category_id: Factory.each((i) => `category_id #${i}`),
  category_name: "Test Category",
  transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
  transfer_transaction_id: null!,
  import_id: null!,
  subtransactions: subTransactionFactory.buildList(3),
  deleted: false,
  matched_transaction_id: null!,
});

export const hybridTransactionFactory =
  Factory.makeFactory<api.HybridTransaction>({
    type: api.HybridTransaction.TypeEnum.Transaction,
    parent_transaction_id: null!,
    id: Factory.each((i) => `id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: api.TransactionDetail.ClearedEnum.Cleared,
    approved: true,
    flag_color: api.TransactionDetail.FlagColorEnum.Red,
    account_id: Factory.each((i) => `account_id #${i}`),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    category_id: Factory.each((i) => `category_id #${i}`),
    transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
    transfer_transaction_id: null!,
    import_id: null!,
    account_name: "Test Account",
    payee_name: "Test Payee",
    category_name: "Test Category",
    deleted: false,
    matched_transaction_id: null!,
  });

export const transactionResponseFactory = Factory.makeFactory<
  api.TransactionResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    transaction: transactionFactory.build(),
  }),
  rateLimit: "1/200",
});

export const transactionSummaryFactory =
  Factory.makeFactory<api.TransactionSummary>({
    id: Factory.each((i) => `id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: api.TransactionDetail.ClearedEnum.Cleared,
    approved: true,
    flag_color: api.TransactionSummary.FlagColorEnum.Red,
    account_id: Factory.each((i) => `account_id #${i}`),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    category_id: Factory.each((i) => `category_id #${i}`),
    transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
    transfer_transaction_id: null!,
    import_id: null!,
    deleted: false,
    matched_transaction_id: null!,
  });

export const transactionsResponseFactory = Factory.makeFactory<
  api.TransactionsResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    transactions: transactionFactory.buildList(5),
  }),
  rateLimit: "1/200",
});

export const hybridtransactionsResponseFactory = Factory.makeFactory<
  api.HybridTransactionsResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    transactions: hybridTransactionFactory.buildList(5),
  }),
  rateLimit: "1/200",
});

export const saveTransactionFactory = Factory.makeFactory<api.SaveTransaction>({
  account_id: Factory.each((i) => `account_id #${i}`),
  date: "2017-01-02",
  amount: Factory.each((i) => i * 1000),
  payee_id: Factory.each((i) => `payee_id #${i}`),
  payee_name: null!,
  category_id: Factory.each((i) => `category_id #${i}`),
  memo: Factory.each((i) => `memo #${i}`),
  cleared: api.SaveTransaction.ClearedEnum.Uncleared,
  approved: false,
  flag_color: api.SaveTransaction.FlagColorEnum.Red,
  import_id: null!,
});


export const saveSingleTransactionWrapperFactory =
  Factory.makeFactory<api.PostTransactionsWrapper>({
    transaction: saveTransactionFactory.build(),
  });

  export const updateSingleTransactionWrapperFactory =
  Factory.makeFactory<api.PutTransactionWrapper>({
    transaction: saveTransactionFactory.build(),
  });

export const saveMultipleTransactionsWrapperFactory =
  Factory.makeFactory<api.PostTransactionsWrapper>({
    transactions: saveTransactionFactory.buildList(3),
  });

export const updateTransactionFactory =
  Factory.makeFactory<api.SaveTransactionWithId>({
    id: "3045b6ae-4684-4df5-8ade-9f116975688f",
    account_id: Factory.each((i) => `account_id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    payee_name: null!,
    category_id: Factory.each((i) => `category_id #${i}`),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: api.SaveTransaction.ClearedEnum.Uncleared,
    approved: false,
    flag_color: api.SaveTransaction.FlagColorEnum.Red,
    import_id: null!,
  });

export const updateMultipleTransactionsWrapperFactory =
  Factory.makeFactory<api.PatchTransactionsWrapper>({
    transactions: updateTransactionFactory.buildList(3),
  });

export const bulkTransactionsFactory =
  Factory.makeFactory<api.BulkTransactions>({
    transactions: [
      saveTransactionFactory.build(),
      saveTransactionFactory.build(),
      saveTransactionFactory.build(),
    ],
  });

export const bulkIdsFactory = Factory.makeFactory({
  transaction_ids: [
    "2E06D718-1810-437E-8B2C-1969534A6676",
    "D99C9967-852C-4FE4-AD62-F8E4B41F5A4E",
  ],
  duplicate_import_ids: [],
});

export const saveTransactionsResponseFactory = Factory.makeFactory<
  api.SaveTransactionsResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory<api.SaveTransactionsResponseData>({
    transaction_ids: ["1"],
    transaction: transactionFactory.build(),
    transactions: transactionFactory.buildList(3),
    server_knowledge: Factory.each((i) => i),
  }),
  rateLimit: "1/200",
});

export const importTransactionsResponseFactory =
  Factory.makeFactory<api.TransactionsImportResponse  & { rateLimit: string | null }>({
    data: Factory.makeFactory<api.TransactionsImportResponseData>({
      transaction_ids: ["32533e53-8da2-453f-858a-415517d4ca91"],
    }),
    rateLimit: "1/200",
  });

export const bulkResponseFactory = Factory.makeFactory<
  api.BulkResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory<api.BulkResponseData>({
    bulk: bulkIdsFactory.build(),
  }),
  rateLimit: "1/200",
});

export const scheduledSubTransactionFactory =
  Factory.makeFactory<api.ScheduledSubTransaction>({
    id: Factory.each((i) => `id #${i}`),
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    scheduled_transaction_id: Factory.each((i) => `transaction_id #${i}`),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    category_id: Factory.each((i) => `category_id #${i}`),
    transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
    deleted: false,
  });

export const scheduledTransactionFactory =
  Factory.makeFactory<api.ScheduledTransactionDetail>({
    id: Factory.each((i) => `id #${i}`),
    date_first: "2017-01-02",
    date_next: "2017-01-03",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    flag_color: api.ScheduledTransactionDetail.FlagColorEnum.Red,
    frequency: api.ScheduledTransactionDetail.FrequencyEnum.Daily,
    account_id: Factory.each((i) => `account_id #${i}`),
    account_name: "Test Account",
    payee_id: Factory.each((i) => `payee_id #${i}`),
    payee_name: "Test Payee",
    category_id: Factory.each((i) => `category_id #${i}`),
    category_name: "Test Category",
    transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
    subtransactions: scheduledSubTransactionFactory.buildList(3),
    deleted: false,
  });

export const scheduledTransactionDetailResponseFactory = Factory.makeFactory<
  api.ScheduledTransactionResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    scheduled_transaction: scheduledTransactionFactory.build(),
  }),
  rateLimit: "1/200",
});

export const scheduledTransactionSummaryFactory =
  Factory.makeFactory<api.ScheduledTransactionSummary>({
    id: Factory.each((i) => `id #${i}`),
    date_first: "2017-01-02",
    date_next: "2017-01-03",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    flag_color: api.ScheduledTransactionSummary.FlagColorEnum.Red,
    frequency: api.ScheduledTransactionSummary.FrequencyEnum.Daily,
    account_id: Factory.each((i) => `account_id #${i}`),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    category_id: Factory.each((i) => `category_id #${i}`),
    transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
    deleted: false,
  });

export const scheduledTransactionsResponseFactory = Factory.makeFactory<
  api.ScheduledTransactionsResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    scheduled_transactions: scheduledTransactionFactory.buildList(5),
  }),
  rateLimit: "1/200",
});

export const budgetDetailFactory = Factory.makeFactory<api.BudgetDetail>({
  id: Factory.each((i) => `${i}`),
  name: Factory.each((i) => `Budget ${i}`),
  last_modified_on: new Date().toISOString(),
  date_format: {
    format: "MM/DD/YYYY",
  },
  currency_format: {
    iso_code: "USD",
    example_format: "123,456.78",
    decimal_digits: 2,
    decimal_separator: ".",
    symbol_first: true,
    group_separator: ",",
    currency_symbol: "$",
    display_symbol: true,
  },
  accounts: accountFactory.buildList(5),
  payees: payeeFactory.buildList(10),
  payee_locations: payeeLocationFactory.buildList(3),
  category_groups: categoryFactory.buildList(5),
  categories: categoryFactory.buildList(10),
  months: monthDetailFactory.buildList(12),
  transactions: transactionFactory.buildList(10),
  subtransactions: subTransactionFactory.buildList(5),
  scheduled_transactions: scheduledTransactionFactory.buildList(5),
  scheduled_subtransactions: scheduledSubTransactionFactory.buildList(5),
});

export const budgetDetailResponseFactory = Factory.makeFactory<
  api.BudgetDetailResponse & { rateLimit: string | null }
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    budget: budgetDetailFactory.build(),
  }),
  rateLimit: "1/200",
});
