export declare class Utils {
    /**
     * Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
     */
    getCurrentMonthInISOFormat(): string;
    /**
     * Converts an ISO 8601 formatted string to a JS date object
     * @param {string} isoDate - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
     */
    convertISODateToDate(isoDate: string): Date;
    /**
     * Converts an millidollars amount to a currency amount
     * @param millidollars - The millidollars amount (i.e. 293294)
     * @param currencyDecimalDigits - The number of decimals in the currency (i.e. 2 for USD)
     */
    convertMilliCentsToCurrencyAmount(millidollars: number, currencyDecimalDigits: number): number;
}
