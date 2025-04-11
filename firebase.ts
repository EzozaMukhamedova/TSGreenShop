import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo2NgR4RMMrNnx71RexsFxElE3VInlNVo",
  authDomain: "green-shop-b8a41.firebaseapp.com",
  projectId: "green-shop-b8a41",
  storageBucket: "green-shop-b8a41.firebasestorage.app",
  messagingSenderId: "145902376723",
  appId: "1:145902376723:web:30828127e9c729cd6bace6",
  measurementId: "G-VF4GS9VWNJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
