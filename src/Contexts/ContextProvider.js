import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import app from '../Firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';

export const AuthProvider = createContext();

const ContextProvider = ({ children }) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [categoryData, setCategoryData] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(cartFromLocalStorage);
  const SignUpEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileInfo = (name) => {
    return updateProfile(auth.currentUser, name);
  };

  const SignInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const Logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const valueInfo = {
    SignUpEmail,
    SignInEmail,
    user,
    setUser,
    updateProfileInfo,
    Logout,
    googleSignIn,
    githubSignIn,
    loading,
    categoryData,
    setCategoryData,
    setCart,
    cart,
  };
  return (
    <AuthProvider.Provider value={valueInfo}>{children}</AuthProvider.Provider>
  );
};

export default ContextProvider;
