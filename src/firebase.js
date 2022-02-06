// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgWodQVhYr7a35yK4w3UmPtlSYId6qRZE",
  authDomain: "auth-app-d4b5b.firebaseapp.com",
  projectId: "auth-app-d4b5b",
  storageBucket: "auth-app-d4b5b.appspot.com",
  messagingSenderId: "726557950431",
  appId: "1:726557950431:web:535644c0737e9af2ab846a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
 return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password) {
 return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
 return signOut(auth);
}

export function useAuth() {
 const [currentUser, setCurrentUser ] = useState();

 useEffect(() => {
  const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
  return unsub;
 }, []);

 return currentUser;
}