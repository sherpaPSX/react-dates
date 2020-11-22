import dayjs from "dayjs";
import { expect } from "chai";

import isSameMonth from "../../src/utils/isSameMonth";

const today = dayjs();
const nextMonth = dayjs().add(1, "month");

describe("isSameMonth", () => {
  it("returns true if args are the same month", () => {
    expect(isSameMonth(today, today)).to.equal(true);
  });

  it("returns false if args are not the same month", () => {
    expect(isSameMonth(today, nextMonth)).to.equal(false);
  });

  describe("non-dayjs object arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isSameMonth(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isSameMonth(today, "foo")).to.equal(false);
    });
  });
});
