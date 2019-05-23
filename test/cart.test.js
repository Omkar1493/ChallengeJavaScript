const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;


describe('Cart', () => {

    it('should initialize as empty', () => {
        const cart = new Cart()
        console.log("ourr cart", cart)
        //assert.equal(0,cart.getCart())
        expect(cart.getCart().length).to.deep.equal(0)
    })

   it('count items in the cart', () => {
       const cart = new Cart();
       cart.createItemAndAdd('Rolex Deluxe',1000, 1);
       cart.createItemAndAdd('Rolex Deluxe',1000, 1);
       console.log(cart);
      expect(cart.getCart().length).to.deep.equal(2)
    })

   it('increase the quantity of a line item by 1.', () => {
      const cart = new Cart();
      //const item=new Item('Rolex Deluxe',1000);
      cart.createItemAndAdd('Rolex Deluxe',1000, 1);
      cart.increaseQty('Rolex Deluxe');
      console.log(cart.getQuantityofItems())
      expect(cart.getQuantityofItems()).to.deep.equal(2)
  })

  it('Get Total Price.', () => {
     const cart = new Cart();
     //const item=new Item('Rolex Deluxe',1000);
     cart.createItemAndAdd('Rolex Deluxe',1000,1);
     //cart.createItemAndAdd(new Item('Rolex Deluxe',1000, 1);
     //cart.createItemAndAdd(new Item('Rolex Deluxe',1000, 1);

     expect(cart.totalPrice()).to.deep.equal(1000)
 })

  })
