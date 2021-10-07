  
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getUserCartRef } from "../../firebase/firebase.utility"
import UserActionTypes from '../user/user.type';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectUser } from '../user/user.selector';
import { selectCartItems } from './cart.selector';
import CartActionTypes from './cart.type';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}