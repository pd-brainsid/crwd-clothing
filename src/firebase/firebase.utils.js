import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCib_OKPQ2HgG8y2C3j2fVD8FVUtn3ta0o',
  authDomain: 'crwn-db-61067.firebaseapp.com',
  databaseURL: 'https://crwn-db-61067.firebaseio.com',
  projectId: 'crwn-db-61067',
  storageBucket: 'crwn-db-61067.appspot.com',
  messagingSenderId: '32337080183',
  appId: '1:32337080183:web:473ab88ce88fd4f1c07b72',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }

  return userRef;
};

export default firebase;
