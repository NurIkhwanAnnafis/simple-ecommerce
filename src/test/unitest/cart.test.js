import { act } from "react-dom/test-utils"
import { addItemToCart, removeItemFromCart } from '../../redux/cart/card.utils';
import { selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selectors';

let dummyCartItems = null,
    dummyAddItem = null,
    dummySelectedItem = null,
    result = null,
    result2 = null,
    result3 = null;

afterEach(() => {
  dummyCartItems = null;
  dummyAddItem = null;
  dummySelectedItem = null;
  result= null;
  result2 = null;
  result3 = null;
})
    
describe('Add Item', () => {
  it('should item quantity 0', () => {

    act(() => {
      result = addItemToCart(dummyCartItems, dummyAddItem);
    })
    
    expect(result.length).toEqual(0);
  })

  it('should amount of cart increase (1) when data cart null or empty array', () => {
    expect.assertions(2)

    dummyAddItem = { id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25 };
    act(() => {
      result = addItemToCart(dummyCartItems, dummyAddItem);
      result2 = addItemToCart([], dummyAddItem);
    })
    
    expect(result.length).toEqual(1);
    expect(result2.length).toEqual(1);
  })

  it('should item cart quantity increase (+1) when data exist in cart', () => {
    dummyCartItems = [{ id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25, quantity: 1 }];
    dummyAddItem = { id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25 };

    act(() => {
      result = addItemToCart(dummyCartItems, dummyAddItem);
      dummySelectedItem = result.find(item => item.id === dummyAddItem.id);
    })
    
    expect(dummySelectedItem.quantity).toEqual(2);
  })
})

describe('Remove Item', () => {
  it('should item quantity 0', () => {

    act(() => {
      result = removeItemFromCart(dummyCartItems, dummyAddItem);
    })
    
    expect(result.length).toEqual(0);
  })

  it('should amount of cart decrease (1) when data cart null or empty array', () => {
    expect.assertions(3)
    
    dummyCartItems = [{ id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25, quantity: 1 }];
    dummyAddItem = { id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25 };
    act(() => {
      result = removeItemFromCart(null, dummyAddItem);
      result2 = removeItemFromCart([], dummyAddItem);
      result3 = removeItemFromCart(dummyCartItems, dummyAddItem);
    })
    
    expect(result.length).toEqual(0);
    expect(result2.length).toEqual(0);
    expect(result3.length).toEqual(0);
  })

  it('should item cart quantity decrease (-1) when data exist in cart', () => {
    dummyCartItems = [{ id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25, quantity: 3 }];
    dummyAddItem = { id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25 };

    act(() => {
      result = removeItemFromCart(dummyCartItems, dummyAddItem);
      dummySelectedItem = result.find(item => item.id === dummyAddItem.id);
    })
    
    expect(dummySelectedItem.quantity).toEqual(2);
  })
})

describe('Cart Items Count', () => {
  it('should count equal 0', () => {
    expect.assertions(2)

    act(() => {
      result = selectCartItemsCount(null);
      result2 = selectCartItemsCount([]);
    })
    
    expect(result).toEqual(0);
    expect(result2).toEqual(0);
  })

  it('should count equal to all items in cart', () => {

    dummyCartItems = [
      { id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25, quantity: 1 },
      { id: 2, imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png", name: "Blue Beanie", price: 18, quantity: 2 },
      { id: 3, imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png", name: "Brown Cowboy", price: 35, quantity: 1 }
    ];

    act(() => {
      result = selectCartItemsCount(dummyCartItems);
    })
    
    expect(result).toEqual(4);
  })
})

describe('Cart Total Price', () => {
  it('should count equal 0', () => {
    expect.assertions(2)

    act(() => {
      result = selectCartTotal(null);
      result2 = selectCartTotal([]);
    })
    
    expect(result).toEqual(0);
    expect(result2).toEqual(0);
  })

  it('should total price equal to all total price items in cart', () => {

    dummyCartItems = [
      { id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25, quantity: 1 },
      { id: 2, imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png", name: "Blue Beanie", price: 18, quantity: 2 },
      { id: 3, imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png", name: "Brown Cowboy", price: 35, quantity: 1 }
    ];

    act(() => {
      result = selectCartTotal(dummyCartItems);
    })
    
    expect(result).toEqual(96);
  })
})