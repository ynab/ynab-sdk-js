import * as moment from "moment";
export declare class DateWithoutTime {
    static getISOStringFormat(): string;
    private _internalUTCMoment;
    constructor(year?: number, month?: number, date?: number);
    static createFromLocalDate(dateValue: Date): DateWithoutTime;
    static createFromUTCTime(timeValue: number): DateWithoutTime;
    static createFromISOString(stringValue: string): DateWithoutTime;
    static createFromISOStringOrDateWithoutTime(value: DateWithoutTime | string): DateWithoutTime;
    static createFromString(stringValue: string, format: string): DateWithoutTime;
    static createFromISOStringOrDateWithOutTime(date: DateWithoutTime | string): DateWithoutTime;
    static createForToday(): DateWithoutTime;
    static createForCurrentMonth(): DateWithoutTime;
    static isValid(stringValue: string, format: string, strict?: boolean): boolean;
    clone(): DateWithoutTime;
    getUTCTime(): number;
    getUTCTimeSeconds(): number;
    getYear(): number;
    setYear(val: number): DateWithoutTime;
    getMonth(): number;
    setMonth(val: number): DateWithoutTime;
    getDate(): number;
    setDate(val: number): DateWithoutTime;
    /**
     * Not locale aware. 0 == Sunday, 1 == Monday
     * @returns {number}
     */
    getDayOfWeek(): number;
    setDayOfWeek(val: number): DateWithoutTime;
    /**
     * Locale aware. If the locale is set to have the beginning of the week be a Sunday,
     * and the date is a Sunday, the ret val is a 0. If the beginning fo the week is a Monday
     * Mondays are 0 instead.
     * @returns {number}
     */
    getLocaleAwareDayOfWeek(): number;
    setLocaleAwareDayOfWeek(val: number): DateWithoutTime;
    toISOString(): string;
    toString(): string;
    valueOf(): number;
    toNativeDate(): Date;
    /**
     * Gets a _clone_ of the internal UTCMoment. The internal moment is not exposed.
     * Although convenient, you should prefer adding methods to DateWithoutTime instead of relying upon this method.
     * @returns {Moment}
     */
    toUTCMoment(): moment.Moment;
    format(formatStr: string): string;
    equalsDate(dateToCompare: Date): boolean;
    equalsByMonth(dateWithoutTimeToCompare: DateWithoutTime): boolean;
    equalsDateWithoutTime(dateWithoutTimeToCompare: DateWithoutTime): boolean;
    isAfter(dateWithoutTimeToCompare: DateWithoutTime): boolean;
    isBefore(dateWithoutTimeToCompare: DateWithoutTime): boolean;
    isPastDate(): boolean;
    isFutureDate(): boolean;
    isToday(): boolean;
    daysApart(dateWithoutTimeToCompare: DateWithoutTime): number;
    monthsApart(dateWithoutTimeToCompare: DateWithoutTime): number;
    addYears(numberOfYears: number): DateWithoutTime;
    subtractYears(numberOfYears: number): DateWithoutTime;
    addMonths(numberOfMonths: number): DateWithoutTime;
    subtractMonths(numberOfMonths: number): DateWithoutTime;
    addDays(numberOfDays: number): DateWithoutTime;
    subtractDays(numberOfDays: number): DateWithoutTime;
    startOfMonth(): DateWithoutTime;
    startOfYear(): DateWithoutTime;
    endOfMonth(): DateWithoutTime;
    endOfYear(): DateWithoutTime;
    daysInMonth(): number;
    fromNow(noSuffix?: boolean): string;
    static compare(a: DateWithoutTime, b: DateWithoutTime): number;
    static equals(a: DateWithoutTime, b: DateWithoutTime): boolean;
    static earliest(...dates: DateWithoutTime[]): DateWithoutTime;
    static latest(...dates: DateWithoutTime[]): DateWithoutTime;
}
