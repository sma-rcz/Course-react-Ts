import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import NoImg from '../assets/no-image.jpg' // Ajusta la ruta según sea necesario
import styles from '../styles/styles.module.css'
// Componente que renderiza la imagen del producto desde una funcion  que recibe la url de la imagen
export const ProductImage = ({ img = '' }) => {

    const  {product  } = useContext(ProductContext);
    let imgToshow:string
    if( img){
      imgToshow = img
    }else if(product.img){
      imgToshow = product.img
    }
    else{
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      imgToshow = NoImg
    }
  
  
  
  
    return (<img className={styles.productImg} src={imgToshow }  alt='Coffee mug' width='200px' height='200px' />)
  }

