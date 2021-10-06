import userReducer from './user-redux';
import UserActionTypes from "./user.type";

const initialState = {
    currentuser : null,
    errorMsg : null
}

describe('userReducer', () => {
    it('should return initial state', () => {
      expect(userReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should set currentuser to payload on signInSuccess action', () => {
      const mockUser = { id: 1, displayName: 'Yihua' };
  
      expect(
        userReducer(initialState, {
          type: UserActionTypes.SIGN_IN_SUCCESS,
          payload: mockUser
        }).currentuser
      ).toEqual(mockUser);
    });
  
    it('should set currentuser to null on signOutSuccess action', () => {
      expect(
        userReducer(initialState, {
          type: UserActionTypes.SIGN_OUT_SUCCESS
        }).currentuser
      ).toBe(null);
    });
  
    it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
      const mockError = {
        message: 'errored',
        code: 404
      };
  
      expect(
        userReducer(initialState, {
          type: UserActionTypes.SIGN_IN_FAILURE,
          payload: mockError
        }).errorMsg
      ).toBe(mockError);
  
      expect(
        userReducer(initialState, {
          type: UserActionTypes.SIGN_UP_FAILURE,
          payload: mockError
        }).errorMsg
      ).toBe(mockError);
  
      expect(
        userReducer(initialState, {
          type: UserActionTypes.SIGN_OUT_FAILURE,
          payload: mockError
        }).errorMsg
      ).toBe(mockError);
    });
  });