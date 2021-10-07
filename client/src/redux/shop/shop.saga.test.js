import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotTomap } from "../../firebase/firebase.utility";

import {
  fetchcollectionsuccess,
  fetchcollectionfailure
} from '../shop/shop.action';

import shopTypes from './shop.types';

import { fetchCollections, onFetchCollectionsStart } from './shop.sagas';

describe('fetch collections start saga', () => {
  it('should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = onFetchCollectionsStart();
    expect(generator.next().value).toEqual(
      takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollections)
    );
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchCollections();

  it('should call firestore collection ', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga ', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotTomap, mockSnapshot)
    );
  });

  it('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 }
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(fetchcollectionsuccess(mockCollectionsMap))
    );
  });

  it('should fire fetchCollectionsFailure if get collection fails at any point', () => {
    const newGenerator = fetchCollectionsAsync();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchcollectionfailure('error'))
    );
  });
});
