import { expect } from "chai";
import dayjs from "dayjs";

import getSelectedDateOffset from "../../src/utils/getSelectedDateOffset";

const today = dayjs();

describe("#getSelectedDateOffset", () => {
  it("returns a function modified dayjs object", () => {
    const fn = (day) => day.add(2, "days");
    const modifiedDay = getSelectedDateOffset(fn, today);
    expect(modifiedDay.format()).to.equal(
      today.clone().add(2, "days").format()
    );
  });

  it("returns the passed day when function is undefined", () => {
    const modifiedDay = getSelectedDateOffset(undefined, today);
    expect(modifiedDay.format()).to.equal(today.format());
  });

  it("modifies the returned day using the modifier callback", () => {
    const fn = (day) => day.add(2, "days");
    const modifier = (day) => day.subtract(2, "days");
    const modifiedDay = getSelectedDateOffset(fn, today, modifier);
    expect(modifiedDay.format()).to.equal(today.clone().format());
  });

  it("does not apply the modifier if function is undefined", () => {
    const modifier = (day) => day.subtract(2, "days");
    const modifiedDay = getSelectedDateOffset(undefined, today, modifier);
    expect(modifiedDay.format()).to.equal(today.format());
  });
});
