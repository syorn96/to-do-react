import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';

const toDos = ['Learn React','Apply to jobs','Start on a new portfolio project', 'Formulate a start-up idea', 'Recruit people']

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyList theList={toDos}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
