import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';




interface useProductArgs {
    product:Product, // se define el tipo de la propiedad para poder agrer stylos
    onChange?: (args:onChangeArgs) => void // se define el tipo de la propiedad para poder agrer stylos
    value?:number
}

export const useProduct = ( {onChange,product ,value=0}:useProductArgs) => {

    const [counter, setcounter] = useState(value);
    
    
//const isControlled = useRef(!!onChange); // se crea una referencia para saber si el valor es controlado
//console.log('isControlled', isControlled.current);
    
    //.log({value});

    const increseBy = (value: number) => { // se crea una funcion que recibe un valor y lo suma al contador
      
      /*
 
      if (isControlled.current //&& onChange) {
        return onChange!({count:value,product});
      }
      */
        const newValue = Math.max(counter + value, 0); // se obtiene el valor maximo entre el contador y el valor que se le pasa a la funcion
        setcounter( newValue); // se asigna el nuevo valor al contador
        onChange && onChange({count: newValue ,product }); // se verifica si la funcion onChange existe y se le pasa el contador y el producto
    }
      // se ejecuta cuando el valor cambia
    useEffect(() => {
        setcounter(value) // se asigna el valor al contador
    }, [value])

  return {
    counter,
    increseBy,

  }
}
