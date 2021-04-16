import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';
import {firebaseConfig} from './config'




if(firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);
}

export const instanceFirebaseAuth = firebase.auth();

export const instanceFirestore = firebase.firestore();

export const instanceFirebaseUi = new firebaseui.auth.AuthUI(firebase.auth());