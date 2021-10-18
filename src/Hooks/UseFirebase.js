import React, { useEffect, useState } from "react";
import firebaseInitAuth from "../Firebase/firbase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

firebaseInitAuth();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  // create aceount with email
  const createAceountWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   setUser(result.user);
    //   updataeUser(result.user.displayName);

    // })
    // .catch((error) => {
    //   setError(error.message);
    // })
    // .finally(() => setIsLoading(false));
  };

  // sign with emaial
  const signWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update profile
  const updataeUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // log out function
  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
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
  }, [user]);

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
    updataeUser,
  };
};

export default UseFirebase;
