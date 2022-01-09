import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDfOvMyzckA79xG8VMd0tyK2Aod3ByWQLg",
  authDomain: "crown-db-9bb79.firebaseapp.com",
  projectId: "crown-db-9bb79",
  storageBucket: "crown-db-9bb79.appspot.com",
  messagingSenderId: "225758757011",
  appId: "1:225758757011:web:1099be26fcffba0ce50d66",
  measurementId: "G-PMFGL6RHHT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;