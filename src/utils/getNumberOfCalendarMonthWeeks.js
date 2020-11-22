import dayjs from "dayjs";

function getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek) {
  const weekDayDiff = firstDayOfMonth.day() - firstDayOfWeek;
  return (weekDayDiff + 7) % 7;
}

export default function getNumberOfCalendarMonthWeeks(
  month,
  firstDayOfWeek = dayjs.localeData().firstDayOfWeek()
) {
  const firstDayOfMonth = month.clone().startOf("month");
  const numBlankDays = getBlankDaysBeforeFirstDay(
    firstDayOfMonth,
    firstDayOfWeek
  );
  return Math.ceil((numBlankDays + month.daysInMonth()) / 7);
}
