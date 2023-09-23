import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'



import DropDown from './DropDown'

export const Body = () => {
    
 

    
    
     const appRotuer = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/test",
          element:<DropDown/>
        }
     ])

  return (
   
 <RouterProvider router={appRotuer} />
  
    
  )
}
