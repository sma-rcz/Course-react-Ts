import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
//import NoImg  from '../assets/no-image.jpg' // Ajusta la ruta según sea necesario
import '../styles/custom-styles.css'


export const ShoppingPages = () => {
  const coffeImg = '/coffee-mug.png'

  const product = {
    id: '1',
    title: 'Coffee Mug Especial Edition',
    img: coffeImg

  }


  return (
    <div  ><h1>
      Shopping Store
    </h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '5px',
      }}>

        {/*Compooun Component Pattern    */}
        {/*Aqui resive todos los elementos del padre al hijo */}
        {/*
        
        
        
        */}

        {/*para  poder agregar estilos al componente 
        se le asigna la propiedad className y se le asigna el estilo que se va a aplicar al componente.
         //? Ademas para poder agregar estilos y clases al componente es necesario editar  el archivo de interfaces/interfaces.ts y tambien  el archivo index.ts en dado caso que ocupe argumentos en los estilos,
         //?sin embargo,   agregar el tipo de la propiedad que se va a recibir en el componente
        */}
        <ProductCard
          className='bg-dark text-white'
          product={product}>

          <ProductCard.Image className='custom-image'
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
            }}
          />
          <ProductCard.Title className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />

        </ProductCard>


        <ProductCard
          className='bg-dark text-white'
          product={product}>

          <ProductImage className='custom-image'
          style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
          }}
          />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />

        </ProductCard>


        <ProductCard
          product={product}
          style={{
            backgroundColor: 'lightblue',
          }}
        >

          <ProductImage style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
          }} />
          <ProductTitle style={{
            color: 'black',
            fontWeight: 'bold',
          }} />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end',
          }} />

        </ProductCard>
      </div>




      {/*  // ? forma de  de importar las imagen desde el archivo en wepack *
              <img src={ NoImg } alt='failed img' width='300px' height='300px' />
               <img src='/coffee-mug.png' alt='coffee mug' width='300px' height='300px' />
          */}



    </div>

  )
}

