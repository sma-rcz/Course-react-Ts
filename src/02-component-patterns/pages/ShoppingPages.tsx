
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
//import NoImg  from '../assets/no-image.jpg' // Ajusta la ruta según sea necesario
import '../styles/custom-styles.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';  //? se importa el hook que se creo para el carrito de compras



export const ShoppingPages = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart(); // se llama al hook que se creo para el carrito de compras

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


        {/*
        
        
        
        */}

        {/*para  poder agregar estilos al componente 
        se le asigna la propiedad className y se le asigna el estilo que se va a aplicar al componente.
         //? Ademas para poder agregar estilos y clases al componente es necesario editar  el archivo de interfaces/interfaces.ts y tambien  el archivo index.ts en dado caso que ocupe argumentos en los estilos,
         //?sin embargo,   agregar el tipo de la propiedad que se va a recibir en el componente
        */}

        {/**
           *
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

           *
           *
           *
           */}
        {/*Compooun Component Pattern    */}
        {/*Aqui resive todos los elementos del padre al hijo */}
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              className='bg-dark text-white'
              product={product}
              value={shoppingCart[product.id]?.count || 0}
              //Object (shoppingCart)[product.id]?.count
              onChange={onProductCountChange}  //esto es opcional si se quiere que el contador se actualice en tiempo real

            >

              <ProductImage className='custom-image'
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                }}
              />
              <ProductTitle title={product.title} className='text-bold' />
              <ProductButtons
                className='custom-buttons' />

            </ProductCard>


          ))

        }


      </div>



      <div className='shopping-cart'>



        <div>{


          Object.values(shoppingCart).map((product) => (
            <ProductCard
              key={product.id}
              className='bg-dark text-white'
              product={product}
              value={product.count}
              onChange={onProductCountChange}
              style={{
                width: '100px',
              }}
            // onChange= { ()=> onProductCountChange() }
            >

              <ProductImage
                className='custom-image'
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                  height: '100px',
                }}
              />
              <ProductTitle title={`${product.count}`} />
              {/**   <ProductTitle className='text-bold' /> */}
              <ProductButtons
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
                className='custom-buttons' />

            </ProductCard>


          ))





        }</div>

      </div>




      {/*  // ? forma de  de importar las imagen desde el archivo en wepack *
              <img src={ NoImg } alt='failed img' width='300px' height='300px' />
               <img src='/coffee-mug.png' alt='coffee mug' width='300px' height='300px' />
          */}


      <div>
        <code>

        </code>
      </div>
    </div>



  )
}

