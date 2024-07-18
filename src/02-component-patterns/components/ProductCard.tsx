import { createContext, ReactElement, useContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Props } from '../interfaces/interfaces';



// Contexto para compartir el estado del producto a sus hijos
export const ProductContext = createContext({} as ProductContextProps); // se inicializa con un objeto vacio y se le asigna el tipo de dato que va a tener
const { Provider } = ProductContext  // destructuring para obtener el provider











// Componente que renderiza la tarjeta del producto
export const ProductCard = ({ children, product }: Props) => {
  const { counter, increseBy } = useProduct();


  return (
    <>{/* se envuelve todo en el provider para que los hijos puedan acceder al estado del producto */}
      <Provider value={{

        counter,
        increseBy,
        product
      }}>
        <div className={styles.productCard}>

          {/* <span className={styles.productDescription}>{product.title}</span>*/}

          {children}



        </div>
      </Provider>

    </>

  )
}

