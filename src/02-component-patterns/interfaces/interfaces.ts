import { ReactElement } from "react";

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]

}

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
    ({children,product}:Props ): JSX.Element,
    Image: ({ img }: { img?: string | undefined }) => JSX.Element,
    Title: ({ title }: { title?: string | undefined }) => JSX.Element,
    Buttons: () => JSX.Element

}