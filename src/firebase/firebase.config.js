// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACl1fqbcztdDjqO8aftlAQBslo0YisgHQ",

  authDomain: "reactloginauth-186d8.firebaseapp.com",

  projectId: "reactloginauth-186d8",

  storageBucket: "reactloginauth-186d8.appspot.com",

  messagingSenderId: "128864885353",

  appId: "1:128864885353:web:064699e70e9b0533a2a0f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
