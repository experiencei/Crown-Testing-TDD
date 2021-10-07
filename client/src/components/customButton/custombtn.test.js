import React from 'react';
import { shallow } from 'enzyme';
import { CustomBtn } from './custombtn';

it('should render CustomButton component', () => {
  expect(shallow(<CustomBtn />)).toMatchSnapshot();
});