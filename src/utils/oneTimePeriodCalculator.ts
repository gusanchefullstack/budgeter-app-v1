import * as dateHandler from "typescript-calendar-date";

export function getOneTimePeriod(end: string): dateHandler.CalendarDate {
  const endDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(end);

  return endDate;
}
