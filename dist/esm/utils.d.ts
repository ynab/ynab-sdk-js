declare const _default: {
    /**
     * Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
     */
    getCurrentMonthInISOFormat(): string;
    /**
     * Returns the current date (system timezone) in ISO 8601 format (i.e. '2015-12-15')
     */
    getCurrentDateInISOFormat(): string;
    /**
     * Converts an ISO 8601 formatted string to a JS date object
     * @param {string} isoDateString - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
     */
    convertFromISODateString(isoDateString: string): Date;
    /**
     * Converts a milliunits amount to a currency amount
     * @param milliunits - The milliunits amount (i.e. 293294)
     * @param [currencyDecimalDigits] - The number of decimals in the currency (i.e. 2 for USD)
     */
    convertMilliUnitsToCurrencyAmount(milliunits: number, currencyDecimalDigits?: number): number;
};
export default _default;
