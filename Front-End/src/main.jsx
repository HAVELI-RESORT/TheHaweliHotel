import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import LayOut from './LayOut.jsx';
import Home from './Components/Home.jsx';
import Eventscomp from './Components/Eventscomp.jsx'
import About from './Components/About.jsx'
import Restaurant from './Components/Restaurant.jsx'
import Accommodation from './Components/Accommodation.jsx'
import Facilities from './Components/Facilities.jsx'
import Specialoffers from './Components/Specialoffers.jsx'
import Gallerycomp from './Components/Gallerycomp.jsx'
import Contact from './Components/Contact.jsx'
import Bookingcomp from './Components/Bookingcomp.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "Eventscomp",
        element: <Eventscomp />
      },
      {
        path: "restaurant",
        element: <Restaurant/>
      },
      {
        path: "accommodation",
        element: <Accommodation />
      },
      {
        path: "facilities",
        element: <Facilities />
      },
      {
        path: "specialoffers",
        element: <Specialoffers />
      },
      {
        path: "gallerycomp",
        element: <Gallerycomp />
      },
      {
        path: "contact",
        element: <Contact />
      },{
        path: "Bookingcomp",
        element: <Bookingcomp />
      },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
