# arabic.js
A lightweight utility that helps with Arabic digits & date conversions & some useful utils.

## Install and usage

```sh
npm i arabic.js
```

## Example
```js
const arjs = require('arabic.js');

console.log(arjs.convertNumbers(12)); // ١٢
console.log(arjs.monthName(0)); // يناير
```

## Methods
**English numbers** `.convertNumbers("2021") → ٢٠٢١`

**Arabic numbers** `.convertEnglishNumbers("٢٠٢١") → 2021`

**Month name** `.monthName(0) → يناير`

**Day name** `.dayName(1) → الإثنين`

**Has Arabic numbers** `.hasNumbers("السبت، ٤ ديسمبر، ٢٠٢١، ٥٤:١٩:١٨ مساءً") → true`

**Has Arabic text and numbers** `.hasText("السبت، ٤ ديسمبر، ٢٠٢١، ٥٤:١٩:١٨ مساءً") → true`

**Formatted date** `.dateFormat(new Date()) → `
```json
{
  formatted: 'السبت، ٤ ديسمبر، ٢٠٢١، ٥٤:١٩:١٨ مساءً',
  dayName: 'السبت',
  day: '٤',
  monthName: 'ديسمبر',
  year: '٢٠٢١',
  hours: '١٨',
  minutes: '١٩',
  seconds: '٥٤',
  TT: 'مساءً'
}
```
