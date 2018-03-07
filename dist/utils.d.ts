import * as CodeGen from "./api";
declare const _default: {
    getCurrentMonthInISOFormat(): string;
    getCurrentDateInISOFormat(): string;
    convertFromISODateString(isoDateString: string): Date;
    convertMilliUnitsToCurrencyAmount(milliunits: number, currencyDecimalDigits?: number): number;
    convertTransactionToSaveTransaction(transaction: CodeGen.TransactionDetail): CodeGen.SaveTransaction;
};
export default _default;
