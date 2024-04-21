import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// // when comment is submitted
// document.querySelector("comment input").addEventListener('keydown', function(event){
//   if (event.key === 'Enter') {
//     // make sure do not reset the page with this
//     event.preventDefault();

//     // do something here
//     console.log('hi');
    
//     // get the comment here
//     var input = document.getElementById("comment".value);

//     //print out?
//     //document.getElementById("p1").innerHTML = input;
//   }
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
