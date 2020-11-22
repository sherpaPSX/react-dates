import dayjs from "dayjs";

import isSameMonth from "./isSameMonth";

export default function isPrevMonth(a, b) {
  if (!dayjs.isDayjs(a) || !dayjs.isDayjs(b)) return false;
  return isSameMonth(a.clone().subtract(1, "month"), b);
}
