'use strict'

class Storage {
    constructor(items) {
        this.items = items;
    };

    getItems() {
        console.table(this.items);
    };

    addItem(item) {
        this.items.push(item)
        console.table(this.items);
    };

    removeItem(item) {
        this.item = item;
        let itemIndex = this.items.indexOf(this.item)
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1)
        };
        console.table(this.items);
    };
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();

storage.addItem('Дроид');

storage.removeItem('Пролонгер');