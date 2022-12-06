/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'], 
  trackcount: 3,//количество треков в плейлисте не нужно хранить в самом плейлисте
    // getName: function (a) {
    //     console.log('Ага это getname :)');
    // }, //это олдскульный метод записи метода
    getName() {
        console.log('Ага это getname :)');  
    }, //это совреснный метод записи называется метод объекта, но по факту это функция
  changeName(newName) { //внутри методов объекта никогда не использовать имя объекта
    console.log('this внутри changeName: ', this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};
playlist.getName(5);


console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');
console.log(playlist);

playlist.addTrack('новый трек 1');
console.log(playlist.getTrackCount());

playlist.addTrack('новый трек 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);