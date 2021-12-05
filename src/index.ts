'use strict';

const arabicDigitsRegex = /[٠-٩]/g;
const englishDigitsRegex = /[0-9]/g;
const arabicRegex = /[\u0600-\u06FF]/;
const dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const monthNames = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
];
const AM = 'صباحاً';
const PM = 'مساءً';

/**
 *
 * @param n {string|number} a string or number that contains english digits to be converted to arabic digits
 */
export const convertNumbers = (n: string | number): string => {
  const arabicNumerals: { [key in string]: string } = {
    '0': '٠',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
  };
  return n.toString().replace(englishDigitsRegex, (w) => {
    return arabicNumerals[w] || w;
  });
};

/**
 *
 * @param n {string|number} a string or number that contains arabic digits to be converted to english digits
 * @param int {boolean} if true, the number will be converted to an integer (default: false)
 */
export const convertEnglishNumbers = (n: string | number, int = false) => {
  const englishNumerals: { [key in string]: string } = {
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
  };
  const result = n.toString().replace(arabicDigitsRegex, (w) => {
    return englishNumerals[w] || w;
  });

  if (int) {
    return parseInt(result, 10);
  }
  // add option for decimals

  return result;
};

/**
 *
 * @param monthNumber {number} a number between 1 and 12 representing the month number, to be converted to the arabic month name
 */
export const monthName = (monthNumber: number) => {
  return monthNames[monthNumber];
};

/**
 *
 * @param dayNumber {number} a number between 1 and 7 representing the day number, to be converted to the arabic day name
 */
export const dayName = (dayNumber: number) => {
  return dayNames[dayNumber];
};

/**
 *
 * @param text {string} if the text has arabic numbers
 */
export const hasNumbers = (text: string) => {
  return text.match(arabicDigitsRegex);
};

/**
 *
 * @param text {string} if the text has arabic text
 */
export const hasText = (text: string) => {
  return text.match(arabicRegex);
};

/**
 *
 * @param date {date} a date object
 */
export const dateFormat = (date: Date) => {
  const day = dayName(date.getDay());
  const month = monthName(date.getMonth());
  const year = convertNumbers(date.getFullYear());
  const d = convertNumbers(date.getDate());
  const hours = convertNumbers(date.getHours());
  const minutes = convertNumbers(date.getMinutes());
  const seconds = convertNumbers(date.getSeconds());
  const TT = date.getHours() > 12 ? PM : AM;

  return {
    formatted: `${day}، ${d} ${month}، ${year}، ${seconds}:${minutes}:${hours} ${TT}`,
    day,
    d,
    monthName,
    year,
    hours,
    minutes,
    seconds,
    TT,
  };
};
