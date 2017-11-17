"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class DateWithoutTime {
    static getISOStringFormat() {
        return "YYYY-MM-DD";
    }
    constructor(year = -1, month = 0, date = 1) {
        if (year == -1) {
            var now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            date = now.getDate();
        }
        this._internalUTCMoment = moment.utc([year, month, date]);
    }
    // ****************************************************************************************
    // Static factory methods to create DateWithoutTime objects from either a date, or a string
    // ****************************************************************************************
    // Assumes that the date passed in should be interpreted in the local timezone
    // So if you pass in December 31st, 2013 at 11:59pm, in the local timezone (say GMT-6),
    // You'll get a DateWithoutTime of December 31, 2013. Even though that time might be
    // 2014 in GMT+0 or UTC, that is irrelevant
    static createFromLocalDate(dateValue) {
        var dateWithoutTime = new DateWithoutTime(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate());
        return dateWithoutTime;
    }
    static createFromUTCTime(timeValue) {
        //Interpret this as a UTC time
        var utcMoment = moment.utc(timeValue);
        //a utc moment will automatically use the utc methods for the following functions
        return new DateWithoutTime(utcMoment.year(), utcMoment.month(), utcMoment.date());
    }
    static createFromISOString(stringValue) {
        // The dates that are returned to us from the server are in the ISO format (YYYY-MM-DD)
        return DateWithoutTime.createFromString(stringValue, DateWithoutTime.getISOStringFormat());
    }
    static createFromISOStringOrDateWithoutTime(value) {
        return typeof value == "string"
            ? DateWithoutTime.createFromISOString(value)
            : value;
    }
    static createFromString(stringValue, format) {
        // The Date.parse method when parsing these dates assumes that the timezone is UTC.
        // We are going to parse this passed date, and then just copy the year, month and date
        // values from it, to create a new Date that is in the local timezone.
        // This results in creating two moments - one to parse, and one in the date constructor
        // That's kinda lame, but we could make it more efficient later
        // We use moment's parsing because it's more explicit, and less browser dependent then Date.parse
        // I don't make it strict because they might include time in here as well.
        var tempMoment = moment.utc(stringValue, format, false);
        if (!tempMoment.isValid())
            throw new Error("Invalid date: " + stringValue);
        return new DateWithoutTime(tempMoment.year(), tempMoment.month(), tempMoment.date());
    }
    static createFromISOStringOrDateWithOutTime(date) {
        let castDate;
        if (typeof date == "string") {
            castDate = this.createFromISOString(date);
        }
        else {
            castDate = date.clone();
        }
        return castDate;
    }
    static createForToday() {
        return new DateWithoutTime();
    }
    static createForCurrentMonth() {
        // Create a date for now
        var internalDate = new Date();
        return new DateWithoutTime(internalDate.getFullYear(), internalDate.getMonth(), 1);
    }
    static isValid(stringValue, format, strict = false) {
        var tempMoment = moment(stringValue, format, strict);
        return tempMoment.isValid();
    }
    clone() {
        return new DateWithoutTime(this.getYear(), this.getMonth(), this.getDate());
    }
    // ****************************************************************************************
    // Instance methods to get a date or string value from the DateWithoutTime instance
    // ****************************************************************************************
    getUTCTime() {
        return this._internalUTCMoment.valueOf();
    }
    getUTCTimeSeconds() {
        return this._internalUTCMoment.valueOf() / 1000;
    }
    getYear() {
        return this._internalUTCMoment.year();
    }
    setYear(val) {
        this._internalUTCMoment.year(val);
        return this;
    }
    getMonth() {
        return this._internalUTCMoment.month();
    }
    setMonth(val) {
        this._internalUTCMoment.month(val);
        return this;
    }
    getDate() {
        return this._internalUTCMoment.date();
    }
    setDate(val) {
        this._internalUTCMoment.date(val);
        return this;
    }
    /**
     * Not locale aware. 0 == Sunday, 1 == Monday
     * @returns {number}
     */
    getDayOfWeek() {
        return this._internalUTCMoment.day();
    }
    setDayOfWeek(val) {
        this._internalUTCMoment.day(val);
        return this;
    }
    /**
     * Locale aware. If the locale is set to have the beginning of the week be a Sunday,
     * and the date is a Sunday, the ret val is a 0. If the beginning fo the week is a Monday
     * Mondays are 0 instead.
     * @returns {number}
     */
    getLocaleAwareDayOfWeek() {
        return this._internalUTCMoment.weekday();
    }
    setLocaleAwareDayOfWeek(val) {
        this._internalUTCMoment.weekday(val);
        return this;
    }
    // Returns the date as YYYY-MM-DD
    toISOString() {
        return this.format(DateWithoutTime.getISOStringFormat());
    }
    toString() {
        return this.toISOString();
    }
    // Will be used when comparing, ie `if dateA > dateB`
    valueOf() {
        return this._internalUTCMoment.valueOf();
    }
    toNativeDate() {
        return this._internalUTCMoment.clone().toDate();
    }
    /**
     * Gets a _clone_ of the internal UTCMoment. The internal moment is not exposed.
     * Although convenient, you should prefer adding methods to DateWithoutTime instead of relying upon this method.
     * @returns {Moment}
     */
    toUTCMoment() {
        return this._internalUTCMoment.clone();
    }
    format(formatStr) {
        return this._internalUTCMoment.format(formatStr);
    }
    // ****************************************************************************************
    // Comparison methods
    // ****************************************************************************************
    equalsDate(dateToCompare) {
        if (this.getDate() === dateToCompare.getDate() &&
            this.getMonth() === dateToCompare.getMonth() &&
            this.getYear() === dateToCompare.getFullYear()) {
            return true;
        }
        else
            return false;
    }
    equalsByMonth(dateWithoutTimeToCompare) {
        return (this.getMonth() == dateWithoutTimeToCompare.getMonth() &&
            this.getYear() == dateWithoutTimeToCompare.getYear());
    }
    equalsDateWithoutTime(dateWithoutTimeToCompare) {
        if (dateWithoutTimeToCompare == null)
            return false;
        return (this._internalUTCMoment.valueOf() ==
            dateWithoutTimeToCompare._internalUTCMoment.valueOf());
    }
    isAfter(dateWithoutTimeToCompare) {
        return this._internalUTCMoment.isAfter(dateWithoutTimeToCompare._internalUTCMoment);
    }
    isBefore(dateWithoutTimeToCompare) {
        return this._internalUTCMoment.isBefore(dateWithoutTimeToCompare._internalUTCMoment);
    }
    isPastDate() {
        var todaysDate = DateWithoutTime.createForToday();
        return this.isBefore(todaysDate);
    }
    isFutureDate() {
        var todaysDate = DateWithoutTime.createForToday();
        return this.isAfter(todaysDate);
    }
    isToday() {
        var todaysDate = DateWithoutTime.createForToday();
        return this.equalsDateWithoutTime(todaysDate);
    }
    daysApart(dateWithoutTimeToCompare) {
        return Math.abs(this._internalUTCMoment.diff(dateWithoutTimeToCompare._internalUTCMoment, "days"));
    }
    monthsApart(dateWithoutTimeToCompare) {
        return Math.abs(this._internalUTCMoment.diff(dateWithoutTimeToCompare._internalUTCMoment, "months"));
    }
    // ****************************************************************************************
    // Add/Subtract methods
    // ****************************************************************************************
    addYears(numberOfYears) {
        this._internalUTCMoment.add(numberOfYears, "years");
        return this;
    }
    subtractYears(numberOfYears) {
        this._internalUTCMoment.subtract(numberOfYears, "years");
        return this;
    }
    addMonths(numberOfMonths) {
        this._internalUTCMoment.add(numberOfMonths, "months");
        return this;
    }
    subtractMonths(numberOfMonths) {
        this._internalUTCMoment.subtract(numberOfMonths, "months");
        return this;
    }
    addDays(numberOfDays) {
        this._internalUTCMoment.add(numberOfDays, "days");
        return this;
    }
    subtractDays(numberOfDays) {
        this._internalUTCMoment.subtract(numberOfDays, "days");
        return this;
    }
    startOfMonth() {
        this._internalUTCMoment.startOf("month");
        return this;
    }
    startOfYear() {
        this._internalUTCMoment.startOf("year");
        return this;
    }
    endOfMonth() {
        this._internalUTCMoment.endOf("month");
        return this;
    }
    endOfYear() {
        this._internalUTCMoment.endOf("year");
        return this;
    }
    daysInMonth() {
        return this._internalUTCMoment.daysInMonth();
    }
    fromNow(noSuffix = false) {
        return this._internalUTCMoment.fromNow(noSuffix);
    }
    // Function suitable for use in sort functions
    static compare(a, b) {
        return a.getUTCTime() - b.getUTCTime();
    }
    static equals(a, b) {
        var aStr = a ? a.toISOString() : null;
        var bStr = b ? b.toISOString() : null;
        return aStr == bStr;
    }
    static earliest(...dates) {
        var earliest = null;
        if (dates) {
            for (var i = 0; i < dates.length; i++) {
                if (dates[i] && (earliest == null || dates[i].isBefore(earliest))) {
                    earliest = dates[i];
                }
            }
        }
        return earliest;
    }
    static latest(...dates) {
        var latest = null;
        if (dates) {
            for (var i = 0; i < dates.length; i++) {
                if (dates[i] && (latest == null || dates[i].isAfter(latest))) {
                    latest = dates[i];
                }
            }
        }
        return latest;
    }
}
exports.DateWithoutTime = DateWithoutTime;
