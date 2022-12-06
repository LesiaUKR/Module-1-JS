/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const {
//   rating,
//   tracks,
//   name,
//   trackCount: numberOfTracks = 0, //это синтаксис, чтобы в numberOfTracks положить значения trackCount
//   author = 'user',
// } = playlist; //якщо зліва фігурні скобки від дорівнює, то це деструктуризації
// //коректний запис
// console.log(
//   rating,
//   tracks,
//   name,
//   numberOfTracks);
  
// //громіздкий запис
// console.log(
//   playlist.rating,
//    playlist.tracks,
//   playlist.name,
//   playlist.trackCount,
//   numberOfTracks);


/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// //stats можна ще деструктуризувати окремо
// // const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, followers, views, likes);


/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb; //деструктуризация массива - квадратные скобки слева от равно. Слева указывается массив

// // console.log(red, green, blue);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// console.log(entries);
// // ур3 const [name, rating]
// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;

//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */
//можна деструктуризировать, если не много прям в записи функции 
//const showProfileInfo = function ({ name, tag, location })
const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;

  console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

//Паттерн «Обьект настроек»
const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};


