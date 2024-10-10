import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp({

});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


// Detect auth state 

//onAuthStateChanged(auth, user =>{

  //  if(usernull )

//});



