import * as dateHandler from "typescript-calendar-date";

export function getAnnualPeriods(start: string, end: string):dateHandler.CalendarDate[] {
  const startDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(start);
  const endDate: dateHandler.CalendarDate = dateHandler.parseIso8601String(end);

  const monthlyPeriods = dateHandler.periodOfMonths(startDate, endDate);
  console.log("Monthly periods", monthlyPeriods);
  const annualPeriods = monthlyPeriods.map((period) => (dateHandler.lastDateInMonth(period)))
  console.log("Annual periods", annualPeriods); 
  const uniqueAnnualPeriods: dateHandler.CalendarDate[] = skipDuplicates(annualPeriods.reverse(), "year");
  console.log("Unique annual periods", uniqueAnnualPeriods);
  return uniqueAnnualPeriods;
}

function skipDuplicates(arr: dateHandler.CalendarDate[], property: string): dateHandler.CalendarDate[]  {
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

