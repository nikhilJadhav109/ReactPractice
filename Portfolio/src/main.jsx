import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Skills from './components/Skills.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} >
                <Route path='' element={<Hero/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/skills' element={<Skills/>}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>

        //  <App/>
    
   
    
)
