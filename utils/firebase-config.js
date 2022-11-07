import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBngIhkqDBu8fNrgPXCR1LFdvUH8z8TWw8",
  authDomain: "netflix-clone-b251b.firebaseapp.com",
  projectId: "netflix-clone-b251b",
  storageBucket: "netflix-clone-b251b.appspot.com",
  messagingSenderId: "756268343293",
  appId: "1:756268343293:web:c32d344ae5bf940b49c394",
  measurementId: "G-9MK457T1CN"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)