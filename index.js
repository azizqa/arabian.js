"use strict";

const arabicDigitsRegex = /[٠-٩]/g;
const englishDigitsRegex = /[0-9]/g;
const arabicRegex = /[\u0600-\u06FF]/;
const dayNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const AM = "صباحاً";
const PM = "مساءً";

/**
 *
 * @param n a string or number that contains english digits to be converted to arabic digits
 */
exports.convertNumbers = (n) => {
    const arabicNumerals = {
        '0': '٠',
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩'
    };
    return n.toString().replace(englishDigitsRegex, w => {
        return arabicNumerals[w] || w;
    });
};

/**
 *
 * @param n a string or number that contains arabic digits to be converted to english digits
 * @param int if true, the number will be converted to an integer (default: false)
 */
exports.convertEnglishNumbers = (n, int = false) => {
    const englishNumerals = {
        '٠': '0',
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9'
    };
    const result = n.toString().replace(arabicDigitsRegex, w => {
        return englishNumerals[w] || w;
    });

    if (int) {
        return parseInt(result);
    }
    return result;
};

/**
 *
 * @param monthNumber a number between 1 and 12 representing the month number, to be converted to the arabic month name
 */
exports.monthName = (monthNumber) => {
    return monthNames[monthNumber];
}

/**
 *
 * @param dayNumber a number between 1 and 7 representing the day number, to be converted to the arabic day name
 */
exports.dayName = (dayNumber) => {
    return dayNames[dayNumber];
}

/**
 *
 * @param text if the text has arabic numbers
 */
exports.hasNumbers = (text) => {
    return text.match(arabicDigitsRegex);
}

/**
 *
 * @param text if the text has arabic text
 */
exports.hasText = (text) => {
    return text.match(arabicRegex);
}

/**
 *
 * @param {date} date a date object
 */
exports.dateFormat = (date) => {
    const dayName = exports.dayName(date.getDay());
    const monthName = exports.monthName(date.getMonth());
    const year = exports.convertNumbers(date.getFullYear());
    const day = exports.convertNumbers(date.getDate());
    const hours = exports.convertNumbers(date.getHours());
    const minutes = exports.convertNumbers(date.getMinutes());
    const seconds = exports.convertNumbers(date.getSeconds());
    const TT = date.getHours() > 12 ? PM : AM;

    return {
        formatted: `${dayName}، ${day} ${monthName}، ${year}، ${seconds}:${minutes}:${hours} ${TT}`,
        dayName,
        day,
        monthName,
        year,
        hours,
        minutes,
        seconds,
        TT
    }
}

console.log(exports.dateFormat(new Date()));