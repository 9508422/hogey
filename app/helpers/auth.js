import firebase from 'firebase'
import { firebaseAuth, ref } from 'config/constants'

export default function auth () {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

export function checkIfAuthed (store) {
  console.log('users', store.getState().users)
  return store.getState().users.get('isAuthed')
}

export function logout () {
  return firebaseAuth.signOut()
}

export function saveUser (userInfo) {
  return ref.child(`users/${userInfo.userId}`).set(userInfo).then(() => userInfo)
}
