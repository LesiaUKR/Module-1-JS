// function checkStorage(available, ordered) {
//   // Change code below this

//   if (ordered === 0) {
//     return "Your order is empty!";
//     }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//     }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);
//9 task
// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   // Change code below this line

//     array = [firstElement, lastElement]
//     return array;

//   // Change code above this line
// }

// getExtremeElements(["apple", "peach", "pear", "banana"])

//10 task

// function splitMessage(message, delimiter) {
//   let words;
 
//     words = message.split(delimiter);
  
//   return words;
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

//11 task
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     const wordsQuantity = message.split(" ").length;
//     Array = message.split(" ");
//     console.log(wordsQuantity);

//    // Change code above this line
//     return wordsQuantity * pricePerWord;

// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// 13 task
// function slugify(title) {
//   // Change code below this line
//   let slug = " ";
  
//   slug = title.toLowerCase().split(" ").join("-");

// return slug;
//   // Change code above this line
// }

// slugify("How to become a JUNIOR developer in TWO WEEKS");

// 14 task
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// 16 task
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//  const newArray = firstArray.concat(secondArray);
//  if (newArray.length > maxLength){
//    return newArray.slice(0, maxLength);
//  } else {
//    return newArray
//  }
//   // Change code above this line
//   }
//   makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 4)
  
  //18 task
// function calculateTotal(number){
//     let sumNumbers = 0;
//     for (i = 0; i <= number; i += 1){
//         sumNumbers += i;
//         console.log(calculateTotal);
// }
//     return sumNumbers;
// }
// calculateTotal(3);

// 19 task
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// 20 task 
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (item of order) {
   total += item;
}
  // Change code above this line
  return total;
}
calculateTotalPrice([12, 85, 37, 4])
// 21 task
// function findLongestWord(string) {
//     // Change code below this line
//     let word = string.split(" ");
//    let longestWord = word[0];

//     for (let i = 0; i < word.length; i += 1) {
       
//         if (word[i].length > longestWord.length) {
//         longestWord = word[i];
//     }
     
//     }
//    return longestWord;
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")

//22 task
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//    for (i = min; i <= max; i +=1){
//     numbers.push(i);
     
//    }
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);

// 23 task
// function filterArray(numbers, value) {
//    // Change code below this line
// const filteredArray = [];

//   for (number of numbers) {
//     if (number > value) {
//       filteredArray.push(number);
//       console.log(`${number} больше ${value}`)
//     }
//   }

// return filteredArray;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3)

// 24 task
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit)
       
// }
// checkFruit("plum");

// 25 task

// function getCommonElements(array1, array2) {
//   // Change code below this line
//  const uniqueElements = [];
  
//  for (const element of array1) {
//    if (array2.includes(element)){
//     uniqueElements.push(element)}
// }
// return uniqueElements;
//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);

// 26 task
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (element of order) {
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4])

// 27 task
// like 23

// 28 task
// Change code below this line
// const a = 3 % 1; //0
// const b = 4 % 3; //1
// const c = 11 % 4;//3
// const d = 12 % 7;//5
// const e = 8 % 6;//2
// Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

// 5 % 1 = 0;
// // 5, -поділене на 1, дорівнює 5, а остача - 0

// 5 % 2 = 1;
// //  5, поділене на 2, дорівнює 2, а остача - 1

// 5 % 3 = 2;
// //  5, поділене на 3, дорівнює 1, а остача - 2

// 5 % 4 = 1;
// //  5, поділене на 4, дорівнює 1, а остача - 1

// 5 % 5 = 0;
// //  5, поділене на 5, дорівнює 1, а остача - 0

// 29 task
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let evenNumbers = [];

//   for (let i = start; i <= end; i +=1){
//     if(i % 2 === 0){
//         evenNumbers.push(i);
//     }
//   }
// return evenNumbers;

//     // Change code above this line
// }

getEvenNumbers(2, 5)

// 32 task

function includes(array, value) {
  // Change code below this line

    for (const element of array) {
      if (element === value) {
        return true;
      }
  }
  return false;
  // Change code above this line
}
includes([1, 2, 3, 4, 5], 3)