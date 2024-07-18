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
    Image: ( Props: ProductImageProps) => JSX.Element,
    Title: ( Props: ProductTitleProps) => JSX.Element,
    Buttons: ({className}:{className?:string}) => JSX.Element

}