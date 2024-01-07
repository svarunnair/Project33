
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Signin from "../Signin";
import { GoogleAuthProvider, getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBDID8TWJ6xx82-HKemTePCCI8N4DggScA",
  authDomain: "rado-ef0e3.firebaseapp.com",
  projectId: "rado-ef0e3",
  storageBucket: "rado-ef0e3.appspot.com",
  messagingSenderId: "487745952968",
  appId: "1:487745952968:web:28fb06a8d6c1a91b3e59fd",
  measurementId: "G-Y8B1DKMMQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}
