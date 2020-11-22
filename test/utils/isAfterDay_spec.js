import dayjs from "dayjs";
import { expect } from "chai";

import isAfterDay from "../../src/utils/isAfterDay";

const today = dayjs();
const tomorrow = dayjs().add(1, "days");

describe("isAfterDay", () => {
  it("returns true if first arg is after the second but have same month and year", () => {
    expect(isAfterDay(tomorrow, today)).to.equal(true);
  });

  it("returns true if first arg is after the second but have same day and year", () => {
    expect(isAfterDay(dayjs().clone().add(1, "month"), today)).to.equal(true);
  });

  it("returns true if first arg is after the second but have same day and month", () => {
    expect(isAfterDay(dayjs().clone().add(1, "year"), today)).to.equal(true);
  });

  it("returns false if args are the same day", () => {
    expect(isAfterDay(today, today)).to.equal(false);
  });

  it("returns false if first arg is after the second", () => {
    expect(isAfterDay(today, tomorrow)).to.equal(false);
  });

  describe("non-dayjs object arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isAfterDay(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isAfterDay(today, "foo")).to.equal(false);
    });
  });
});
