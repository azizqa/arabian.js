'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = exports.hasText = exports.hasNumbers = exports.dayName = exports.monthName = exports.convertEnglishNumbers = exports.convertNumbers = void 0;
var arabicDigitsRegex = /[٠-٩]/g;
var englishDigitsRegex = /[0-9]/g;
var arabicRegex = /[\u0600-\u06FF]/;
var dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
var monthNames = [
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
var AM = 'صباحاً';
var PM = 'مساءً';
/**
 *
 * @param n {string|number} a string or number that contains english digits to be converted to arabic digits
 */
var convertNumbers = function (n) {
    var arabicNumerals = {
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
    return n.toString().replace(englishDigitsRegex, function (w) {
        return arabicNumerals[w] || w;
    });
};
exports.convertNumbers = convertNumbers;
/**
 *
 * @param n {string|number} a string or number that contains arabic digits to be converted to english digits
 * @param int {boolean} if true, the number will be converted to an integer (default: false)
 */
var convertEnglishNumbers = function (n, int) {
    if (int === void 0) { int = false; }
    var englishNumerals = {
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
    var result = n.toString().replace(arabicDigitsRegex, function (w) {
        return englishNumerals[w] || w;
    });
    if (int) {
        return parseInt(result, 10);
    }
    // add option for decimals
    return result;
};
exports.convertEnglishNumbers = convertEnglishNumbers;
/**
 *
 * @param monthNumber {number} a number between 1 and 12 representing the month number, to be converted to the arabic month name
 */
var monthName = function (monthNumber) {
    return monthNames[monthNumber];
};
exports.monthName = monthName;
/**
 *
 * @param dayNumber {number} a number between 1 and 7 representing the day number, to be converted to the arabic day name
 */
var dayName = function (dayNumber) {
    return dayNames[dayNumber];
};
exports.dayName = dayName;
/**
 *
 * @param text {string} if the text has arabic numbers
 */
var hasNumbers = function (text) {
    return text.match(arabicDigitsRegex);
};
exports.hasNumbers = hasNumbers;
/**
 *
 * @param text {string} if the text has arabic text
 */
var hasText = function (text) {
    return text.match(arabicRegex);
};
exports.hasText = hasText;
/**
 *
 * @param date {date} a date object
 */
var dateFormat = function (date) {
    var day = (0, exports.dayName)(date.getDay());
    var month = (0, exports.monthName)(date.getMonth());
    var year = (0, exports.convertNumbers)(date.getFullYear());
    var d = (0, exports.convertNumbers)(date.getDate());
    var hours = (0, exports.convertNumbers)(date.getHours());
    var minutes = (0, exports.convertNumbers)(date.getMinutes());
    var seconds = (0, exports.convertNumbers)(date.getSeconds());
    var TT = date.getHours() > 12 ? PM : AM;
    return {
        formatted: "".concat(day, "\u060C ").concat(d, " ").concat(month, "\u060C ").concat(year, "\u060C ").concat(seconds, ":").concat(minutes, ":").concat(hours, " ").concat(TT),
        day: day,
        d: d,
        monthName: exports.monthName,
        year: year,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        TT: TT,
    };
};
exports.dateFormat = dateFormat;
