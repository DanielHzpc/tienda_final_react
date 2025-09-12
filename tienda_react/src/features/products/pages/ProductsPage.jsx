import { useEffect, useState } from 'react';
import {getProducts} from '../services/products'
import {useCart} from '../../cart/context/CartContext'

export function ProductsPage() {
  const [productos , setProductos] = useState([])
  const [load, setLoad] = useState(true)
  const {addToCart} = useCart()

  useEffect( () => {
    async function cargarProducts() {
      try {
        setLoad(true);
        const res = await getProducts();
        setProductos(res.data);
      } catch (error) {
        console.error("Error cargando productos", error);
      } finally {
        setLoad(false);
      }
    }


    cargarProducts()
  }, [] )

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10 text-center">Catálogo de Productos</h1>

      {load ? (
        <p className="text-center text-lg font-semibold">Cargando productos...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="w-100 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={producto.image}
                alt={producto.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{producto.title}</h2>
                <p className="text-gray-600 mt-2">
                  Precio: <span className="font-bold">${producto.price}</span> - Categoría:{" "}
                  <span className="font-bold">{producto.category}</span>
                </p>

                <button className="mt-4 w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-300 transition" 
                onClick={() => addToCart(producto)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}