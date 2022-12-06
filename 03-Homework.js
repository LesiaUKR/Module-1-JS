/*task 3*/
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// Change code above this line

/*task 4*/
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2]
// Change code above this line

/*task 5*/
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// /*task 7*/
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }


/*task 9*/
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };

/*task 10*/
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {

// console.log(key);
// console.log(apartment[key]);
// keys.push(key);
// };

// for (const value in apartment) {
//   console.log(value);
//   console.log(apartment[value]);
//  values.push(apartment[value]);
// };

// console.log(keys);
// console.log(values);

/*task 11*/
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//  if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(apartment[key]);
//    keys.push(key);
//
//   }
//   // Change code above this line
// }

/*task 12*/
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//        propCount += 1;
//   // Change code above this line
//         }
//          console.log(propCount);
//     }
//      return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

/*task 13*/
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   // Ключ

//   // console.log(key);
//   // Значення властивості
//     // console.log(apartment[key]);
//     values.push(apartment[key]);
//     console.log(values);
// }
/*task 14*/
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// //альтернативний спосіб
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }
/*task 15*/
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

/*task 16*/
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
// for (const value of values) {
//     totalSalary += value;
//     console.log(totalSalary);
// }
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

/*task 17*/
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// };


// console.log(hexColors);
// console.log(rgbColors);

/*task 18*/
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
 
// function getProductPrice(productName) {
//     // Change code below this line
   
//     for (const product of products) {

//         if (productName === product.name) {
//             return product.price;
//                   }
//           // console.log(product.price);  // Change code above this line
//     }
   
//     return null;
// }

// getProductPrice("Radar"); //1300
// getProductPrice("Grip"); //1200
// getProductPrice("Scanner"); //2700
// getProductPrice("Droid"); //400
// getProductPrice("Engine"); // null

/*task 19*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];



// function getAllPropValues(propName) {
//     // Change code below this line
// let values = [];
//     for (let product of products) {
//         const keys = Object.keys(product);
//         // console.log(keys);
//         if (keys.includes(propName)){
//             values.push(product[propName]);
//         }
// };

//      return values;
// }



// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

/*task 20*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line
   
//     for (const product of products) {
//         if (productName === product.name) {
//        return product.price * product.quantity
//         }
        
//     }
//     return 0;
//   // Change code above this line
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

/*task 21*/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


/*task 22*/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(tomorrow)


/*task 23*/
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow:
//     highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highYesterday);

/*task 24*/
//

/*task 25*/
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today:
//        { low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: {
//       low: lowTomorrow,
//       high: highTomorrow,
//       icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// } = forecast;
      
// console.log(forecast);
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;-
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

/*task 26*/
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   const { today:
//          { low: todayLow,
//            high: todayHigh },
//         tomorrow:
//           { low: tomorrowLow,
//            high: tomorrowHigh } }= forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

/*task 27*/
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

/*task 28*/

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores,];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

/*task 29*/
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings, };

/*task 30*/
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     return {completed,category,priority,...data };
//   // Change code above this line
// };

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

/*task 31*/

// Change code below this line
// function add(...args) {
//   // Change code above this line
//       console.log(args);
//   let total = 0;
//     for (const arg of args) {
// total += arg;

//   }
//     return total;
 
// }
// add(15, 27);

/*task 32*/

// function addOverNum(firstArg, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstArg) {
//       total += arg;}
//   }

//   return total;
//   // Change code above this line
// }

/*task 33*/

// function findMatches(array,...args) {
//   const matches = []; // Don't change this line
//     for (const element of array) {
// //      console.log('array: ', array);
// //   console.log('args: ', args);

//     if (args.includes(element)) {
//       matches.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }
//   // Change code above this line
//   return matches;
// }


// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);


/*task 34*/
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune")

/*task 35*/

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line

//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
        
//     },


//     // Change code above this line
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Dune");

/*task 36*/

// const atTheOldToad = {
//   // Change code below this line

// potions: [],

//   // Change code above this line
// };

/*task 37*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return atTheOldToad.potions;
// }
//   // Change code above this line
// };

/*task 38*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//   this.potions.push(potionName);

//     // Change code above this line
//   },
// };

/*task 39*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//   const potionIndex = this.potions.indexOf(potionName);
//   this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };

/*task 40*/
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//   const potionIndex = this.potions.indexOf(oldName);
//         this.potions.splice(potionIndex, 1, newName);
//     // Change code above this line
//   },
// };

/*task 41 через обычный For*/

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
      
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (newPotion.name === this.potions[i].name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
      
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (potionName === this.potions[i].name) {
//                 this.potions.splice(i, 1);
//                 return
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
      
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (oldName === this.potions[i].name) {
//                 this.potions[i].name = newName;
//                 return
//             }
//         }

//         return `Potion ${oldName} is not in inventory!`;

//         // Change code above this line
//     },

// }

/*task 41 через For of*/

const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
      
        for (let i = 0; i < this.potions.length; i += 1) {
            if (newPotion.name === this.potions[i].name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion);
    },
    removePotion(potionName) {
      
        for (let i = 0; i < this.potions.length; i += 1) {
            if (potionName === this.potions[i].name) {
                this.potions.splice(i, 1);
                return
            }
        }
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {
      
        for (let i = 0; i < this.potions.length; i += 1) {
            if (oldName === this.potions[i].name) {
                this.potions[i].name = newName;
                return
            }
        }

        return `Potion ${oldName} is not in inventory!`;

        // Change code above this line
    },

}