import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6Ys7-5QnI3O0dJ2x45Iz4qZYkpZXKVzY",
    authDomain: "crud-bc39b.firebaseapp.com",
    projectId: "crud-bc39b",
    storageBucket: "crud-bc39b.appspot.com",
    messagingSenderId: "1045343722273",
    appId: "1:1045343722273:web:f0264e0d649e71a7287c60"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)