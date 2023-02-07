// ~ Dependencies
import React from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import { useContext } from "react";

// ~ Design
import "./App.css";
import { Navbar } from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [count, setCount] = useState(0);

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
