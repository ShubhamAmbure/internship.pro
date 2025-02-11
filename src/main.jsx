import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Service from './Componets/Service/Service.jsx'
import About from './Componets/About/About.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout/>,
     children: [
      
       {
         path: "about",
         element: <About />
       },
       {
         path: "service",
         element: <Service />
       }
     ]
   }
 ])
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
