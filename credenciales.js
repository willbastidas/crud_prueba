// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYhVCuoTn1wesLZtyie-d8wQazrzXHi7I",
  authDomain: "crud-prueba-7909b.firebaseapp.com",
  projectId: "crud-prueba-7909b",
  storageBucket: "crud-prueba-7909b.appspot.com",
  messagingSenderId: "309334503049",
  appId: "1:309334503049:web:c69854113c872ce4dae058"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;