import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import   logo from '../logo.svg'
//import { ShoppingPages } from '../02-component-patterns/pages/ShoppingPages'


export const Navigation = () => {
  return (
    <BrowserRouter>
    <div className='main-layout'>
        <nav>
        <img src={logo} alt='React Logo' />
   
        <ul>
            <li>
                <NavLink to='/Shopping' className={ ({ isActive}) => isActive ? 'nav-active'  : ''  } > Shopping</NavLink>
            </li>

            <li>
                <NavLink to='/about' className={ ({ isActive}) => isActive ? 'nav-active'  : ''}       > About</NavLink>
            </li>
            <li>
                <NavLink to='/users'  className={ ({ isActive}) => isActive ? 'nav-active'  : ''  }   > Users</NavLink>
            </li>

            
        </ul>
        </nav>

        <Routes>
            <Route path='/Shopping' element={<h1>Shopping Page</h1>} />
            <Route path='/about' element={<h1>About Page</h1>} />
            <Route path='/users' element={<h1>User pages</h1>} />
            <Route path='/*' element={<Navigate to="/home" replace  />} />

        </Routes>
    </div>
</BrowserRouter>
  )
}
