import { ReactElement } from "react";

import { ProductTitleProps } from '../components/ProductTitle';
import { ProductImageProps } from "../components/ProductImage";
import { Props  as ProductCardProps} from "../components/ProductCard";



export interface Product {
    id: string,
    title?: string,
    img?: string,
}

/*
interface ProductButtonsProps {
  counter: number,
  increseBy: (value: number) => void
}*/

export interface ProductContextProps {
    counter: number;
    increseBy: (value: number) => void;
    product: Product;

}
export interface ProductCardHOCprops {
    ({children,product,}:ProductCardProps ): JSX.Element,
    Image: ( Props: ProductImageProps) => JSX.Element,  // aqui se le asigna el tipo de las propiedades que se van a recibir de los estilos en los argumentos
    Title: ( Props: ProductTitleProps) => JSX.Element, // aqui se le asigna el tipo de las propiedades que se van a recibir de los estilos en los argumentos
    Buttons: ({className}:{className?:string}) => JSX.Element // aqui se le asigna el tipo de las propiedades que se van a recibir de los estilos en los argumentos

}