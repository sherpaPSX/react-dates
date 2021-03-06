import dayjs from "dayjs";
import { expect } from "chai";

import isBeforeDay from "../../src/utils/isBeforeDay";

const today = dayjs();
const tomorrow = dayjs().add(1, "days");

describe("isBeforeDay", () => {
  it("returns true if first arg is before the second but have same month and year", () => {
    expect(isBeforeDay(today, tomorrow)).to.equal(true);
  });

  it("returns true if first arg is before the second but have same day and year", () => {
    expect(isBeforeDay(today, dayjs().clone().add(1, "month"))).to.equal(true);
  });

  it("returns true if first arg is before the second but have same day and month", () => {
    expect(isBeforeDay(today, dayjs().clone().add(1, "year"))).to.equal(true);
  });

  it("returns false if args are the same day", () => {
    expect(isBeforeDay(today, today)).to.equal(false);
  });

  it("returns false if first arg is after the second", () => {
    expect(isBeforeDay(tomorrow, today)).to.equal(false);
  });

  describe("non-dayjs object arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isBeforeDay(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isBeforeDay(today, "foo")).to.equal(false);
    });
  });
});
