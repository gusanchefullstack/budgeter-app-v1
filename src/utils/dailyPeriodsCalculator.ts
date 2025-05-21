import * as dateHandler from "typescript-calendar-date";

export function getDailyPeriods(start: string, end: string): dateHandler.CalendarDate[] {
  const startDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(start);
  const endDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(end);

  const dailyPeriods = dateHandler.periodOfDates(startDate, endDate);
  return dailyPeriods;
}


