// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4EODAyfpE3or-K13z10PUxDVULld1Yw",
  authDomain: "ncd-app-9fa4c.firebaseapp.com",
  databaseURL: "https://ncd-app-9fa4c-default-rtdb.firebaseio.com",
  projectId: "ncd-app-9fa4c",
  storageBucket: "ncd-app-9fa4c.appspot.com",
  messagingSenderId: "625802272807",
  appId: "1:625802272807:web:d1d39a22b47ece13e06e02"
};

// Initialize Firebase
// const app = getApps().length>0?getApps()
// :initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export {auth}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
 