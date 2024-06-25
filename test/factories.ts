import * as Factory from "./factory";
import * as api from "../src/apis";
import * as models from "../src/models";

export const userFactory = Factory.makeFactory<models.User>({
  id: Factory.each((i) => `${i}`),
});

export const userResponseFactory = Factory.makeFactory<
  models.UserResponse
>({
  data: {
    user: userFactory.build(),
  }
});

export const budgetSummaryFactory = Factory.makeFactory<models.BudgetSummary>({
  id: Factory.each((i) => `${i}`),
  name: Factory.each((i) => `Budget ${i}`),
  last_modified_on: new Date().toISOString(),
  date_format: {
    format: "MM/DD/YYYY",
  },
  accounts: [],
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
  first_month: "2017-01-01",
  last_month: "2023-12-01",
});

export const budgetSummaryResponseFactory = Factory.makeFactory<
  models.BudgetSummaryResponse
>({
  data: {
    budgets: budgetSummaryFactory.buildList(3),
    default_budget: budgetSummaryFactory.build(),
  }
});

export const accountFactory = Factory.makeFactory<models.Account>({
  id: Factory.each((i) => `AccountID${i}`),
  name: Factory.each((i) => `Account ${i}`),
  type: models.AccountType.Checking,
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
  models.AccountsResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    accounts: accountFactory.buildList(5),
  })
});

export const accountResponseFactory = Factory.makeFactory<
  models.AccountResponse
>({
  data: Factory.makeFactory({
    account: accountFactory.build(),
  })
});

export const saveAccountFactory = Factory.makeFactory<models.SaveAccount>({
  name: `AccountID${1}`,
  type: models.AccountType.Checking,
  balance: 140235,
});

export const saveAccountWrapperFactory =
  Factory.makeFactory<models.PostAccountWrapper>({
    account: saveAccountFactory.build(),
  });

export const categoryFactory = Factory.makeFactory<models.Category>({
  id: Factory.each((i) => `ID#${i}`),
  name: Factory.each((i) => `Name ${i}`),
  category_group_id: Factory.each((i) => `CategoryGroupID#${i}`),
  hidden: false,
  note: Factory.each((i) => `Note#${i}`),
  budgeted: Factory.each((i) => i * 1000),
  activity: Factory.each((i) => i * 1000),
  balance: Factory.each((i) => i * 1000),
  deleted: false,
  goal_type: models.CategoryGoalTypeEnum.Tbd,
  goal_creation_month: "2018-01-01",
  goal_target: 100000,
  goal_target_month: "2020-01-01",
  goal_percentage_complete: 40,
});

export const categoryGroupWithCategoriesFactory =
  Factory.makeFactory<models.CategoryGroupWithCategories>({
    id: Factory.each((i) => `ID#${i}`),
    name: Factory.each((i) => `Name ${i}`),
    hidden: false,
    categories: categoryFactory.buildList(3),
    deleted: false,
  });

export const categoriesResponseFactory = Factory.makeFactory<
  models.CategoriesResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    category_groups: categoryGroupWithCategoriesFactory.buildList(3),
  })
});

export const categoryResponseFactory = Factory.makeFactory<
  models.CategoryResponse
>({
  data: Factory.makeFactory<models.CategoryResponseData>({
    category: categoryFactory.build(),
  })
});

export const monthSummaryFactory = Factory.makeFactory<models.MonthSummary>({
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
  models.MonthSummariesResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    months: monthSummaryFactory.buildList(5),
  })
});

export const monthDetailFactory = Factory.makeFactory<models.MonthDetail>({
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
  models.MonthDetailResponse
>({
  data: Factory.makeFactory<models.MonthDetailResponseData>({
    month: monthDetailFactory.build(),
  })
});

export const payeeFactory = Factory.makeFactory<models.Payee>({
  id: Factory.each((i) => `id #${i}`),
  name: Factory.each((i) => `name #${i}`),
  transfer_account_id: Factory.each((i) => `Transfer_account_id #${i}`),
  deleted: false,
});

export const payeesResponseFactory = Factory.makeFactory<
  models.PayeesResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    payees: payeeFactory.buildList(5),
  })
});

export const payeeResponseFactory = Factory.makeFactory<
  models.PayeeResponse
>({
  data: Factory.makeFactory({
    payee: payeeFactory.build(),
  })
});

export const payeeLocationFactory = Factory.makeFactory<models.PayeeLocation>({
  id: Factory.each((i) => `id #${i}`),
  payee_id: Factory.each((i) => `name #${i}`),
  latitude: Factory.each((i) => `lat #${i}`),
  longitude: Factory.each((i) => `lon #${i}`),
  deleted: false,
});

export const payeeLocationsResponseFactory = Factory.makeFactory<
  models.PayeeLocationsResponse
>({
  data: Factory.makeFactory({
    payee_locations: payeeLocationFactory.buildList(5),
  })
});

export const payeeLocationResponseFactory = Factory.makeFactory<
  models.PayeeLocationResponse
>({
  data: Factory.makeFactory({
    payee_location: payeeLocationFactory.build(),
  })
});

export const subTransactionFactory = Factory.makeFactory<models.SubTransaction>(
  {
    id: Factory.each((i) => `id #${i}`),
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    transaction_id: Factory.each((i) => `transaction_id #${i}`),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    category_id: Factory.each((i) => `category_id #${i}`),
    transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
    deleted: false,
  }
);

