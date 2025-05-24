import { getDailyPeriods } from "../utils/dailyPeriodsCalculator.js";
import { getMonthlyPeriods } from "../utils/monthlyPeriodsCalculator.js";
import { getAnnualPeriods } from "../utils/yearlyPeriodsCalculator.js";
import { getOneTimePeriod } from "../utils/oneTimePeriodCalculator.js";
import { CONCEPT_FREQUENCY } from "#generated/prisma/enums.js";
import { CalendarDate, CalendarMonth, CalendarYear } from "typescript-calendar-date";
import { BudgetBucket } from "#generated/prisma/client.js";

export const periodsGenerator = (frequency: CONCEPT_FREQUENCY, start: string, end: string, recurringBudgetAmount: number) => {
  let dailyPeriods: CalendarDate[] = [];
  let monthlyPeriods: CalendarMonth[] = [];
  let annualPeriods: CalendarYear[] = [];
  let oneTimePeriod: CalendarDate = getOneTimePeriod(end);
  let periods: BudgetBucket[] = [];

  switch (frequency) {
    case CONCEPT_FREQUENCY.DAILY:
      dailyPeriods = getDailyPeriods(start, end);
      periods = dailyPeriods.map((period) => ({
        plannedYear: period.year,
        plannedMonth: period.month,
        plannedDay: period.day,
        plannedAmount: recurringBudgetAmount,
        actualYear: null,
        actualMonth: null,
        actualDay: null,
        actualAmount: null,
      }));
      break;
    case CONCEPT_FREQUENCY.MONTHLY:
      monthlyPeriods = getMonthlyPeriods(start, end);
      periods = monthlyPeriods.map((period) => ({
        plannedYear: period.year,
        plannedMonth: period.month,
        plannedDay: null,
        plannedAmount: recurringBudgetAmount,
        actualYear: null,
        actualMonth: null,
        actualDay: null,
        actualAmount: null,
      }));
      break;
    case CONCEPT_FREQUENCY.ANNUALLY:
      annualPeriods = getAnnualPeriods(start, end);
      periods = annualPeriods.map((period) => ({
        plannedYear: period.year,
        plannedMonth: null,
        plannedDay: null,
        plannedAmount: recurringBudgetAmount,
        actualYear: null,
        actualMonth: null,
        actualDay: null,
        actualAmount: null,
      }));
      break;
    case CONCEPT_FREQUENCY.ONE_TIME:
      oneTimePeriod = getOneTimePeriod(end);
      periods = [
        {
          plannedYear: oneTimePeriod.year,
          plannedMonth: oneTimePeriod.month,
          plannedDay: oneTimePeriod.day,
          plannedAmount: recurringBudgetAmount,
          actualYear: null,
          actualMonth: null,
          actualDay: null,
          actualAmount: null,
        },
      ];
      break;
  }
  return periods;
};
