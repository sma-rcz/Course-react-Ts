import React, { createContext, ReactElement } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { onChangeArgs, Product, ProductContextProps} from '../interfaces/interfaces';



// Contexto para compartir el estado del producto a sus hijos
export const ProductContext = createContext({} as ProductContextProps); // se inicializa con un objeto vacio y se le asigna el tipo de dato que va a tener
const { Provider } = ProductContext  // destructuring para obtener el provider





export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string; // se define el tipo de la propiedad para poder agrer stylos
  style?:React.CSSProperties; // se necesita para poder agregar estilos al componente React.CSSProperties
  onChange?: (args:onChangeArgs) => void; // se define el tipo de la propiedad para poder agrer stylos
  value?:number;
}






// Componente que renderiza la tarjeta del producto
export const ProductCard = ({ children, product,className ,style, onChange ,value}: Props) => {
  const { counter, increseBy } = useProduct(
    {
      onChange,
      product,
      value
   

  });


  return (
    <>{/* se envuelve todo en el provider para que los hijos puedan acceder al estado del producto */}
      <Provider value={{

        counter,
        increseBy,
        product
      }}>
        <div 
        style={style}
        className={`${styles.productCard} ${className}`}>

          {/* <span className={styles.productDescription}>{product.title}</span>*/}

          {children}



        </div>
      </Provider>

    </>

  )
}

