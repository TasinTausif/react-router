import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from "./Root.jsx"
import {Home, About, Contact, User, Github, githubInfoLoader} from "./components/PageIndex.js"

// 2 ways to do it

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Root/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },{
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      {/* Here, :id is the variable and the data will rendered based on this variable name */}
      <Route path="user/:userId" element={<User/>}>
        <Route path=":userName"/>
      </Route>
      <Route 
        path='/github' 
        element={<Github/>}
        // It is allowed to use callback here. But direct func can be called as well
        loader={githubInfoLoader}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Instead of going to app, we'll pass the bellow prop here */}
    <RouterProvider
      router={router}
    />
  </StrictMode>,
)
