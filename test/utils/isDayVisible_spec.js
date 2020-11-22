import dayjs from "dayjs";
import { expect } from "chai";

import isDayVisible from "../../src/utils/isDayVisible";

describe("#isDayVisible", () => {
  it("returns true if arg is in visible months", () => {
    const test = dayjs().add(3, "months");
    const currentMonth = dayjs().add(2, "months");
    expect(isDayVisible(test, currentMonth, 2)).to.equal(true);
  });

  it("returns false if arg is before first month", () => {
    const test = dayjs().add(1, "months");
    const currentMonth = dayjs().add(2, "months");
    expect(isDayVisible(test, currentMonth, 2)).to.equal(false);
  });

  it("returns false if arg is after last month", () => {
    const test = dayjs().add(4, "months");
    const currentMonth = dayjs().add(2, "months");
    expect(isDayVisible(test, currentMonth, 2)).to.equal(false);
  });

  describe("enableOutsideDays", () => {
    it("returns true if arg is in partial week before visible months", () => {
      const test = dayjs("2019-04-30");
      const currentMonth = dayjs("2019-05-01");
      expect(isDayVisible(test, currentMonth, 1, false)).to.equal(false);
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(true);
    });

    it("returns true if arg is in partial week after visible months", () => {
      const test = dayjs("2019-06-01");
      const currentMonth = dayjs("2019-05-01");
      expect(isDayVisible(test, currentMonth, 1, false)).to.equal(false);
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(true);
    });

    it("returns false if arg is before partial week before visible months", () => {
      const test = dayjs("2019-04-27");
      const currentMonth = dayjs("2019-05-01");
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(false);
    });

    it("returns false if arg is after partial week after visible months", () => {
      const test = dayjs("2019-06-03");
      const currentMonth = dayjs("2019-05-01");
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(false);
    });
  });
});
