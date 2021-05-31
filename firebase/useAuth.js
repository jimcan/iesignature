import { useState } from 'react'
import firebase from '.'

const auth = firebase.auth

function useAuth() {
  const [currentUser, setCurrentUser] = useState()
  const googleProvider = new auth.GoogleAuthProvider()

  auth().onAuthStateChanged(user => {
    if (user) {
      setCurrentUser(user)
    }
  })

  function createUserWithEmailAndPassword(email, password) {
    auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential.user)
      })
      .catch(e => {
        console.error(e)
      })
  }

  function signinWithEmailAndPassword(email, password) {
    auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential.user)
      })
      .catch(e => {
        console.error(e)
      })
  }

  function signinWithGoogle() {
    auth().signInWithPopup(googleProvider)
      .then(result => {
        console.log(result.user.displayName)
      })
      .catch(e => {
        console.error(e)
      })
  }

  const signOut = () => auth().signOut().then(_ => setCurrentUser(null))

  return {
    currentUser,
    createUserWithEmailAndPassword,
    signinWithEmailAndPassword,
    signinWithGoogle,
    signOut,
  }
}

export default useAuth
