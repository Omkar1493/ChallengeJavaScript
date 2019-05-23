var Item = require('./Item');
//var LineItem=require('./LineItem')
class Cart {
    constructor() {
        this.shoppingCart = [];
    }
    // createItemAndAdd(item, qty){
    //     // let item=new Item(name,price)
    //     // let newItem = new Item(name, price);
    //     // qty = new LineItem(qty)
    //     let obj1 = new LineItem(item, qty);
    //
    //     //arrayItem.push(qty)
    //     this.shoppingCart.push(obj1);
    //
    //   }
    createItemAndAdd(name, price,qty){
        let newItem = new Item(name, price);
        let arrayItem = []
        arrayItem.push(newItem)
        arrayItem.push(qty)
        this.shoppingCart.push(arrayItem);

    }


    getCart(){
           return this.shoppingCart;
       }
    totalPrice(){
       let array = [];
       this.shoppingCart.map((item) => {
           array.push(item[0].price * item[1])
       })

       const reducer = (accumulator, currentValue) => accumulator + currentValue;
       return array.reduce(reducer)
     }

      getQuantityofItems(){
        log(this.shoppingCart)
        return this.shoppingCart
      }

     increaseQty(name){
       this.shoppingCart.map((item) => {
           if (item[0].name==name) {
               item[1]++;
           }
     })
   }
}
   module.exports = Cart;
