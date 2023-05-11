import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {Firebase} from '../../App'
import React from 'react'

export default function LoginView() {
    function googleSignIn(){
        signInWithPopup(Firebase.auth, new GoogleAuthProvider())
      }
      return (
        <div>
          <h1>Login</h1>
          <button onClick={googleSignIn}>login</button>
        </div>
      )
}
