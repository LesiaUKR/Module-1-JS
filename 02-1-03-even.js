/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// 1 переменная тотал
let total = 0;

// // 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     //   const number = numbers[i];
//     const number = numbers[i];
//     console.log(numbers[i]);

//     //   // 3 на каждой итерации проверить элемент на чётность
//     if (number % 2 === 0) {
//         console.log('Четное!!!!');
//     // 4 если четный плюсуем к тотал
//     total += number;
//     }
// }

// console.log('Total: ', total);

//так як для вирішення цієї задачі не потрібна заміна значення змінної з масиву, 
//краще використовувати for of метод

// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - четное!!!!`);
//     total += number;
//   }
// }

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('Эту итерацию нужно пропустить', number);
    continue;
  }

  console.log(`${number} - четное!!!!`);
  total += number;
}

console.log('Total: ', total);
