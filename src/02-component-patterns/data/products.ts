import { Product } from '../interfaces/interfaces';
const coffeImg = '/coffee-mug.png' // se crea una constante con la ruta de la imagen
const workCoffe = 'coffee-mug2.png' // se crea una constante con la ruta de la imagen


const product = {
id: '1',
title: 'Coffee Mug Especial Edition',
img: coffeImg

}

const product2 = {
id: '2',
title: 'Coffee Work special Edition',
img: workCoffe

}


//const products:Product[] = [product, product2]
export const products:Product[] = [product, product2] // se crea un arreglo con los productos