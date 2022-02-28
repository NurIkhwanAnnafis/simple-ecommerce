import React from 'react';
import { act } from "react-dom/test-utils"
import { shallow, mount, render } from 'enzyme';
import CartItem from '../../components/cart-item/cart-item.component';

let dummyProps = null,
    dummyComponent = null,
    result = null;

beforeEach(() => {
  dummyProps = { imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", name: "Brown Brim", price: 25, quantity: 4 }
})

afterEach(() => {
  dummyProps = null;
  dummyComponent = null;
  result = null;
})

it('should to render cart item component', () => {
  dummyComponent = render(<CartItem item={dummyProps} />);

  act(() => {
    result = dummyComponent;
  })

  expect(result).toMatchSnapshot()
})

it('should to render cart item component with value(props)', () => {
  expect.assertions(9)
  dummyComponent = shallow(<CartItem item={dummyProps} />);

  act(() => {
    result = dummyComponent;
  })

  //parent component
  expect(result.props().className).toEqual('cart-item');

  //child component level 1
  expect(result.props().children[0].type).toEqual('img');
  expect(result.props().children[0].props.src).toEqual('https://i.ibb.co/ZYW3VTp/brown-brim.png');

  expect(result.props().children[1].type).toEqual('div');
  expect(result.props().children[1].props.className).toEqual('item-details');

  //child component level 2
  expect(result.props().children[1].props.children[0].type).toEqual('span');
  expect(result.props().children[1].props.children[0].props.children).toEqual('Brown Brim');
  expect(result.props().children[1].props.children[1].type).toEqual('span');
  expect(result.props().children[1].props.children[1].props.children).toEqual('4 x $25');
})