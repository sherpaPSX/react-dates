import dayjs from "dayjs";
import { expect } from "chai";

import isSameDay from "../../src/utils/isSameDay";

const today = dayjs();
const tomorrow = dayjs().add(1, "days");

describe("isSameDay", () => {
  it("returns true if args are the same day", () => {
    expect(isSameDay(today, today)).to.equal(true);
  });

  it("returns false if args are not the same day", () => {
    expect(isSameDay(today, tomorrow)).to.equal(false);
  });

  it("returns false for same days of week", () => {
    // Flags accidentally use of dayjs's day() function, which returns index
    // within the week.
    expect(isSameDay(dayjs("2000-01-01"), dayjs("2000-01-08"))).to.equal(false);
  });

  describe("non-dayjs object arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isSameDay(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isSameDay(today, "foo")).to.equal(false);
    });
  });
});
