import products from '../services/products.json'

export function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10 text-center">Catálogo de Productos</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((producto) => (
          <div key={producto.id} className="w-100 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">

            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <p className="text-gray-600 mt-2"> Precio: <span className="font-bold">${producto.precio}</span> </p>

              <button className="mt-4 w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-300 transition">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}