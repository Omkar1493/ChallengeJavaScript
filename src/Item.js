class Item {
  constructor(name, price,qty) {
    this.name = name
    this.price = price
    this.qty=qty
  }

  set setName(name){
    this.name = name;
  }

  get getName(){
    return this.name;
  }

  set setPrice(price){
    this.price = price;
  }

  get getPrice(){
    return this.price;
  }


  get getQty() {
      return qty;
  }

  set setQty(qty) {
      this.qty = qty;
  }



}

module.exports = Item;
