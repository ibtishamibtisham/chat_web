import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE17LUcDe_UtrmwOb7mv4HzVxCg0DpmKw",
  authDomain: "myproject-1a5ed.firebaseapp.com",
  projectId: "myproject-1a5ed",
  storageBucket: "myproject-1a5ed.appspot.com",
  messagingSenderId: "1085711527500",
  appId: "1:1085711527500:web:aaad13c424bbbb164ccee9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export default auth;
const provider = new GoogleAuthProvider();
export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
