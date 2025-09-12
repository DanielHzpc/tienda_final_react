import { useCart } from "../context/CartContext";

export function CartPage() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="flex flex-col items-center w-[60%] py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Carrito de Compras
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-6 w-[90%] md:w-[60%]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">El carrito está vacío.</p>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-500">Cantidad: {item.quantity}</p>
                  </div>
                  <span className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="ml-4 text-red-500 hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total</h3>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-red-400 text-white py-3 rounded-lg font-semibold hover:bg-red-300 hover:text-black transition">
              Proceder al Pago
            </button>
          </>
        )}
      </div>
    </div>
  );
}
