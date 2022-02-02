import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAjaNvf4cDAVyeyWZKfXgpKDBnqu9awqZo",
  authDomain: "proyecto-react-coder-32aba.firebaseapp.com",
  projectId: "proyecto-react-coder-32aba",
  storageBucket: "proyecto-react-coder-32aba.appspot.com",
  messagingSenderId: "6789074214",
  appId: "1:6789074214:web:1577029e7686778b3385e7",
  measurementId: "G-WQRB7CVK05"
};


initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
