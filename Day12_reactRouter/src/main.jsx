import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact Us/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// forming a router ---> using importing a method createBrowserRouter
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children :[
//       {
//         path :"",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element :<About/>
//       },
//       {
//         path: "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

// method 2 of forming the router
const router = createBrowserRouter(
  // using a method 
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path ='' element={<Home/>} />
       <Route path ='about' element={<About/>} />
        <Route path ='contact' element={<Contact Us/>} />

{/* dynamically take the value by userid(just a name ---> useParam in user.jsx  ) */}
        <Route path ='user/:userid' element={<User/>} /> 
           <Route 
           loader={githubInfoLoader}
           path ='github' 
           element={<Github/>} 
           />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/> 
  </StrictMode>,
)
