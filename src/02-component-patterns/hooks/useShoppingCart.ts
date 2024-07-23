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
