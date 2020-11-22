import dayjs from "dayjs";

import isSameMonth from "./isSameMonth";

export default function isNextMonth(a, b) {
  if (!dayjs.isDayjs(a) || !dayjs.isDayjs(b)) return false;
  return isSameMonth(a.clone().add(1, "month"), b);
}
