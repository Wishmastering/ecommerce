import logo from './logo.svg';
import './styles/App.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './js/pages/Home';
import Method from './js/pages/LoginSignup';
import Navbar from './js/components/Navbar';
import Gallery from './js/pages/Gallery';
import Blog from './js/pages/Blog';

// import { useState } from 'react';

export default function Layout() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      {/* The rest of your app goes here */}
        <Routes>
          <Route element={<Home/>} path="/" /> 
          <Route element={<Method method={"login"}/>} path="/login"  /> 
          <Route element={<Method method={"signup"}  />} path="/signup"  /> 
          <Route element={<Gallery />} path="/gallery"  /> 
          <Route element={<Blog />} path="/blog"  /> 
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

