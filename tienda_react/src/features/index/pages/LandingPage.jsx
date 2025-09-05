import { NavLink } from "react-router-dom";
import products from "../../products/services/products.json";

function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center">

      <section className="bg-[#1B1718] text-white w-full py-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenido a <span className="text-red-400">Tienda Deportiva</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Tu lugar de confianza para encontrar los mejores{" "}
          <span className="font-semibold">productos tecnológicos</span> que harán
          tu vida más fácil y productiva.
        </p>

        <NavLink to="/productos" className="bg-red-400 text-white px-6 py-3 rounded-lg hover:bg-red-300 hover:text-black transition" >
          Ver Catálogo
        </NavLink>
      </section>

      <section className="py-16 px-6 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-10">Productos Destacados</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {products.slice(0, 3).map((producto) => (
            <div key={producto.id} className="w-72 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition" >
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {producto.descripcion.slice(0, 60)}...
                </p>
                <p className="text-gray-800 font-bold mt-2">
                  ${producto.precio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
