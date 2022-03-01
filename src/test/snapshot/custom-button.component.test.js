import React from 'react';
import { act } from "react-dom/test-utils"
import { shallow, mount, render } from 'enzyme';
import CustomButton from '../../components/custom-button/custom-button.component';

let dummyProps = null,
    dummyComponent = null,
    result = null;

afterEach(() => {
  dummyProps = null;
  dummyComponent = null;
  result = null;
})

it('should to render default custom button component', () => {
  dummyComponent = render(<CustomButton>BUTTON</CustomButton>);

  act(() => {
    result = dummyComponent;
  })

  expect(result).toMatchSnapshot()
})

it('should to render inverted custom button component', () => {
  dummyComponent = shallow(<CustomButton inverted>INVERTED</CustomButton>);

  act(() => {
    result = dummyComponent;
  })

  expect(result.props().children).toEqual('INVERTED');
})