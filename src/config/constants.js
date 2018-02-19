import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC64GhHjla2PXM8gSBdakoTpzGF2Ihtp_Q",
    authDomain: "fir-df056.firebaseapp.com",
    databaseURL: "https://fir-df056.firebaseio.com",
    projectId: "fir-df056",
    storageBucket: "fir-df056.appspot.com",
    messagingSenderId: "909640585725"
  };

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
