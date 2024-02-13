import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop.jsx'
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutsUs.jsx';
import Contact from './Components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    { path: "", element: <Home /> },
    { path: "shop", element: <Shop /> },
    { path: "aboutus", element: <AboutUs /> },
    { path: "contact", element: <Contact /> },
    ]
  },
 

   
 
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
