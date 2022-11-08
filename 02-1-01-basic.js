/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[1] = 'qwerqrwr';
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */
// let a = 10;
// let b = a; //при зміні змінної а, змінна b залишиться такою ж, бо це просто копіювання данних із змінної а,
// тобто це передача по значенню, а не по посиланню. Числа, NaN,

// a = 20;

// console.log('a =', a);
// console.log('b =', b);

//у випадку масивів (складних типів - функція, масив, обєкт) передача йде по посиланню
// const a = [1, 2, 3];
// const b = a; //тут b копіюється лише посилання на одне й те саме місце в пам'яті

// console.log('a =', a);
// console.log('b =', b);

// a[0] = 500;

// console.log('a =', a);
// console.log('b =', b);

// //тобто масиви а і b будуть рівнятися, бо містимуть однакове посилання на місце зберігання даних в пам'яті

// console.log(a === b);
// //при цьому два різні масиви навіть з однаковим вмістом, не будуть рівними, бо мають різні посилання
// console.log([1, 2, 3] === [1, 2, 3]); //false


/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table(friends);
// // const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }

//другий спосіб більш декларативний
// // for (let friend of friends) {
// //   console.log(friend);
// // }

// console.table(friends);

// function maskify(cc) {
//   let cc = 33333333
//   cc.replace(cc.slice(0, -4), '#') + cc.slice(-4);
   
// }
