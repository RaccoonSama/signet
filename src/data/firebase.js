import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';



const firebaseConfig = {
  apiKey: "AIzaSyAmtX_Q-C-aU64ZGfDxu90myW6qppWbHLI",
  authDomain: "cours-react-firebase.firebaseapp.com",
  projectId: "cours-react-firebase",
  storageBucket: "cours-react-firebase.appspot.com",
  messagingSenderId: "752948488573",
  appId: "1:752948488573:web:6720b2db593f3e96c24414"
};

if(firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);
}

const dbFirestore = firebase.firestore();

export default dbFirestore;

export const instanceFbUi = new firebaseui.auth.AuthUI(firebase.auth());