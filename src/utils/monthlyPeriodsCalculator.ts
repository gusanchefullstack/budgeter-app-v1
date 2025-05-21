import * as dateHandler from "typescript-calendar-date";

export function getMonthlyPeriods(start: string, end: string): dateHandler.CalendarMonth[] {
  const startDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(start);
  const endDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(end);

  const monthlyPeriods = dateHandler.periodOfMonths(startDate, endDate);
  return monthlyPeriods;
}

