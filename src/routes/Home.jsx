// ~ Dependencies
import React, { useContext } from 'react'

// ~ Contexts
import { ThemeContext } from '../context/ThemeContext';


export const Home = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
        <h1>Páginal Inicial</h1>
        <p>O tema atual é: {theme}</p>
    </div>
  )
}
