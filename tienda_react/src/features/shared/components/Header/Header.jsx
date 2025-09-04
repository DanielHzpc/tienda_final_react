import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-[#1B1718] flex flex-col items-center justify-around w-full h-32 shadow-lg py-4">
      <div className="w-[70vw] flex items-center justify-between gap-6">
        <input
          type="text"
          className="p-2 rounded-md border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-red-400 w-[20rem]"
          placeholder="Buscar"
        />
        <NavLink
          to="/"
          className="text-red-400 text-2xl font-semibold hover:text-red-500 transition-colors"
        >
          Tienda Deportiva
        </NavLink>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className="text-white text-lg hover:text-red-400 transition-colors"
          >
            E
          </NavLink>
          <NavLink
            to="/"
            className="text-white text-lg hover:text-red-400 transition-colors"
          >
            E
          </NavLink>
        </div>
      </div>

      <nav className="flex justify-center gap-10 mt-4 w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md transition-colors ${
              isActive ? 'bg-red-400 text-black' : 'hover:bg-red-300 hover:text-black'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md transition-colors ${
              isActive ? 'bg-red-400 text-black' : 'hover:bg-red-300 hover:text-black'
            }`
          }
        >
          Productos
        </NavLink>
        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md transition-colors ${
              isActive ? 'bg-red-400 text-black' : 'hover:bg-red-300 hover:text-black'
            }`
          }
        >
          Carrito
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
