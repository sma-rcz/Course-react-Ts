import { lazy, LazyExoticComponent } from "react";
//import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


type JSXelement = () => JSX.Element;





interface Route {
    to: string;
    path: string;
    Component:LazyExoticComponent<JSXelement> | JSXelement;
    name: string;
}
                                //cambio del name de la ruta por un  nombre mas descriptivo
const Lazy  =  lazy(() => import( /*webpackChunkName:"LazyPage1"*/'../01-lazyload/pages/LazyPage'));
const Lazy2  =  lazy(() => import(/*webpackChunkName:"LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3  =  lazy(() => import(/*webpackChunkName:"LazyPage3"*/'../01-lazyload/pages/LazyPage3'));



export const routes:Route[] = [ 
    {
        to:'/lazy',
        path:'lazy',
        Component: Lazy,
        name: 'Lazy-1'

    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
]