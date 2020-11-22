import dayjs from "dayjs";
import { expect } from "chai";

import isNextMonth from "../../src/utils/isNextMonth";

const today = dayjs();
const nextMonth = dayjs().add(1, "months");
const twoMonths = dayjs().add(2, "months");

describe("isNextMonth", () => {
  it("returns true if second argument is the next month after the first", () => {
    expect(isNextMonth(today, nextMonth)).to.equal(true);
  });

  it("returns false if second argument is not the next month after the first", () => {
    expect(isNextMonth(nextMonth, today)).to.equal(false);
  });

  it("returns false if second argument is more than one month after the first", () => {
    expect(isNextMonth(today, twoMonths)).to.equal(false);
  });

  describe("non-dayjs arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isNextMonth(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isNextMonth(today, "foo")).to.equal(false);
    });
  });
});
