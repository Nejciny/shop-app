import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDN6JBcJFAn9lJB95OIJ21ef4t1pgxfiFo",
  authDomain: "store-b59d1.firebaseapp.com",
  projectId: "store-b59d1",
  storageBucket: "store-b59d1.appspot.com",
  messagingSenderId:  "676126030396" ,
  appId: "1:676126030396:web:f179ac5772050c36bd6139",
  measurementId: "G-29HRNRFFRW"
};

console.log("secret: ")
console.log( ${{ secrets.SECRET_TOKEN }});
console.log("_-------------------_")


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);