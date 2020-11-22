import { expect } from "chai";
import dayjs from "dayjs";

import getPooledMoment from "../../src/utils/getPooledMoment";

describe("getPooledMoment", () => {
  it("returns a dayjs given a day string", () => {
    const dayjsObj = getPooledMoment("2017-12-10");
    expect(dayjs.isDayjs(dayjsObj)).to.equal(true);
    expect(dayjsObj.format("YYYY MM DD")).to.equal("2017 12 10");
  });

  it("returns the same dayjs given the same day string", () => {
    const dayjsObj1 = getPooledMoment("2017-12-10");
    const dayjsObj2 = getPooledMoment("2017-12-10");
    expect(dayjsObj1).to.equal(dayjsObj2);
  });

  it("returns a different dayjs given a different day string", () => {
    const dayjsObj1 = getPooledMoment("2017-12-10");
    const dayjsObj2 = getPooledMoment("2017-12-11");
    expect(dayjsObj1).not.to.equal(dayjsObj2);
  });
});
