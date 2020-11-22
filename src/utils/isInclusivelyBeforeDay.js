import dayjs from "dayjs";

import isAfterDay from "./isAfterDay";

export default function isInclusivelyBeforeDay(a, b) {
  if (!dayjs.isDayjs(a) || !dayjs.isDayjs(b)) return false;
  return !isAfterDay(a, b);
}
