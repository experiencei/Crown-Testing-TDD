import React from 'react';
import { shallow } from 'enzyme';
import SigninUp from './sign-in-Up';

it('should render SigninUp component', () => {
  expect(shallow(<SigninUp />)).toMatchSnapshot();
});