import React from 'react';
import { shallow } from 'enzyme';
import { Carticon } from './cart.icon';

describe('CartIcon component', () => {
    let wrapper;
    let mockToggleCartHidden;
    beforeEach(() => {
      mockToggleCartHidden = jest.fn();
  
      const mockProps = {
        itemCount: 0,
        toggleCartHidden: mockToggleCartHidden
      };
  
      wrapper = shallow(<Carticon {...mockProps} />);
    });
  
    it('should render CartIcon component', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call toggleCartHidden when icon is clicked', () => {
        wrapper.find('CartContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
      });

 it('should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('Itemcount').text());
    expect(itemCount).toBe(0);
  });
})