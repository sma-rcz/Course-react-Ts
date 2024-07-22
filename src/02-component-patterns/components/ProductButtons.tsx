import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

interface ProductButtonsProps {
  className?: string;  // aqui se define el tipo de la propiedad para poder agrer stylos
  style?:React.CSSProperties; // se necesita para poder agregar estilos al componente React.CSSProperties
}

                          // se le asigna el tipo de las propiedades que se van a recibir de los estilos
export const ProductButtons = ({className ,style}:ProductButtonsProps) => {
  



    const {counter,increseBy} = useContext(ProductContext); // aqui se obtiene el estado del producto

    

    return (
      <div
      style={style} // se le asigna el estilo al componente
      className={`${styles.buttonsContainer} ${className}`}> {/* aqui se asigna los stilos de Classname */}
        <button
         disabled = {counter <= 0} // se desabilita el boton si el contador es igual a 0
          onClick={() => increseBy(-1)}
          className={styles.buttonMinus}>-</button>
  
        <div className={styles.countLabel}>{counter}</div>
  
        <button
          onClick={() => increseBy(+1)}
          className={styles.buttonAdd}>+</button>
      </div>
      )
  
  }
  