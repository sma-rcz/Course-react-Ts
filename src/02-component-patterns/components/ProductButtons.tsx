import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

interface ProductButtonsProps {
  className?: string;
  style?:React.CSSProperties;
}


export const ProductButtons = ({className ,style}:ProductButtonsProps) => {
  
    const {counter,increseBy} = useContext(ProductContext); // aqui se obtiene el estado del producto
    return (
      <div
      style={style}
      className={`${styles.buttonsContainer} ${className}`}>
        <button
          onClick={() => increseBy(-1)}
          className={styles.buttonMinus}>-</button>
  
        <div className={styles.countLabel}>{counter}</div>
  
        <button
          onClick={() => increseBy(+1)}
          className={styles.buttonAdd}>+</button>
      </div>
      )
  
  }
  