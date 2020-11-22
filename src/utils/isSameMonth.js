import dayjs from "dayjs";

export default function isSameMonth(a, b) {
  if (!dayjs.isDayjs(a) || !dayjs.isDayjs(b)) return false;
  // Compare least significant, most likely to change units first
  // Moment's isSame clones dayjs inputs and is a tad slow
  return a.month() === b.month() && a.year() === b.year();
}
