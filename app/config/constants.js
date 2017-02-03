import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB9PMLILfLl_e2OF-Ml1qrNQeqlNmYgUCw',
  authDomain: 'hogey-test.firebaseapp.com',
  databaseURL: 'https://hogey-test.firebaseio.com',
  storageBucket: 'hogey-test.appspot.com',
  messagingSenderId: '374000458001',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
