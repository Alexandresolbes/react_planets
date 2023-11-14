import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about";
import Planets from './planets';
import Navbar from './navbar';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    {/* <App /> */}
    <Navbar />
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/planets" element={<Planets/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
