import React from 'react';
import { shallow } from 'enzyme';
import Cartitem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import Cartdropdowm from "./cart-dropdowm";


describe('CartDropdown component', () => {
    let wrapper;
    let mockHistory;
    let mockDispatch;
    const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  
    beforeEach(() => {
      mockHistory = {
        push: jest.fn()
      };
  
      mockDispatch = jest.fn();
  
      const mockProps = {
        cartItems: mockCartItems,
        history: mockHistory,
        dispatch: mockDispatch
      };
  
      wrapper = shallow(<Cartdropdowm {...mockProps} />);
    });

    it('should render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
      });

    it('should call history.push when button is clicked', () => {
        wrapper.find('Custombtn').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
      });

    it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(Cartitem).length).toEqual(mockCartItems.length);
    });
  

    it('should render EmptyMessageContainer if cartItems is empty', () => {
        const mockProps = {
          cartItems: [],
          history: mockHistory,
          dispatch: mockDispatch
        };
    
        const newWrapper = shallow(<Cartdropdowm {...mockProps} />);
        expect(newWrapper.exists('Emptymessage')).toBe(true);
      });
    
})