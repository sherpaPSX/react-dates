import dayjs from "dayjs";

import isSameDay from "./isSameDay";

export default function isPreviousDay(a, b) {
  if (!dayjs.isDayjs(a) || !dayjs.isDayjs(b)) return false;
  const dayBefore = dayjs(a).subtract(1, "day");
  return isSameDay(dayBefore, b);
}
