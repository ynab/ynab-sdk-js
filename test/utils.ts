import { Utils } from "../src/utils";
import chai = require("chai");

const assert = chai.assert;
const expect = chai.expect;

describe("utiilities", () => {
  const utils = new Utils();

  describe("getTodaysDateInISOFormat", () => {
    it("Returns today's date in ISO format", () => {
      let now = new Date();
      let month = ("0" + (now.getMonth() + 1)).slice(-2);
      let today = now.getFullYear() + "-" + month + "-01";

      expect(utils.getCurrentMonthInISOFormat()).to.equal(today);
    });
  });

  describe("convertISODateToDate", () => {
    it("Converts an ISO formatted date string to a JS date object", () => {
      let date = "2015-12-30";
      expect(utils.convertFromISODateString(date).getTime()).to.equal(
        Date.parse(date)
      );
    });
  });

  describe("convertMilliUnitsToCurrencyAmount", () => {
    it("Converts millidolars to 2 decimimal currency", () => {
      expect(utils.convertMilliUnitsToCurrencyAmount(239323, 2)).to.equal(
        239.32
      );
    });

    it("Rounds up", () => {
      expect(utils.convertMilliUnitsToCurrencyAmount(239325, 2)).to.equal(
        239.33
      );
    });

    it("Converts millidolars to 3 decimal currency", () => {
      expect(utils.convertMilliUnitsToCurrencyAmount(239323, 3)).to.equal(
        239.323
      );
    });

    it("Converts millidolars to 0 decimal currency", () => {
      expect(utils.convertMilliUnitsToCurrencyAmount(239323, 0)).to.equal(
        239
      );
    });
  });
});
