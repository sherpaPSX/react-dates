import dayjs from "dayjs";
import { expect } from "chai";

import isInclusivelyAfterDay from "../../src/utils/isInclusivelyAfterDay";

const today = dayjs();
const tomorrow = dayjs().add(1, "days");

describe("isInclusivelyAfterDay", () => {
  it("returns true if first argument is after the second", () => {
    expect(isInclusivelyAfterDay(tomorrow, today)).to.equal(true);
  });

  it("returns true for same day arguments", () => {
    expect(isInclusivelyAfterDay(today, today)).to.equal(true);
  });

  it("returns false if first argument is before the second", () => {
    expect(isInclusivelyAfterDay(today, tomorrow)).to.equal(false);
  });

  describe("non-dayjs object arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isInclusivelyAfterDay(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isInclusivelyAfterDay(today, "foo")).to.equal(false);
    });
  });
});
