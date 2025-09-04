import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-around items-center w-full h-20 shadow-xl'>
      <NavLink to="/" > Tienda Deportiva </NavLink>
      <nav className='flex justify-around w-70 h-full items-center'>
        <NavLink to="/" > Dashboard </NavLink>
        <NavLink to="/productos" > Productos </NavLink>
        <NavLink to="/carrito" > Carrito </NavLink>
      </nav>


    </header>
  )
}

export default Header
