import React from 'react';
import { act } from "react-dom/test-utils"
import { shallow, mount, render } from 'enzyme';
import CartIcon from '../../components/cart-icon/cart-icon.component';

let dummyProps = null,
    dummyComponent = null,
    result = null;

afterEach(() => {
  dummyProps = null;
  dummyComponent = null;
  result = null;
})

it('should to render cart item component', () => {
  dummyComponent = render(<CartIcon />);

  act(() => {
    result = dummyComponent;
  })

  expect(result).toMatchSnapshot()
})

it('should to render cart item component with value(props)', () => {
  expect.assertions(5)

  dummyProps = { 
    cartItems: [
      { id: 1, imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25, quantity: 1 },
      { id: 2, imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png", name: "Blue Beanie", price: 18, quantity: 2 },
      { id: 3, imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png", name: "Brown Cowboy", price: 35, quantity: 1 }
    ], 
    toggleCartHidden: () => {} 
  }
  dummyComponent = shallow(<CartIcon {...dummyProps} />);

  act(() => {
    result = dummyComponent;
  })

  //parent component
  expect(result.props().className).toEqual('cart-icon');

  //child component level 1
  expect(result.props().children[0].props.className).toEqual('shopping-icon');

  expect(result.props().children[1].type).toEqual('span');
  expect(result.props().children[1].props.className).toEqual('item-count');
  expect(result.props().children[1].props.children).toEqual(4);
})