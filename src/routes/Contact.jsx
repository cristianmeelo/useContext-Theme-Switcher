// ~Dependencies
import React, { useContext } from 'react'

// ~Context
import { ThemeContext } from '../context/ThemeContext';

// ~Component
import { Footer } from '../components/Footer';

export const Contact = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='page-information-container'>
      <h1>Páginal de Contato</h1>
      <br/>
      <button onClick={toggleTheme}>Mudar tema</button>
      <br/>
      <br/>
      <p>O tema atual é: {theme}</p>
      <Footer/>
    </div>
  )
}
