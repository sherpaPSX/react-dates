import dayjs from "dayjs";
import { expect } from "chai";

import isInclusivelyBeforeDay from "../../src/utils/isInclusivelyBeforeDay";

const today = dayjs();
const tomorrow = dayjs().add(1, "days");

describe("isInclusivelyBeforeDay", () => {
  it("returns true if first argument is before the second", () => {
    expect(isInclusivelyBeforeDay(today, tomorrow)).to.equal(true);
  });

  it("returns true for same day arguments", () => {
    expect(isInclusivelyBeforeDay(today, today)).to.equal(true);
  });

  it("returns false if first argument is after the second", () => {
    expect(isInclusivelyBeforeDay(tomorrow, today)).to.equal(false);
  });

  describe("non-dayjs object arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isInclusivelyBeforeDay(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isInclusivelyBeforeDay(today, "foo")).to.equal(false);
    });
  });
});
