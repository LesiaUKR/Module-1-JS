/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// //  1 вары
// let balance = 500;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
// );
// // 2. если сумма <=баланс
// if (payment <= balance) {
//   balance -= payment;
//   // balance = balance - payment
// // 3.'Все хорошо снимаем деньги...Спасибо за покупку!'
//   console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }

// console.log('Операция завершена');
