"use strict";

// // Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // можемо ініціалізувати без присвоєння значення;
// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;

// // Взаємодія з користувачем

// // - виведення даних:

// console.log("Hello!");
// alert("Hello!");

// // - отримання даних:

// const answer = confirm("Is your name Ivan?"); // користувач може відповісти так або відхилити питання
// console.log(answer)
// prompt("What is your name?"); // користувач  може ввести якісь дані або відхилити питання\
// let userName = prompt("What is your name?");
// console.log(userName)
// console.log(typeof userName)
// userName = prompt("What is your name?");
// console.log(userName)

// // Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)

// // Загальні правила порівняння
// // Результатом порівняння буде бульове значення.
// // При порівнянні різних типів за допомогою операторів == та =! операнди приводяться до числа
// // null не дорівнює нічому крім себе та undefined.
// // undefined не дорівнює нічому крім себе та null.
// // NaN не дорівнює нічому, навіть самому собі
// // Рядки між собою порівнюються за unicode (посимвольно).

// // Правила приведення різних типів до числа:
// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// Оператор ==
// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); // false

// // Оператор ===
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false

// // Оператор !=
// console.log("4" != 4); // false

// // Оператор !==
// console.log("4" !== 4); // true

// console.log(null > 0) // false
// console.log(null >= 0) // true


// // Number.isNaN

// const a = 123;
// const b = "qwerty";

// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// const toNumber = Number(b);
// console.log(toNumber); // NaN
// console.log(Number.isNaN(toNumber)); // true
// console.log(toNumber == NaN) // false


// const data = prompt("Enter a number, please");
// console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);

// const num1 = 0.3;
// const num2 = 0.6;
// const sum1 = num1 + num2;
// console.log(sum1)
// console.log((num1*100 + num2*100) / 100 )
// console.log(sum1.toFixed(3));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(fixedSum1);

// Приведення до рядка
// const num = 123;
// const str1 = String(num)
// console.log(str1)
// const str2 = num + ''
// console.log(str2)
// const str3 = num.toString()
// console.log(str3)












// const userName = prompt('What is your name');
// const age = prompt('How old are your');

// const message = `My name is ${userName}. I am ${age} years old.`
// alert(message)

// const word1 = "     ";
// console.log(word1.length);

// const word2 = "hTMl";
// console.log(word2.toLowerCase()) // html
// console.log(word2.toUpperCase()) // HTML


// const word3 = "superjavascript";
// const substring1 = "java";
// const substring2 = "css";

// console.log(word3.indexOf(substring1)); // 5
// console.log(word3.indexOf(substring2)); // -1

// const word4 = "banana";
// console.log(word4.indexOf("a")); // 1
// console.log(word4.lastIndexOf("a")); // 5
// console.log(word4.indexOf("n")); // 2
// console.log(word4.lastIndexOf("n")); // 4

// const sentense = "two tasty bananas";
// console.log(sentense.indexOf(" ")); // 3
// console.log(sentense.indexOf("tasty bananas")); // 4

// console.log(word3.includes(substring1)); // true
// console.log(word3.includes("Java")); // false
// console.log(word3.includes(substring2)); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(jsFileName) // "script.js"
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames1 = cssFileNames.replace(".css", ".min.css");
// console.log(minifiedCssFileNames1); // "styles.min.css, about.css, portfolio.css"
// const minifiedCssFileNames2 = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames2); // "styles.min.css, about.min.css, portfolio.min.css"

// const word5 = "javascript";
// const word6 = word5.slice();
// console.log(word6); // javascript
// const word7 = word5.slice(0, 4);
// console.log(word7); // 'java'
// console.log(word5.slice(0, word5.length)); // javascript
// console.log(word5.slice(4)); // script
// console.log(word5.slice(-6, -3)); //scr
// console.log(word5.slice(-1)); // t
// console.log(word5.slice(-6)); // ipt

// console.log('    a    '.trim().length) // 1

// // Операції з приведенням типів

// console.log(2 + 5 + "" + 1 + 0 - 10); // 700
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// console.log(true - "false"); // NaN
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '42'
// console.log("4" / 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log("  -9  " + 5); "  -9  5"

// //  Логічні операторы (&&,  ||,  !)

// // У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// // (falsy) значення, що приводяться до false у логічному перетворенні:
// // 0
// // NaN
// // null
// // undefined
// // порожній рядок
// // false.
// // Абсолютно все інше приводиться до true.

