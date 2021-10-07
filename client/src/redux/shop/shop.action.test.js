import shopTypes from "./shop.types";
import {
    fetchcollectionstart,
    fetchcollectionsuccess,
    fetchcollectionfailure,
    fetchcollectionstartAsync
  } from './shop.action';

  describe('fetchcollectionstart action', () => {
    it('should create the fetchCollectionsStart action', () => {
      expect(fetchcollectionstart().type).toEqual(
        shopTypes.FETCH_COLLECTIONS_START
      );
    });
  });

  describe('fetchCollectionsSuccess action', () => {
    it('should create the fetchcollectionsuccess action', () => {
      const mockCollectionsMap = {
        hats: {
          id: 1
        }
      };
  
      const action = fetchcollectionsuccess(mockCollectionsMap);
  
      expect(action.type).toEqual(shopTypes.FETCH_COLLECTIONS_SUCCESS);
      expect(action.payload).toEqual(mockCollectionsMap);
    });
  });

  describe('fetchCollectionsFailure action', () => {
    it('should create the fetchCollectionsFailure action', () => {
      const action = fetchcollectionfailure('errored');
  
      expect(action.type).toEqual(shopTypes.FETCH_COLLECTIONS_FAILURE);
      expect(action.payload).toEqual('errored');
    });
  });

  describe('fetchcollectionstartAsync action', () => {
    it('should create the fetchCollectionsStartAsync action', () => {
      const mockActionCreator = fetchcollectionstartAsync();
      const mockDispatch = jest.fn();
      mockActionCreator(mockDispatch);
  
      expect(mockDispatch).toHaveBeenCalledWith(fetchcollectionstart());
    });
  });