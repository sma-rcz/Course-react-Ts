import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title }: { title?: string | undefined }) => {

  
    const {product} = useContext(ProductContext);
    /*
    if(title  === ''){
      title = product.title
    }*/
   
    
    return (<span className={styles.productDescription}>{title ? title === ' ' : product.title}</span>)
  }