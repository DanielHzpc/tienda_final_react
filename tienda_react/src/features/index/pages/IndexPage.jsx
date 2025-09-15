import MainLayout from '../../shared/layouts/MainLayout'
import { CartPage } from '../../cart/pages/CartPage'
import ContactPage from '../../contact/pages/ContactPage'
import { ProductsPage } from '../../products/pages/ProductsPage'
import { Routes , Route } from 'react-router-dom'
import LandingPage from './LandingPage'


function IndexPage() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='productos' element={<ProductsPage />} />
        <Route path='carrito' element={<CartPage />} />
        <Route path='contactanos' element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default IndexPage