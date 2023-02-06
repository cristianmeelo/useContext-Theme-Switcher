// ~ Dependencies
import React  from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// ~ Components
import { Home } from './routes/Home'
import { Contact } from './routes/Contact'
import App from './App'

// ~ Design
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home />},
      { path: "/contact", element: <Contact />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
