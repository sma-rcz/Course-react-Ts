import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";



type JSXelement = () => JSX.Element;





interface Route {
    to: string;
    path: string;
    Component:LazyExoticComponent<JSXelement> | JSXelement; //LazyExoticComponent<JSXelement> | JSXelement;
    name: string;
}


/*



*/
                                //cambio del name de la ruta por un  nombre mas descriptivo
//const Lazy  =  lazy(() => import( /*webpackChunkName:"LazyPage1"*/'../01-lazyload/pages/LazyPage'));
//const Lazy2  =  lazy(() => import(/*webpackChunkName:"LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
//const Lazy3  =  lazy(() => import(/*webpackChunkName:"LazyPage3"*/'../01-lazyload/pages/LazyPage3'));
const LazyLayout = lazy(() => import( /*webpackChunkName:"LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));


export const routes:Route[] = [ 
    {
        to:'/lazyload/',
        path:'lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'

    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'No Lazy '
    },
  
]