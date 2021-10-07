import { takeLatest, call, put, all} from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotTomap } from "../../firebase/firebase.utility";

import {
  fetchcollectionsuccess,
  fetchcollectionfailure
} from '../shop/shop.action';

import shopTypes from './shop.types';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotTomap,
      snapshot
    );
    yield put(fetchcollectionsuccess(collectionsMap));
  } catch (error) {
    yield put(fetchcollectionfailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
