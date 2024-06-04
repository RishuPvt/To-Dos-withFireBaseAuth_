import React from 'react'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBcLgSMXM_sKFElLhPy5ANfv0HIzRu6k80",
    authDomain: "my-first-firebaseproject-4fa1a.firebaseapp.com",
    projectId: "my-first-firebaseproject-4fa1a",
    storageBucket: "my-first-firebaseproject-4fa1a.appspot.com",
    messagingSenderId: "380597757982",
    appId: "1:380597757982:web:da79526e508646917b660f",
    Database:"https://console.firebase.google.com/project/my-first-firebaseproject-4fa1a/database/my-first-firebaseproject-4fa1a-default-rtdb/data/~2F"
  };
  
  export const app = initializeApp(firebaseConfig);
