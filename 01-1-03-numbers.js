// Парс числа с Number.parseInt()
let elementWidth = "50px";
// записать новое парс значение
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth:", elementWidth);
// const result = Number.parseInt(elementWidth);
// console.log(result);

// Парс числа с Number.parseFl() для чисел с точкой
let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight:", elementHeight);

// Метод числа toFixed(digits)
// Матрешки на примере console.log(Number(число.toFixed(digits))) вызывается на самом числе
let salary = 1300.16472;
// salary = salary.toFixed(2); -длинная запись
// salary = Number(salary); -длинная запись
// salary = Number(salary.toFixed(2));
// console.log(salary);

// если не записывать новую переменную
// console.log(Number(salary.toFixed(2)));

/*
* - Приведение (преобразование) к числу с Number(value)
* - NaN (Not a Number) и метод Number.isNaN(value)
*/
let quantity = "30";
let value = "Эту строку невозможно привести к числу"

// console.log(Number(quantity));
// console.log(Number(value));

/*
* Math
* - возведение в степень
* - Exponent operator
*/
// console.log(Math);
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// современный аналог Math.pow - две ** - называется оператор экспоненты
// console.log(2 ** 5);

// или с переменными console.log(base ** power);

/*
Напиши скрипт, который просит пользователя ввести число и степень,
возводит число в эту степень и выводит результат в консоль
*/

// 1. попросить ввести число и сохранить в переменную
// let base = prompt("Давай число");
// base = Number(base);

// console.log(base);
// 2. попросить ввести степень и сохранить в переменную
// let power = prompt("Давай степень");
// power = Number(power);
// console.log(power);
// 3. возвести введенные данные в степень и вывести
// const result = base ** power;
// console.log(result);



/*
Генерим псевдослучайные числа
* - Math.random
* - Math.round()
*/
// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);
// console.log(Math.round(0.3));

/*
Сменный цвет фона на странице при перезагрузке
*/
// const colors = ["tomato", "teal", "orange", "deeppink", "skyblue"];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

