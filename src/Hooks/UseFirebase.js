import React, { useEffect, useState } from "react";
import firebaseInitAuth from "../Firebase/firbase.init";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";

firebaseInitAuth();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [firebaseError, setFirebaseError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const gogleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // create aceount with email
  const createAceountWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign with emaial
  const signWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update profile
  const updateProfileEmail = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        setFirebaseError(error.message);
      });
  };

  // log out function
  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // on auth state change
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setIsLoading,
    createAceountWithEmail,
    signWithEmail,
    logOut,
    updateProfileEmail,
    gogleSignin,
  };
};

export default UseFirebase;
