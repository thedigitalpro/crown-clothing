import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCJ9U7aEy74QZEFGEjI5X01Mjowxdl1Uyo",
  authDomain: "crown-db-830e6.firebaseapp.com",
  databaseURL: "https://crown-db-830e6.firebaseio.com",
  projectId: "crown-db-830e6",
  storageBucket: "",
  messagingSenderId: "50928645238",
  appId: "1:50928645238:web:86397ff841e94a26479b57"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
