export interface AgeDetails {
  years: number;
  months: number;
  days: number;
  formattedAge: string;
}

export interface BirthdayCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
  targetYear: number;
}

export const DOB_STRING = '2007-10-24';

/**
 * Calculates current age dynamically based on DOB (2007-10-24)
 */
export function calculateAge(dobStr: string = DOB_STRING, now: Date = new Date()): AgeDetails {
  const dob = new Date(dobStr);
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    // Get last day of previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years,
    months,
    days,
    formattedAge: `${years} YEARS OLD`
  };
}

/**
 * Calculates live time remaining until next birthday (24 October)
 */
export function calculateNextBirthday(dobStr: string = DOB_STRING, now: Date = new Date()): BirthdayCountdown {
  const dob = new Date(dobStr);
  const currentYear = now.getFullYear();

  // Target birthday in current year
  let target = new Date(currentYear, dob.getMonth(), dob.getDate(), 0, 0, 0, 0);

  // If birthday already passed this year, set to next year
  if (now.getTime() > target.getTime()) {
    // Check if today is birthday
    if (now.getMonth() === dob.getMonth() && now.getDate() === dob.getDate()) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isToday: true,
        targetYear: currentYear
      };
    }
    target = new Date(currentYear + 1, dob.getMonth(), dob.getDate(), 0, 0, 0, 0);
  }

  const diffMs = target.getTime() - now.getTime();

  if (diffMs <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isToday: true,
      targetYear: target.getFullYear()
    };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isToday: false,
    targetYear: target.getFullYear()
  };
}
