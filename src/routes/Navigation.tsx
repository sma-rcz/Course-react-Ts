import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes' //esta importa las rutas de la aplicacion modificadas para el lazy load como se necesiten cargar
//import { Lroutes
export const Navigation = () => {
    return (
        //Suspense es un componente que permite mostrar un fallback mientras se carga un componente lazy 
        <Suspense fallback={null}>

        <BrowserRouter>


            <div className='main-layout'>
                <div className=' row row-1'>

                <nav className='nav-Submenu'>
                    <img src={logo} alt='React Logo' />

                    <ul>
                        {
                            routes.map(({ to, name }) => {
                                return (
                                    <li key={to}>
                                        <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''} > {name}</NavLink>
                                    </li>
                                )
                            })
                        }

                        {
                            /**
                             * 
                             * <li>
                            <NavLink to='/lazy' className={({ isActive }) => isActive ? 'nav-active' : ''} > Lazy1</NavLink>
                        </li>

                        <li>
                            <NavLink to='/lazy2' className={({ isActive }) => isActive ? 'nav-active' : ''}       > Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={({ isActive }) => isActive ? 'nav-active' : ''}   > Lazy3</NavLink>
                        </li>

                             * 
                             * 
                             */
                        }


                    </ul>
                </nav>
                </div>

                <Routes>

                    {

                        routes.map(({ path, Component }) => {
                            return (
                                <Route key={path}
                                    path={path}
                                    element={<Component />} />
                            )
                        })


                    }
                    {/**
                     * 
                     *   <Route path='lazy' element={<h1><LazyPage /></h1>} />
                    <Route path='lazy2' element={<h1><LazyPage2 /></h1>} />
                    <Route path='lazy3' element={<h1><LazyPage3 /></h1>} />
                     * 
                     */}

                    <Route path='/*' element={<Navigate to={routes[0].to} replace />} />

                </Routes>
            </div>


        </BrowserRouter>
        </Suspense>

    )
}
