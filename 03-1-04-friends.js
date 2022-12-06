/*
 * Работа с коллекцией - типом  (массивом объектов)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

/*
 * Ищем друга по имени
 */

// const findFriendByName = function (allFriends, friendName) { 
//   for (const friend of friends) {
//     console.log(friend);
//       console.log(friend.online);
      
//     //   friend.newprop = 555; //добавление нового свойства

//     if (friend.name === friendName) {
//       return 'НАШЛИ!!!';
//     }
//   }
// console.table(friends);
//   return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

/*
 * Получаем имена только друзей которые офлайн
 */
// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        }

        friendsByStatus.offline.push(friend);

        // const key = friend.online ? 'online' : 'offline';//это плохо, так не пишут
        // friendsByStatus[key].push(friend);

    };
    
        return friendsByStatus;
}
console.log(getFriendsByStatus(friends));