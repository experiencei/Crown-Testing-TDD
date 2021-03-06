import shopTypes from './shop.types';
import shopReducer from "./shop.reducer";

const INITIAL_STATE = {
  collections: null,
  isFetching : true,
  errorMessage : undefined
};

describe('shopReducer', () => {
    it('should return initial state', () => {
      expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
    });
  
    it('should set isFetching to true if fetchingCollectionsStart action', () => {
      expect(
        shopReducer(INITIAL_STATE, {
          type: shopTypes.FETCH_COLLECTIONS_START
        }).isFetching
      ).toBe(true);
    });
  
    it('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
      const mockItems = [{ id: 1 }, { id: 2 }];
      expect(
        shopReducer(INITIAL_STATE, {
          type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
          payload: mockItems
        })
      ).toEqual({
        ...INITIAL_STATE,
        isFetching: false,
        collections: mockItems
      });
    });
  
    it('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
      expect(
        shopReducer(INITIAL_STATE, {
          type: shopTypes.FETCH_COLLECTIONS_FAILURE,
          payload: 'error'
        })
      ).toEqual({
        ...INITIAL_STATE,
        isFetching: false,
        errorMessage: 'error'
      });
    });
  });
  