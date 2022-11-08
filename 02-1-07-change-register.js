/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'qWeRTzxCv';
// /*олдскульный метод*/
// const letters = string.split(''); //разбивает строку посимвольно
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);
 /*это условие проверяет в нижнем ли регистре*/
//   if (letter === letter.toLowerCase()) {
//     console.log('Эта буква в нижнем регистре!!! - ', letter);

//     invertedString += letter.toUpperCase();
//   }
//    /*это условие превращает букву из верхнего регистра в нижнмй*/
//   else {
//     console.log('Эта буква в верхнет регистре!!! - ', letter);
//     invertedString += letter.toLowerCase();
//   }

//   const isEqual = letter === letter.toLowerCase(); //необязательно делать эту переменную
// /*всю конструкцию if можна заменить на тернарный вид*/
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);