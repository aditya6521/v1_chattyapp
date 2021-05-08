import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


var firebaseConfig = {
    apiKey: "AIzaSyAS7WgVZ2Q8So0ecwX7KbvD6LdBRHYBi84",
    authDomain: "chatspace-c6074.firebaseapp.com",
    projectId: "chatspace-c6074",
    storageBucket: "chatspace-c6074.appspot.com",
    messagingSenderId: "694049399553",
    appId: "1:694049399553:web:bf7b427cc5cf14be6a7100"
  };

  firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { auth,firestore,analytics};