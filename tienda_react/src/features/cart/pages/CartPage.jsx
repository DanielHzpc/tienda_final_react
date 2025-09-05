export function CartPage() {
  return (
    <div className="flex flex-col items-center w-[60%] py-10">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Carrito de Compras
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-6 w-[90%] md:w-[60%]">

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 border-b pb-4">
            <img
              src="https://m.media-amazon.com/images/I/71cngLX2xuL._AC_SL1500_.jpg"
              alt="Teclado Mecánico"
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                Teclado Mecánico Redragon K552
              </h2>
              <p className="text-gray-500">Cantidad: 1</p>
            </div>
            <span className="text-lg font-bold">$45.99</span>
          </div>

          <div className="flex items-center gap-4 border-b pb-4">
            <img
              src="https://m.media-amazon.com/images/I/71O-02eW61L.jpg"
              alt="Silla Ergonómica"
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                Silla Ergonómica para Escritorio
              </h2>
              <p className="text-gray-500">Cantidad: 1</p>
            </div>
            <span className="text-lg font-bold">$129.99</span>
          </div>
        </div>

        {/* Resumen */}
        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total</h3>
          <span className="text-2xl font-bold">$175.98</span>
        </div>

        {/* Botón */}
        <button className="mt-6 w-full bg-red-400 text-white py-3 rounded-lg font-semibold hover:bg-red-300 hover:text-black transition">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
}