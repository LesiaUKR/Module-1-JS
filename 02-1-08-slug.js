/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

//приводим к нижнему регистру
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);
//разбиваем по словам
const words = normalizedTitle.split(' ');
console.log(words);
//соединяем с разделителем тире
const slug = words.join('-');
console.log(slug);

//все выше нужно записывать в одну строку - абстракция
const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);