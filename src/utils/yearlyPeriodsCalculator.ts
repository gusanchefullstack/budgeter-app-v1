import * as dateHandler from "typescript-calendar-date";

export function getAnnualPeriods(start: string, end: string): {year: number}[] {
  const startDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(start);
  const endDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(end);

  const monthlyPeriods = dateHandler.periodOfMonths(startDate, endDate);
  const annualPeriods = monthlyPeriods.map((period) => ({year: period.year}))
  const uniqueAnnualPeriods: {year: number}[] = skipDuplicates(annualPeriods, "year");
  return uniqueAnnualPeriods;
}

function skipDuplicates(arr: {year: number}[], property: string): {year: number}[]  {
  const seenValues = new Set();
  return arr.filter(obj  => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const value: number = obj[property];
    if (seenValues.has(value)) {
      return false;
    }
    seenValues.add(value);
    return true;
  });
}

