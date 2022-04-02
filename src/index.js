import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import Main from "./Components/main"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

// ///ACTIONS 
// const fetchInboxData = () => {
//   return {
//     type: "FETCH_INBOX_DATA"
//   }
// }

// //reducers
// const fetchInboxDataReducer

// let store = createStore

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container);


root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Main />
  </React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
