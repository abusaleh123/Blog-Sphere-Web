// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWpv1z2W7PZCTHQCUsQdwuZxOuTjCwAS8",
  authDomain: "blog-sphere-55e89.firebaseapp.com",
  projectId: "blog-sphere-55e89",
  storageBucket: "blog-sphere-55e89.firebasestorage.app",
  messagingSenderId: "578954985496",
  appId: "1:578954985496:web:853f32e1e4529b3c4b036d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth