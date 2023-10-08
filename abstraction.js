class Abstract {
    constructor(items) {
        this.items = [];
    }

    getItems() {
        return [...this.items];
    }

    addItems(item) {
        this.items.push(item);
    }

    removeItem(deleteItem) {
        this.items = this.items.filter((item) => item !== deleteItem);
    }

    modifyItem(itemModify, newValue) {
        this.items = this.items.indexOf(itemModify);

        if (index !== -1) {
            this.items[index] = newValue;
        }
    }
}

const array = new Abstract();
array.addItems("I love JavaScript");
array.addItems("I love React");
console.log(array.getItems());
array.removeItem("I love JavaScript");
console.log(array.getItems());