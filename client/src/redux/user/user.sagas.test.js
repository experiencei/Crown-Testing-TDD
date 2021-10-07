import { takeLatest, call, put } from 'redux-saga/effects';
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

import {
       onUserAuthchange,
       userSession,
       signInWithGooglepop,
       signInWithEmail,
       signUp,
       signUptoSignIn,
       signOut,
       onGooglesignin,
       onEmailsignin,
       onCheckUsersession,
       onSignOutStart,
       onSignUpStart,
       signInafterSignUp
} from "./user.sagas";