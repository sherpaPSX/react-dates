import dayjs from "dayjs";
import { expect } from "chai";

import isPreviousDay from "../../src/utils/isPreviousDay";

const today = dayjs();
const yesterday = dayjs().subtract(1, "days");

describe("isPreviousDay", () => {
  it("returns true if second argument is the day immediately before the first", () => {
    expect(isPreviousDay(today, yesterday)).to.equal(true);
  });

  it("returns false if the second arg is not the day immediately before the first", () => {
    expect(isPreviousDay(yesterday, today)).to.equal(false);
  });

  describe("non-dayjs arguments", () => {
    it("is false if first argument is not a dayjs object", () => {
      expect(isPreviousDay(null, today)).to.equal(false);
    });

    it("is false if second argument is not a dayjs object", () => {
      expect(isPreviousDay(today, "foo")).to.equal(false);
    });
  });
});
