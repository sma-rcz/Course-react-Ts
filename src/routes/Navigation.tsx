import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import   logo from '../logo.svg'
import { FormikBasicPage ,FormikAbstractation,FormikComponents,FormikYupPage,RegisterPage,RegisterFormikPage, DynamicForm} from '../03-forms/pages'

//import { ShoppingPages } from '../02-component-patterns/pages/ShoppingPages'


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React Logo' />

                    <ul>

                        <li>
                            <NavLink to='/registerPage' className={({ isActive }) => isActive ? 'nav-active' : ''}       > RegisterPage</NavLink>
                        </li>

                        <li>
                            <NavLink to='/registerFromikPage' className={({ isActive }) => isActive ? 'nav-active' : ''}       > Register FormikPage</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formikBasico' className={({ isActive }) => isActive ? 'nav-active' : ''} > Formik basico</NavLink>
                        </li>

                        <li>
                            <NavLink to='/FormikYupPage' className={({ isActive }) => isActive ? 'nav-active' : ''}       > FormikYup Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formikComponents' className={({ isActive }) => isActive ? 'nav-active' : ''}   > Formik Component Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/FormikAbstractation' className={({ isActive }) => isActive ? 'nav-active' : ''}   > Formik Abtratction Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/DynamicForm' className={({ isActive }) => isActive ? 'nav-active' : ''}   > Dynamic Form</NavLink>
                        </li>


                    </ul>
                </nav>

                <Routes>
                    <Route path='/registerPage' element={<RegisterPage/>} />
                    <Route path='/registerFromikPage' element={<RegisterFormikPage/>} />
                    <Route path='/formikBasico' element={<FormikBasicPage />} />
                    <Route path='/FormikYupPage' element={<FormikYupPage/>} />
                    <Route path='/formikComponents' element={<FormikComponents/>} />
                    <Route path='/FormikAbstractation' element={<FormikAbstractation/>} />
                    <Route path='/DynamicForm' element={<DynamicForm/>} />
                    <Route path='/*' element={<Navigate to="/home" replace />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
