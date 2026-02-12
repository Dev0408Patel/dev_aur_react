import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Friends from './components/Friends.jsx'
import Profile from './components/Profile.jsx'
import Groups from './components/Groups.jsx'
import Activities from './components/Activities.jsx'
import Products from './components/Products.jsx'
import Features from './components/Features.jsx'
import Techstack from './components/Techstack.jsx'
import About from './components/About.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Friends/>}></Route>
      <Route path="groups" element={<Groups/>}></Route>
      <Route path="activities" element={<Activities/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
      <Route path="products" element={<Products/>}></Route>
      <Route path="features" element={<Features/>}></Route>
      <Route path="techstack" element={<Techstack/>}></Route>
      <Route path="aboutus" element={<About/>}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
