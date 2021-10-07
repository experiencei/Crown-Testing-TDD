import { takeLatest, call, put , all} from 'redux-saga/effects';
import UserActionTypes from "./user.type";

import{ googleprovider,
       createDocument,
       auth, 
       getCurrentUser} from "../../firebase/firebase.utility";

import{SignInSuccess,
     SignInFailure,
      signOutSuccess,
       signOutFailure,
       signUpFailure,
       signUpSuccess} from "./user.actions.";