   /*for (инициализация; условия; пост - выражение){
   условие, для выполнения}
   += оператор, i += 3 тоже самое что i = i + 3
   */

// for (let i = 0; i < 5; i += 1) {
//  console.log (i)
// }
// console.log("hello")

 /*Напиши скрипт, который подсчитывает общую сумму зарплат работников
*Количество работников хранится в переменной employees
*Зарплата каждого работника это случайное число от 500 до 5000
*Записать сумму в переменную totalSalary и вывести в консоль
 */
// 1. сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;
// // 2. перебрать работников в цикле
// for (let i = 1; i < employees; i += 1) {
//    // 3. сгенерить случайную зп
//    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
//    console.log(`ЗП работника ${i} - ${salary}`)
// // 4. прибавить к тоталу
//    totalSalary += salary;
// }
// // 5. лог
// console.log("totalSalary: ", totalSalary)

/*Напиши скрипт, который подсчитывает сумму всех четных чисел,
 *которые входят в диапазон чисел в переменных от min to max
*Например, если min=0 и max=5, то диапазон 0-5, и в нем два четных
числа - 2 и 4, их сумма 6
остаток от деления 15 % 2
 */
  // 1. сделать переменные
// const min = 5;
// const max = 13;
// let total = 0;

// фор от мин до макс с шагом в 1

// for (let i = min; i <= max; i += 1) {
//    // проверяем остаток от деления
//    if (i % 2 === 0) {
//       console.log(`четное: `, i);
      // пишем в сумму
//       total += i;
//    }
// }
/*верхний код не совсем хороший с точки зрения качества
можно использовать логику от обратного с помощью continue

*/

// for (let i = min; i <= max; i += 1) {
//    // проверяем остаток от деления
//    if (i % 2 !== 0) {
//       console.log('Не четное: ', i);
//       continue;
//    }
//     // пишем в сумму
//    console.log('четное: ', i);
//    total += i;
// }

// console.log('total: ', total);



// let word = "";

// for (let i = 0; i < 3; i += 1) {
//   console.log("Iteration:", i + 1);
//   console.log("previous string", word);
//   console.log(i);
//   word += i;
//   console.log("next string", word);
// }

// console.log('final:', word)

// const word = "javascript";

// let word2 = "";

// for (let i = 0; i < word.length; i += 1) {
//   console.log("Iteration:", i + 1);
//   console.log("previous string", word2);
//   console.log(word[i]);

//   word2 += word[i];
//   console.log("next string", word2);
// }

// console.log(word2);

// const num1 = 5
// const num2 = 10

// for(let i = num2; i >= num1; i-=1) {
//     console.log(i)
// }

// for(let a = 100; a > 50; a -= 10) {
//     console.log(a)
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 1) {
//       console.log("Знайшли число 1, перериваємо виконання циклу");
//       break;
//     }
//   }

//   console.log("Лог після циклу");

//   for (let i = 0; i < 15; i += 1) {
//     console.log( 'before', i);
//     if (i / 3 === 4 || i / 2 === 5) {
//       continue;
//     }
//     console.log('after', i);
//   }
/*
 * Pre-increment и Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

