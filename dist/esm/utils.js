export default {
    /**
     * Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
     */
    getCurrentMonthInISOFormat: function () {
        return this.getCurrentDateInISOFormat().substr(0, 7) + "-01";
    },
    /**
     * Returns the current date (system timezone) in ISO 8601 format (i.e. '2015-12-15')
     */
    getCurrentDateInISOFormat: function () {
        var currentDate = new Date();
        var isoLocalDateString = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000).toISOString();
        return isoLocalDateString;
    },
    /**
     * Converts an ISO 8601 formatted string to a JS date object
     * @param {string} isoDateString - An ISO 8601 formatted date (i.e. '2015-12-30').  This date is assumed to be in UTC timezone
     */
    convertFromISODateString: function (isoDateString) {
        return new Date(new Date(isoDateString));
    },
    /**
     * Converts a milliunits amount to a currency amount
     * @param milliunits - The milliunits amount (i.e. 293294)
     * @param [currencyDecimalDigits] - The number of decimals in the currency (i.e. 2 for USD)
     */
    convertMilliUnitsToCurrencyAmount: function (milliunits, currencyDecimalDigits) {
        if (currencyDecimalDigits === void 0) { currencyDecimalDigits = 2; }
        var numberToRoundTo = Math.pow(10, 3 - Math.min(3, currencyDecimalDigits));
        numberToRoundTo = 1 / numberToRoundTo;
        var rounded = Math.round(milliunits * numberToRoundTo) / numberToRoundTo;
        var currencyAmount = rounded * (0.1 / Math.pow(10, 2));
        return Number(currencyAmount.toFixed(currencyDecimalDigits));
    }
};
