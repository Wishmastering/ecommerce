import logo from './logo.svg';
import './styles/App.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './js/pages/Home';
import Login from './js/pages/Login';
import Navbar from './js/components/Navbar';
import { useState } from 'react';

export default function Layout() {
  const [color, setColor] = useState('Verde')
  return (
    <>
      <Navbar color={color}/>
    <div className="App">
      <BrowserRouter>
      {/* The rest of your app goes here */}
        <Routes>
          <Route element={<Home color={color} setColor={setColor}/>} path="/" /> 
          <Route element={<Login />} path="/login"  /> 
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

