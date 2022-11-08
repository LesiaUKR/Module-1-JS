/*
 * Посчитать общую сумму покупок в корзине
 */
const cart = [54, 28, 105, 70, 92, 17, 120];
// 2 сделать переменную total до цикла
let total = 0;

// console.log(cart.length);

// // 1 перебрать массив

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

// // 3 каждый элемент приплюсовать к total
//     total += cart[i];
// }

// console.log('Total: ', total);

 //можна записати через for of з меншою кількістю кода, якщо не потрібна заміна елементу

// for (const value of cart) {
//     total += value;
// }
 
// console.log('Total: ', total);

//додати податки

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1)
// }

console.log(cart);

// через for of додати податки не можна, бо він лише перебирає
// числа з масиву, а не замінює їх значення після додачі податку

// тобто так не підходить для поставленної задачі

// for (let value of cart) {
//     value = Math.round(value * 1.1);
// }

