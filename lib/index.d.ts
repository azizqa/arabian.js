/**
 *
 * @param n {string|number} a string or number that contains english digits to be converted to arabic digits
 */
export declare const convertNumbers: (n: string | number) => string;
/**
 *
 * @param n {string|number} a string or number that contains arabic digits to be converted to english digits
 * @param int {boolean} if true, the number will be converted to an integer (default: false)
 */
export declare const convertEnglishNumbers: (n: string | number, int?: boolean) => string | number;
/**
 *
 * @param monthNumber {number} a number between 1 and 12 representing the month number, to be converted to the arabic month name
 */
export declare const monthName: (monthNumber: number) => string;
/**
 *
 * @param dayNumber {number} a number between 1 and 7 representing the day number, to be converted to the arabic day name
 */
export declare const dayName: (dayNumber: number) => string;
/**
 *
 * @param text {string} if the text has arabic numbers
 */
export declare const hasNumbers: (text: string) => boolean;
/**
 *
 * @param text {string} if the text has arabic text
 */
export declare const hasText: (text: string) => boolean;
/**
 *
 * @param date {date} a date object
 */
export declare const dateFormat: (date: Date) => {
    formatted: string;
    day: string;
    d: string;
    month: string;
    year: string;
    hours: string;
    minutes: string;
    seconds: string;
    TT: string;
};
