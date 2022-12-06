/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {return this.items},
  add(product) {
    //проверяем есть ли уже в корзине аналогичный продукт
    for (const item of this.items) {
      console.log(item);
      if (item.name === product.name) {
        console.log('Такой продукт уже есть', product.name);
        item.quantity += 1; //если продукт такой есть, то увеличиваем кол-во такого продукта
        return; //если находится продукт, то выходим из функции
      }
    }
    //добавляем новое свойство количество
    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const {items} = this; // ТУТ В ITEMS лежит ссылка на массив items
/*Чтобы удалить нужно использовать splice, для которого нужен индекс элемента,
который нужно удалить, поэтому нужно использовать для этого обычный for, вместо for of */
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i]; //аналогично строке 28, но через метод деструктуризации
      // const item = this.items[i];
      if (productName === name) {
        console.log('нашли такой продукт ', productName);
        console.log('индекс продукта к удалению: ',i);
        items.splice(i, 1);
      }
    }
    /*Перебрали продукты и нашли тот, который просят удалить*/
    // for (const item of this.items) {
    //   console.log(item);
    
    // if (productName === item.name) {
    //   console.log('нашли такой продукт ', productName);
    //   }
    //   }
  },
  clear() {this.items = []}, //очистить корзину
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    for (const {price, quantity} of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
-
console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍋');
console.table(cart.getItems()); //результат после удаления remove

cart.clear();
console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

