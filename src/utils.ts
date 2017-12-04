export class Utils {
  /**
   * Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
   */
  public getCurrentMonthInISOFormat() {
    let currentDate = new Date();
    let isoLocalDateString = new Date(
      currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
    ).toISOString();
    let isoFirstDayOfCurrentMonth = `${isoLocalDateString.substr(0, 7)}-01`;
    return isoFirstDayOfCurrentMonth;
  }

  /**
   * Converts an ISO 8601 formatted string to a JS date object
   * @param {string} isoDateString - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
   */
  public convertFromISODateString(isoDateString: string) {
    return new Date(new Date(isoDateString));
  }

  /**
   * Converts a milliunits amount to a currency amount
   * @param milliunits - The milliunits amount (i.e. 293294)
   * @param currencyDecimalDigits - The number of decimals in the currency (i.e. 2 for USD)
   */
  public convertMilliUnitsToCurrencyAmount(
    milliunits: number,
    currencyDecimalDigits: number
  ): number {
    let numberToRoundTo = Math.pow(10, 3 - Math.min(3, currencyDecimalDigits));
    numberToRoundTo = 1 / numberToRoundTo;
    let rounded = Math.round(milliunits * numberToRoundTo) / numberToRoundTo;
    let currencyAmount = rounded * (0.1 / Math.pow(10, 2));
    return currencyAmount;
  }
}
