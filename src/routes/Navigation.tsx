import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import   logo from '../logo.svg'
import { LazyPage, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

export const Navigation = () => {
  return (

        <BrowserRouter>


            <div className='main-layout'>

                <nav>
                    <img src={logo} alt='React Logo' />

                    <ul>
                        <li>
                            <NavLink to='/lazy' className={({ isActive }) => isActive ? 'nav-active' : ''} > Lazy1</NavLink>
                        </li>

                        <li>
                            <NavLink to='/lazy2' className={({ isActive }) => isActive ? 'nav-active' : ''}       > Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={({ isActive }) => isActive ? 'nav-active' : ''}   > Lazy3</NavLink>
                        </li>


                    </ul>
                </nav>

                <Routes>
                    <Route path='lazy' element={<h1><LazyPage /></h1>} />
                    <Route path='lazy2' element={<h1><LazyPage2 /></h1>} />
                    <Route path='lazy3' element={<h1><LazyPage3 /></h1>} />
                    <Route path='/*' element={<Navigate to="/lazy" replace />} />

                </Routes>
            </div>






        </BrowserRouter>

    )
}
