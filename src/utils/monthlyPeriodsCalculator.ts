import * as dateHandler from "typescript-calendar-date";

export function getMonthlyPeriods(start: string, end: string): dateHandler.CalendarDate[] {
  const startDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(start);
  const endDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(end);

  const monthlyPeriods = dateHandler.periodOfMonths(startDate, endDate);
  const fullMonthlyPeriods = monthlyPeriods.map((period) => dateHandler.lastDateInMonth(period));
  return fullMonthlyPeriods;
}

