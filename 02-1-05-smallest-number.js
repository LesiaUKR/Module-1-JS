/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0]; //говорим, что первая монетка самая маленькая
//сверяем последующие монетки с первой с помощью for
for (const number of numbers) {
//если монетка, которую достали меньше первой, ставим ее на место первой
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log('smallestNumber: ', smallestNumber);