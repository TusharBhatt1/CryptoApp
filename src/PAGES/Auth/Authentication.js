// Import the functions you need from the SDKs you need
import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import SignUp from "./SignIn"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCRFCQ_ENYXQJfHR8dKXhbD__X2on6Ys",
  authDomain: "crypto-app-e5328.firebaseapp.com",
  projectId: "crypto-app-e5328",
  storageBucket: "crypto-app-e5328.appspot.com",
  messagingSenderId: "138304095548",
  appId: "1:138304095548:web:a28adf98407b2089690a39"
};


export default function Authentication() {
  return (
    <div>
      <SignUp/>
      
    </div>
  )
}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


