import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./Root.jsx"
import {Home, About, Contact} from "./components/OutletComponents"

// It is done in 2 ways
const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[{
      path:"",
      element:<Home/>
    },{
      path:"about",
      element:<About/>
    },{
      path:"contact",
      element:<Contact/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Instead of going to app, we'll pass the bellow prop here */}
    <RouterProvider
      router={router}
    />
  </StrictMode>,
)
