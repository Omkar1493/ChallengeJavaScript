

class LineItem {
    constructor(item, qty) {
        this.item = item;
        this.qty = qty;
    }


    get getItem() {
        return item;
    }

    set setItem(item) {
        this.item = item;
    }

    get getQty() {
        return qty;
    }

    set setQty(qty) {
        this.qty = qty;
    }
}
  module.exports = LineItem;
