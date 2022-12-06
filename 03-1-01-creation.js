/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };
// console.log(playlist);

/*как отличить объект от области видимости - 3 случая
* объекты стоят всегда справа от оператора присваивания =
* 1) const x = {}; - в переменных это литерал объекта при операции присваивания
* 2) console.log({}) - при передачи функции
* function log (message) {
  //тоже самое что message - {}
}
const fn = function (myObject) {
  console.log(myObject)
}

fn({ a: 1, b: 2 }) //литерал при передачи аргумента в функцию

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };
// fn({ a: 1, b: 2 });
* 3) когда что-то возвращаем из функции - возврат литерал может быть без имени
// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key - console.log(playlist.tracks);
 * - obj['key'] - имя свойства хранится в переменной
 * - Отсутствующие свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

playlist.qwe = 5; //так добавлятся свойства в объект


// playlist.rating = 10; //так переопределяются значения свойств

// console.log(playlist);

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = 'tracks';

/*это одинаковая запись
// console.log(playlist.rating);
// console.log(playlist['rating']);
// ниже это 99% юзкуйсов по записи
// console.log(playlist.propertyName);
// console.log(playlist[propertyName]); //если имя ключа лежит в переменной, то через []
//если  обращаться к свойству объекта, которого не существует, то будет undefined
/*
 * Короткая запись свойств
 */
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username, //username: username (если имя свойства должно называться как имя переменной, то можно писать только переменную)
//   email,
// };

// console.log(signupData);

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);