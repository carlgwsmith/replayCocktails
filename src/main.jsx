import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Root from './Routes/root.jsx'
import './index.css'
import CannedCocktails from './Pages/CannedCocktails.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const routes = [
  {path:'/*',
element:<Home/>},
  {
    path:'',
    element: <Root/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {path:'/*',
element:<Home/>},
      {
        path:'/home',
        element: <Home/>
      },
      {
        path:'/cocktails',
        element: <CannedCocktails/>
      }
    ]
  },
]
const router = createBrowserRouter(routes,{
  basename:"/"
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} >
      </RouterProvider>
)
