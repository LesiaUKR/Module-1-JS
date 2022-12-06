/*task 1*/

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result =  makePizza();
// const pointer = makePizza;

/*task 2*/

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//    return callback(pizzaName);
// }
// makeMessage("Ultracheese", deliverPizza);
// makeMessage("Royal Grand", makePizza);

/*task 3*/

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

/*task 4*/

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const isPizzaNameOnMenu = this.pizzas.includes(pizzaName);
//    if (isPizzaNameOnMenu) {
//      return makePizza(pizzaName)
//    } else {
//      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//    }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);


// /*task 5*/
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

// //Foreach
// function calculateTotalPrice(orderedItems) {
//    let totalPrice = 0;

// orderedItems.forEach(function (number, index) {
//     console.log(`Індекс ${index}, значення ${number}`);
//     totalPrice += number;
// });
//   // Change code above this line
//   return totalPrice
// }

// calculateTotalPrice([12, 85, 37, 4])

// /*task 6*/
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3)

// //Foreach

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//  numbers.forEach(function (number, index){
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3)


// /*task 7*/
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// //Foreach

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19])

// /*task 8*/

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// //refactoring to arrow function
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// /*task 10*/
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// //refactoring arrow function
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) =>totalPrice += item);

//   return totalPrice;
// }

// /*task 11*/

// // Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// //refactoring arrow function
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3)

// /*task 12*/

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19])

// //refactoring arrow function
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }


/*task 13*/

// function changeEven(numbers, value) {

//   let newArray = [];
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   // Change code above this line
//     return newArray;
// }
// changeEven([1, 2, 3, 4, 5], 10)

// /*task 14*/

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planets => {
//   return planets.length
// });

/*task 15*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(books => {
//     return books.title
// });

// console.log(titles);

/*task 16*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// Change code below this line

// const genres = books.flatMap(books => books.genres);

// /*task 17*/

// const getUserNames = users => { return users.map(users => users.name) };

// /*task 18*/

// const getUserEmails = users => { return users.map(users => users.email) };

// /*task 19*/

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => {
//   return number % 2 === 0
// });
// const oddNumbers = numbers.filter(number => {
//   return number % 2 !== 0
// });

/*task 20*/
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );

/*task 21*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// /*task 22*/
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user => user.eyeColor === color)

// };

/*task 23*/
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => (user.age > minAge) && (user.age < maxAge))
// };
// // Change code above this line

// /*task 24*/

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//      return users.filter(user => user.friends.includes(friendName))
// };
// Change code above this line

/*task 25*/
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

// const uniqueFriends = [];

// Change code below this line
// const getFriends = (users) => {
//    const allFriends = users.flatMap(user => user.friends);
// console.log(allFriends);
// // // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueFriends = allFriends.filter(
//   (friend, index, array) => array.indexOf(friend) === index
// );
//     console.log(uniqueFriends);
    
//     return uniqueFriends;
// };
// Change code above this line

/*task 26*/

// Change code below this line
// const getActiveUsers = (users) => {
//  return users.filter(({ isActive }) => isActive);
// };
// Change code above this line

/*task 27*/

// const getInactiveUsers = (users) => {
  
//  return users.filter(user => !user.isActive);
// };

/*task 28*/

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// Change code below this line

// const bookWithTitle = books.find(books => books.title === BOOK_TITLE);
// const bookByAuthor = books.find(books => books.author === AUTHOR);

/*task 29*/
// Change code below this line
// const getUserWithEmail = (users, email) => {
//    return users.find(users => users.email === email)
// };
// Change code above this line

/*task 30*/

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// console.log(eachElementInFirstIsEven)
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 > 0);
// console.log(eachElementInFirstIsEven)
// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 > 0);
// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 > 0);


// /*task 31*/

// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive)
// };
// console.log(isEveryUserActive);

// /*task 32*/
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 > 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 > 0);


// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 > 0);

// /*task 33*/
// const isAnyUserActive = users => {
// return users.some(user => user.isActive)
// };

/*task 34*/
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, value) => total+value, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

/*task 35*/

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, item) => {
//   return total + item.playtime / item.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame)

// /*task 36*/
// // Change code below this line
// const calculateTotalBalance = users => users.reduce((total, item) => {
//    return total + item.balance;
// }, 0);
// // Change code above this line

// /*task 37*/
// // Change code below this line
// const getTotalFriendCount = users => users.reduce((total, item) => {
//    return total + item.friends.length;
// }, 0);
// // Change code above this line


/*task 38*/


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];


// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = authors;


/*task 39*/

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];


// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((prevDate, nextDate) => nextDate - prevDate);

/*task 40*/

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort();
// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort ((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);

/*task 41*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

/*task 42*/

// // Change code below this line
// const sortByAscendingBalance = users => {return [...users].sort((firstUser, secondUser) => (firstUser.balance - secondUser.balance))};
// // Change code above this line

/*task 43*/

// // Change code below this line
// const sortByDescendingFriendCount = users => {return [...users].sort((firstUser, secondUser) => (secondUser.friends.length - firstUser.friends.length))
// };
// // Change code above this line

/*task 44*/

// // Change code below this line
// const sortByName = users => {return [...users].sort((firstUser, secondUser) =>
// firstUser.name.localeCompare(secondUser.name))
  
// };

/*task 45*/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//     .filter(book => book.rating >= MIN_BOOK_RATING)
//     .map(books => books.author)
//     .sort((a, b) => a.localeCompare(b));

// console.log(names);


/*task 46*/

// const getNamesSortedByFriendCount = users
// .sort((firstUser, secondUser) => (firstUser.friends.length - secondUser.friends.length))
// .map(user => user.name);

// console.log(getNamesSortedByFriendCount);

/*task 47*/
// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends)
//     .filter((genres, index, array) => array.indexOf(genres) === index)
//     .sort((a, b) => a.localeCompare(b))
// };

// console.log(getSortedFriends);


// console.log(getSortedFriends);

/*task 48*/
const getTotalBalanceByGender = (users, male) => [...users]
    .filter(user => user.gender === male)
    .reduce((totalBal, us) => totalBal + us.balance, 0);
    ;


console.log(getTotalBalanceByGender);