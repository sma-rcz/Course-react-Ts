import { useState } from "react";
import { Product, ProductCart } from "../interfaces/interfaces";



export const useShoppingCart = () => {
    const [shoppingCart, setshoppingCart] = useState<{  [key:string]:ProductCart }>({ })
  
  const onProductCountChange =  ( {count,product}:{count:number,product:Product}) =>{
   console.log({count});
   // console.log(count,product);
 
 

  
/*
  if(count ===0) {
    const newShopincart = {...shoppingCart}
    delete newShopincart[product.id]
    return setshoppingCart(newShopincart);
   // setshoppingCart(newShopincart);

  }*/

  
  setshoppingCart( oldShoppingCart => {

    /*

      const productIncart:ProductCart = oldShoppingCart[product.id] || {...product,count:0} // se crea una variable que almacena el producto que se encuentra en el carrito de compras o se crea un nuevo producto con un contador en 0

      if(Math.max(productIncart.count + count,0 ) >0){ // se verifica si el contador del producto es mayor a 0
        productIncart.count += count; // se le suma al contador del producto la cantidad que se le pasa a la funcion

        return{
          ...oldShoppingCart, // se copia el carrito de compras
          [product.id]: productIncart // se agrega el producto al carrito de compras
        }
      }
      const { [product.id]:deletedProduct, ...newShoppingcart } = oldShoppingCart; // se crea una variable que almacena el producto eliminado del carrito de compras
      return newShoppingcart; // se retorna el nuevo carrito de compras sin el producto eliminado
  
     
      

      const newShoppingcart = {...oldShoppingCart}
      delete newShoppingcart[product.id]
      return newShoppingcart;   */
      

    
     if(count === 0){// si el contador es igual a 0 se elimina el producto del carrito
    // const newShoppingcart = {...oldShoppingCart}
    // delete newShoppingcart[product.id]
   
      const{ [product.id]:deletedProduct, ...newShoppingcart } = oldShoppingCart;
      console.log(deletedProduct);
      return newShoppingcart;

      }

       return{
       ...oldShoppingCart,// se copia el carrito de compras
      [product.id]: {...product,count} // se agrega el producto al carrito de compras
      }



  })
  
  // console.log(shoppingCart);
  } 

 /*
 const counts = Object.values(shoppingCart).map((product)=> product.count);
  console.log(counts);*/



  return{
    shoppingCart,

    onProductCountChange,
    

  }
}
