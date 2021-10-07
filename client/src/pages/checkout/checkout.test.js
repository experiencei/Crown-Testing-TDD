import React from 'react';
import { shallow } from 'enzyme';
import { Cartcheckout } from './cart-checkout';

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100
  };

  wrapper = shallow(<Cartcheckout {...mockProps} />);
});

it('should render Cartcheckout component', () => {
  expect(wrapper).toMatchSnapshot();
});