import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
