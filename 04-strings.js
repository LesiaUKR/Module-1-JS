/*Длина строки, свойство length*/
// const message = 'В этой строке 26 символов.';
// console.log(message.length);
/*
 - const message = '' - строчный литерал;
 - const.length() - вызов одного из методов length (lenth методов не имеет, поэтому это неверно так писать код)
 - const.length - способ записи для обращения к свойству length
*/

/*Конкатенация строк*/

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName)

/*Шаблонные строки - template strings*/
// const quantity = 5;
// const orderMsg = `Вы заказываете ${quantity} холодильников.`;
// console.log(orderMsg);

/*Нормализация с методом toLowerCase*/

// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase()

// console.log(brand);

// или вариант применения
// let brand = promt('Давай бренд');
// brand = brand.toLowerCase();

// console.log(brand);
/* Строка индексируется. 
Можно обратиться к любому символу в строке*/
// let brand = 'SamSUnG';
// console.log(brand[0]); //- будет буква S
// console.log(brand.slice[1]); //-отрежет первую букву
// console.log(brand.slice(1).toLowerCase()); //сделает маленькими все буквы, кроме отрезанной первой
// brand = brand[0] + brand.slice(1).toLowerCase(); //сцепит первую ранее отрезанную букву с частью слова с приведенными к маленьким буквами
// console.log(brand);

/*
 * Поиск в строке с методом includes()
 */
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1)); //на строке 1 вызван метод, который проверяет есть ли в составе строки 1 слово указанное в переменной
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2)); //не видит слова распродажа потому что оно написано большими буквами, т.е. нужно сделать вначале нормализацию (привести к маленьким буквам все предложение)
// const normalizedString2 = string2.toLowerCase(); //привели к маленьким буквам предложение

// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// function getSubstring(string, length) {
    
//   const substring = string.slice(0, substring.length); // Change this line

//   return substring;
// }