import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { LazyPage, LazyPage2, LazyPage3 } from '../pages'

 const LazyLayout = () => {
  return (
    <div className='row row-2'>
      <div className='contenedor'>
     
      <h1 className='text-center'>Lazy Layout</h1>
      {/*Rutas hijas iran aqui */}
      <nav className='navegacion'>
      
      <ul>
        <li>
          <NavLink to="lazy">Lazy</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy2</NavLink>
        </li>

        <li>
          <NavLink to="lazy3">Lazy3</NavLink>
        </li>
      </ul>
      </nav>
     
      <Routes>
        <Route path='lazy' element={<LazyPage/> } />
        <Route path='lazy2' element={<LazyPage2/>} />
        <Route path='lazy3' element={<LazyPage3 />} />
       {/**
        * <Route path='*' element={<div>Not found</div>} />
        */} 
        <Route path='*' element={<Navigate replace to="lazy" />} />
        
        
      
      </Routes>
        </div>
      </div>
    
   
  )
}
export default LazyLayout
