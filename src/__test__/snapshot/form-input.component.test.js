import React from 'react';
import { act } from "react-dom/test-utils"
import { shallow, mount, render } from 'enzyme';
import FormInput from '../../components/form-input/form-input.component';

let dummyProps = null,
    dummyComponent = null,
    result = null;

afterEach(() => {
  dummyProps = null;
  dummyComponent = null;
  result = null;
})

it('should to render default form input component', () => {
  dummyComponent = render(<FormInput />);

  act(() => {
    result = dummyComponent;
  })

  expect(result).toMatchSnapshot()
})

it('should to render form input component with props', () => {
  // expect.assertions(2)
  dummyComponent = shallow(
    <FormInput  
      name="email name"
      type="email"
      value="input email"
      required
      handleChange={() => {}}
      label="email label"
    />
  );

  act(() => {
    result = dummyComponent;
  })

  console.log(result.props().children[1].props)

   //parent component
   expect(result.props().className).toEqual('group');

   //child component level 1
   expect(result.props().children[0].type).toEqual('input');
   expect(result.props().children[0].props.className).toEqual('form-input');
   expect(result.props().children[0].props.name).toEqual('email name');
   expect(result.props().children[0].props.type).toEqual('email');
   expect(result.props().children[0].props.value).toEqual('input email');
   expect(result.props().children[0].props.required).toEqual(true)
 
   expect(result.props().children[1].type).toEqual('label');
   expect(result.props().children[1].props.className).toMatch(/(form-input-label)/);
   expect(result.props().children[1].props.children).toMatch('email label');
 
  //  //child component level 2
  //  expect(result.props().children[1].props.children[0].type).toEqual('span');
  //  expect(result.props().children[1].props.children[0].props.children).toEqual('Brown Brim');
  //  expect(result.props().children[1].props.children[1].type).toEqual('span');
  //  expect(result.props().children[1].props.children[1].props.children).toEqual('4 x $25');
})