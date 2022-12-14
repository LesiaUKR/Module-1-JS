// const a = [1, 2, 3, 4, 5]
// for(let i = 0; i < a.length; i+=1) {
//     console.log(a[i] + 10)
// }
// for(const elem of a) {
//     console.log(elem + 10)
// }

// const a = 2;
// const b = a;
// console.log(a === b)

// const array1 = [1, 2, 3];
// const array2 = array1;

// console.log(array1)
// console.log(array2)
// console.log(array1 === array2)

// array1[0] = 10;

// console.log(array1)
// console.log(array2);

// array2[2] = 5;

// console.log(array1)

// const array3 = array2

// console.log(array3)

// array3[1] = 100;

// console.log(array1)

// array2.length = 0;

// console.log(array3)

// array1[2] = 1000;
// console.log(array3)

// for (const elem of array3) {
//     console.log(elem)
// }
// console.log(array3.length)


// let array1 = [1, 3, 5]
// let array2 = array1;

// array1[0] = 50;
// console.log(array2)

// array1 = [9, 90, 900]

// console.log(array1)
// console.log(array2)

// array2 = array1;

// console.log(array1)
// console.log(array2)

// const a = [1, 2, 3]
// const b = a
// console.log(a === b) // true

// const c = [1, 2, 3]
// const d = [1, 2, 3]
// console.log(c === d) // false
// console.log(c[0] === d[0]) // true

// const e = [1, 2, [3, 4]]
// const f = [1, 2, [3, 4]]
// console.log(e[2] === f[2]) // false потому что сравнивается ссылка одного масива и другого
// console.log(e[2][0]) // 3 можемо обратится к элементу массива в массиве

 /*SPLIT - метод строки, который разделяет строку на массив элементов*/
// const string = '1-!2-!3-!4-!5-!6-!7-!8-!9'

// console.log(string.split('!'))

// const string2 = '123456789'

// const array = string2.split('')

// console.log(array)


// const array3 = [1, 2, 3, 4, 5, 6, 7];
// const string3 = array3.join('***')
// console.log(string3)

/*includes - метод строки, который отвечает, есть ли элемент а массиве или нет*/
// const array5 = [1,4,6,7,4,7,89]
// const res1 = array5.includes(100 && 4) //результат true - поэтому нельзя так искать, так как вначале будет определено значение выражения 100 && 4, а потом будет искаться 4ка в массиве*/
// console.log(res1) // true
// const res2 = array5.includes(100) && array5.includes(4)
// console.log(res2) // false
 
/*PUSH - метод додає в масив вказані елементи, а повертає довжину*/
// const emptyArray = []
// const q = emptyArray.push(1, 2, 3, 100, 200, 1000, 100000)
// console.log(emptyArray)
// console.log(q)// 7 - передав довжину

/*POP - метод видаляє в масиві по одному елементу з кінця, а повертає видалений елемент*/
// const notEmptyArray = [1, 2, 3, 4, 5]
// const deletedEl = notEmptyArray.pop()
// console.log(notEmptyArray)
// console.log(deletedEl)

/*unshift - метод  додавання на початку*/
// const superArray = [1, 2, 3, 4, 5]
// const length1 = superArray.unshift(5, 10)
// console.log(superArray)
// console.log(length1)

// /*shift - метод віднімання на початку*/
// const superArray1 = [1, 2, 3, 4, 5]
// const deletedEl1 = superArray1.shift()
// console.log(superArray1)
// console.log(deletedEl1)

/*slice - метод  */
// const array6 = [1, 2, 3, 4, 5, 6, 7]
// const array7 = array6.slice(0, 5)
// console.log(array7)
// const array8 = array6.slice(-2) //
// console.log(array8)
// console.log(array6)

/*slpice - метод  деструктивний, можна видалити, додати елементи, метод тільки для масива на відміну від slice */
// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const copy = numbers2.slice() //копія, якщо потрібно зберегти
/*slpice - видаляємо з допомогою метода*/
// const deleted = copy.splice(5, 2) //повертає масив, який видалили
// console.log(copy)
// console.log(deleted)
// console.log(numbers2)

/*slpice - додаємо з допомогою метода*/
// const numbers3 = [1, 2, 3, 6, 7, 8, 9]
// const copy1 = numbers3.slice()
// const deleted1 = copy1.splice(3, 0, 4, 5) //додаємо елементи
// console.log(copy1)
// console.log(deleted1)

/*slpice - замінюємо з допомогою метода*/
// const numbers4 = [1, 2, 3, 4, 4, 4, 7]
// const copy2 = numbers4.slice()
// const deleted2 = copy2.splice(4, 2, 5, 6)
// console.log(copy2)
// console.log(deleted2)

/*concat - поєднуємо*/
// const a = [1, 2, 3];
// const b = [5, 6, 7]
// const c = 4
    
// const arr = a.concat(c, b, 'abc') // [1, 2, 3, 4, 5, 6, 7, 'abc']
// console.log(arr)