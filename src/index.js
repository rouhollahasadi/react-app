
// این فایل یکسری پکیجها رو ایمپورت کرده 
//این پکیجها داخل فولدر نودماژول هستند
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //ایمپورت استایلها
import App from './App';//کامپوننت اپ رو ایمپورت کرده 
// ما کامپوننت ها رو در فایل جی اس ایجاد می کنیم بعد ایمپورت می کنیم
import reportWebVitals from './reportWebVitals';


//کامپوننت خودمون رو به روش زیر رندر می کنیم
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
