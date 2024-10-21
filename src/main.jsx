import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {DNA} from 'react-loader-spinner'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage.jsx'
import Header from './Components/Homepage/Header/Header.jsx'
import Contact from './Components/Homepage/Contact.jsx'
import Login from './Components/Homepage/Login.jsx'
import Blog from './Components/Homepage/Blog.jsx'
import Home from './Components/Homepage/Home/Home.jsx'

import Users from './Components/Homepage/Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import Post from './Components/Post/Post.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'
import Errors from './Components/Errors/Errors.jsx'

const router = createBrowserRouter([
  {
    
      path:'/',
      element:<Homepage></Homepage>,
      errorElement:<Errors></Errors>,
    children:[
      {
        path:'/about',
        element:<div><h2 className="text-2xl text-center">About Page</h2></div>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/posts',
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Posts></Posts>
      },
      {
        path:'/posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },

      {
        path:'/users/:userid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element:<UserDetails></UserDetails>
      },

      {
        path:'/spinner',
        element:<div className='mt-40 flex justify-center flex-col items-center  w-full rounded-xl'>
            <h2 className="text-7xl text-green-700 font-bold">Mr.Hriday</h2>
          <div className=''>
        
          <DNA
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />  </div>
        </div>
      },
     
    
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>,
)
 