/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 * эта функция ничего не возвращает (нет необходимости в return)
 * не все функции что-то возвращают
*/

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);