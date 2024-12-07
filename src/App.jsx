import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/App'
import Footer from './components/Footer/Appp'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>,
  },
  // {
  //   path: "/products",
  //   element: <Products />,
  // },
  // {
  //   path: "/products/:id",
  //   element: <Product />,
  // },
]);
 function App() {
  return <RouterProvider router={router} />;
  
}


export default App