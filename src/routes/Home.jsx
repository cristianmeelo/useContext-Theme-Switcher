// ~ Dependencies
import React, { useContext } from "react";

// ~ Contexts
import { ThemeContext } from "../context/ThemeContext";

// ~ Components
import { Footer } from "../components/Footer";

export const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='page-information-container'>
      <h1>Páginal Inicial</h1>
      <br/>
      <button onClick={toggleTheme}>Mudar tema</button>
      <br/>
      <br/>
      <p>O tema atual é: {theme}</p>
      <Footer/>
    </div>
  );
};