export const transactionFactory = Factory.makeFactory<models.TransactionDetail>(
  {
    id: Factory.each((i) => `id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: models.TransactionClearedStatus.Cleared,
    approved: true,
    flag_color: models.TransactionFlagColor.Red,
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
  }
);

export const hybridTransactionFactory =
  Factory.makeFactory<models.HybridTransaction>({
    type: models.HybridTransactionTypeEnum.Transaction,
    parent_transaction_id: null!,
    id: Factory.each((i) => `id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: models.TransactionClearedStatus.Cleared,
    approved: true,
    flag_color: models.TransactionFlagColor.Red,
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
  models.TransactionResponse
>({
  data: Factory.makeFactory({
    transaction: transactionFactory.build(),
  })
});

export const transactionSummaryFactory =
  Factory.makeFactory<models.TransactionSummary>({
    id: Factory.each((i) => `id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: models.TransactionClearedStatus.Cleared,
    approved: true,
    flag_color: models.TransactionFlagColor.Red,
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
  models.TransactionsResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    transactions: transactionFactory.buildList(5),
  })
});

export const hybridtransactionsResponseFactory = Factory.makeFactory<
  models.HybridTransactionsResponse
>({
  data: Factory.makeFactory({
    transactions: hybridTransactionFactory.buildList(5),
  })
});

export const saveTransactionFactory =
  Factory.makeFactory<models.SaveTransactionWithIdOrImportId>({
    account_id: Factory.each((i) => `account_id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    payee_name: null!,
    category_id: Factory.each((i) => `category_id #${i}`),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: models.TransactionClearedStatus.Uncleared,
    approved: false,
    flag_color: models.TransactionFlagColor.Red,
    import_id: null!,
  });

export const saveSingleTransactionWrapperFactory =
  Factory.makeFactory<models.PostTransactionsWrapper>({
    transaction: saveTransactionFactory.build(),
  });

export const updateSingleTransactionWrapperFactory =
  Factory.makeFactory<models.PutTransactionWrapper>({
    transaction: saveTransactionFactory.build(),
  });

export const saveMultipleTransactionsWrapperFactory =
  Factory.makeFactory<models.PostTransactionsWrapper>({
    transactions: saveTransactionFactory.buildList(3),
  });

export const updateTransactionFactory =
  Factory.makeFactory<models.SaveTransactionWithIdOrImportId>({
    id: "3045b6ae-4684-4df5-8ade-9f116975688f",
    account_id: Factory.each((i) => `account_id #${i}`),
    date: "2017-01-02",
    amount: Factory.each((i) => i * 1000),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    payee_name: null!,
    category_id: Factory.each((i) => `category_id #${i}`),
    memo: Factory.each((i) => `memo #${i}`),
    cleared: models.TransactionClearedStatus.Uncleared,
    approved: false,
    flag_color: models.TransactionFlagColor.Red,
    import_id: null!,
  });

export const updateMultipleTransactionsWrapperFactory =
  Factory.makeFactory<models.PatchTransactionsWrapper>({
    transactions: updateTransactionFactory.buildList(3),
  });

export const bulkTransactionsFactory =
  Factory.makeFactory<models.BulkTransactions>({
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
  models.SaveTransactionsResponse
>({
  data: Factory.makeFactory<models.SaveTransactionsResponseData>({
    transaction_ids: ["1"],
    transaction: transactionFactory.build(),
    transactions: transactionFactory.buildList(3),
    server_knowledge: Factory.each((i) => i),
  })
});

export const importTransactionsResponseFactory = Factory.makeFactory<
  models.TransactionsImportResponse
>({
  data: Factory.makeFactory<models.TransactionsImportResponseData>({
    transaction_ids: ["32533e53-8da2-453f-858a-415517d4ca91"],
  })
});


export const scheduledSubTransactionFactory =
  Factory.makeFactory<models.ScheduledSubTransaction>({
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
  Factory.makeFactory<models.ScheduledTransactionDetail>({
    id: Factory.each((i) => `id #${i}`),
    date_first: "2017-01-02",
    date_next: "2017-01-03",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    flag_color: models.TransactionFlagColor.Red,
    frequency: models.ScheduledTransactionDetailFrequencyEnum.Daily,
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
  models.ScheduledTransactionResponse
>({
  data: Factory.makeFactory({
    scheduled_transaction: scheduledTransactionFactory.build(),
  })
});

export const scheduledTransactionSummaryFactory =
  Factory.makeFactory<models.ScheduledTransactionSummary>({
    id: Factory.each((i) => `id #${i}`),
    date_first: "2017-01-02",
    date_next: "2017-01-03",
    amount: Factory.each((i) => i * 1000),
    memo: Factory.each((i) => `memo #${i}`),
    flag_color: models.TransactionFlagColor.Red,
    frequency: models.ScheduledTransactionSummaryFrequencyEnum.Daily,
    account_id: Factory.each((i) => `account_id #${i}`),
    payee_id: Factory.each((i) => `payee_id #${i}`),
    category_id: Factory.each((i) => `category_id #${i}`),
    transfer_account_id: Factory.each((i) => `transfer_account_id #${i}`),
    deleted: false,
  });

export const scheduledTransactionsResponseFactory = Factory.makeFactory<
  models.ScheduledTransactionsResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    scheduled_transactions: scheduledTransactionFactory.buildList(5),
  })
});

export const budgetDetailFactory = Factory.makeFactory<models.BudgetDetail>({
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
  models.BudgetDetailResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each((i) => i),
    budget: budgetDetailFactory.build(),
  })
});
