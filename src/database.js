import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCdU9LHcAjYgalDPLjBglcFip-2ngu4rWE',
  authDomain: 'together-9561e.firebaseapp.com',
  databaseURL: 'https://together-9561e.firebaseio.com',
  projectId: 'together-9561e',
  storageBucket: 'together-9561e.appspot.com',
  messagingSenderId: '982325269427',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
