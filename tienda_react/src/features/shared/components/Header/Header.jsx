import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-[#1B1718] flex flex-col items-center w-full shadow-lg py-4">
      <div className="w-[80vw] flex items-center justify-between">

        <NavLink to="/" className="text-red-400 text-3xl font-extrabold tracking-wide hover:text-red-300 transition-colors text-center" >
          Tienda Deportiva
        </NavLink>

        <div className="w-64">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-full border border-gray-500 bg-[#2a2627] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Buscar productos..."
          />
        </div>

      </div>

      <nav className="flex justify-center gap-10 mt-4 w-full">
        <NavLink to="/" className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md transition-colors 
            ${ isActive ? 'bg-red-400 text-black' : 'hover:bg-red-300 hover:text-black'}`}> Inicio </NavLink>

        <NavLink to="/productos" className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md transition-colors 
            ${ isActive ? 'bg-red-400 text-black' : 'hover:bg-red-300 hover:text-black'}`}> Productos </NavLink>

        <NavLink to="/carrito" className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md transition-colors 
            ${ isActive ? 'bg-red-400 text-black' : 'hover:bg-red-300 hover:text-black'}`}> Carrito </NavLink>
      </nav>
    </header>
  )
}

export default Header
