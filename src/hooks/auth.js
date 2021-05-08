import React from "react";
import firebase from"firebase/app";
import { auth } from "../firebase/firebase_config";



function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <div>
        <button className="sign-in" onClick={signInWithGoogle}>Login with Google</button>
        

        </div>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Logout</button>
    )
  }

  export {SignIn,SignOut};