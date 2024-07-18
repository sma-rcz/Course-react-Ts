import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
//import NoImg  from '../assets/no-image.jpg' // Ajusta la ruta según sea necesario



export const ShoppingPages = () => {
  const coffeImg = '/coffee-mug.png'

  const product = {
    id: '1',
    title: 'Coffee Mug Especial Edition',
    img: coffeImg 

  }


  return (
    <div><h1>
      Shopping Store
    </h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:'5px',
      }}>

        {/*Compooun Component Pattern    */}
        {/*Aqui resive todos los elementos del padre al hijo */}
        {/*
        
        
        
        */}

        <ProductCard product={product}>

          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />

        </ProductCard>

        
        <ProductCard product={product}>

          <ProductImage/>
          <ProductTitle />
          <ProductButtons/>

        </ProductCard>  
      
      </div>
    



      {/*  // ? forma de  de importar las imagen desde el archivo en wepack *
              <img src={ NoImg } alt='failed img' width='300px' height='300px' />
               <img src='/coffee-mug.png' alt='coffee mug' width='300px' height='300px' />
          */}



    </div>

  )
}

