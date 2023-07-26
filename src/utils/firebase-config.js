
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD1RYYxNTsrifjIEqFwUyTA-eRnwQQnFQE",
  authDomain: "react-netflix-clone-3e8a1.firebaseapp.com",
  projectId: "react-netflix-clone-3e8a1",
  storageBucket: "react-netflix-clone-3e8a1.appspot.com",
  messagingSenderId: "781048025338",
  appId: "1:781048025338:web:13b0214631ef0e34fd3943",
  measurementId: "G-MHZFFYDYPH"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);