// // && - запинається на false
// // Якщо всі операнди були приведені до true, повертається остання.
// // Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// // || - запинається на true
// // Повертає перше правидиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// // ! - інвертує true в false, або false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi"); // 'kiwi'
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4%

/*

МОДУЛЬ 1 ШПАРГАЛКА

Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
--: Загальні правила порівняння
Результатом порівняння буде бульове значення.
При порівнянні різних типів за допомогою операторів == та =! операнди приводяться до числа
null не дорівнює нічому крім себе та undefined.
undefined не дорівнює нічому крім себе та null.
NaN не дорівнює нічому, навіть самому собі
Рядки між собою порівнюються за unicode (посимвольно).
-- Правила приведення різних типів до числа:
true --> 1
false --> 0
'', а також рядок з пробілами --> 0
null --> 0
undefined --> NaN
не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.
:восклицательный_знак:Логічні операторы (&&,  ||,  !)
У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.
(falsy) значення, що приводяться до false у логічному перетворенні:
0
NaN
null
undefined
порожній рядок
false.
Абсолютно все інше приводиться до true.
&& - запинається на false
Якщо всі операнди були приведені до true, повертається остання.
Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.
|| - запинається на true
Повертає перше правидиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.
! - інвертує true в false, або false в true

МОДУЛЬ 2 ШПАРГАЛКА

шпаргалочку до другого модуля
--: Масиви є однією з структур даних, що найчастіше зустрічаються в JS, вони використовуються для зберігання даних. Також масиви дають багато можливостей для роботи з даними.
--: Функції дозволяють повторювати одну й ту саму дію в багатьох частинах програми. Це як основний будівельний елемент.
Якщо коротко підсумувати - масиви та функції є однією з найголовніших тем і з ними часто доведеться зустрічатися у роботі.
--: Дуже важливо не забувати про те, що наші методи роботи з масивами можуть щось повертати. Наприклад, push повертає довживу масиву, для якого був викликаний даний метод. А, скажімо, splice повертає масив з видаленими елементами.
--: Індексація в масиві починається з 0
--: За допомогою властивості length ми можемо отримати довжину масиву чи рядка (повертає число), що корисно у т.ч. при обчисленні останнього індексу масиву (рядка).
:восклицательный_знак:Шпаргалка за методами масивів:
split/join – перетворює рядок на масив і в зворотню сторону,
push () – додає елементи в кінець,
pop() – видаляє елемент з кінця,
shift() – видаляє елемент із початку,
unshift() – додає елементи на початок.
splice(index, deleteIndex, ...arr) – починаючи з індексу index, видаляє deleteIndex елементів та вставляє arr.
slice(start, end) – створює новий масив, копіюючи до нього елементи з позиції start до end (не включаючи end).
:восклицательный_знак:Шпаргалка по оголошення функцій у JS:
Функціональний вираз (function expression)
const greet = function (name) {
   return Hello, ${name}
}
Оголошення функції (function declaration)
function greet(name) {
   return `Hello, ${name}!`;
}
Стрілкова функція (arrow function) <-- це спойлер до модуля 4 :легкая_улыбка:
const greet = who => return `Hello, ${name}!`;
Для того, аби щось повернути з функції/методу або умови, слід використовувати оператор return. З функції можна повертати будь-який тип даних, наприклад:
return 'hello' // (повернемо рядок)
 або
return true // (повернемо буль)
 або
return [1, 2] // (повернемо масив)
--: Паттерн раннє повернення говорить про те, що якщо умова всередині нашого if поверне true, то нам відразу ж потрібно щось повернути з тіла цієї умови, за допомогою return.
--:Декілька лайфхаків при роботі з масивами
Як швидко очистити масив
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
fruits.length = 0;
console.log(fruits); // поверне []
Як об'єднати більше двох масивів <-- це спойлер до модуля 3 :легкая_улыбка:
const fruits = ['apple', 'banana', 'orange'];
const meat = ['poultry', 'beef', 'fish'];
const vegetables = ['potato', 'tomato', 'cucumber'];
const food = [...fruits, ...meat, ...vegetables];
console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
Як отримати рандомне значення масиву
const fruits = [
   'banana',
   'apple',
   'orange',
   'watermelon',
   'apple',
   'orange',
   'grape',
   'apple',
];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit); // Поверне рандомний фрукт з масиву
*/