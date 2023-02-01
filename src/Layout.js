import logo from './logo.svg';
import './styles/App.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './js/pages/Home';
import Method from './js/pages/LoginSignup';
import Navbar from './js/components/Navbar';
import Gallery from './js/pages/Gallery';
import Test from './js/pages/TestComponent';
import ThemeContext from './js/context/context';
import { useState } from 'react';

// import { useState } from 'react';

export default function Layout() {
  let [mode, setMode] = useState({ 
    theme: "light",
    id: " ",
    email: " "
  })
  
  const methods = {
    setTheme: ()=>{
      mode.theme === "dark" ? 
      setMode({...mode, theme: "light"}) : setMode({...mode, theme: "dark"})    
  },
    setId: (id)=>{
      setMode({...mode, id: id});
    },
    displayId: ()=>{
      console.log(mode.id) 
    }
  }



  return (
    <>
    <div className="App">
      <ThemeContext.Provider value={[mode, methods ]} >
        <BrowserRouter>
          <Navbar/>
           {/* The rest of your app goes here */}
          <Routes>
            <Route element={<Home/>} path="/" /> 
            <Route element={<Method method={"login"}/>} path="/login"  /> 
            <Route element={<Method method={"signup"}  />} path="/signup"  /> 
            <Route element={<Gallery />} path="/gallery"  /> 
            <Route element={<Test/>} path="/test"  /> 
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider >
    </div>
    </>
  );
}

