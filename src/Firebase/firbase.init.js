import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitAuth = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitAuth;
