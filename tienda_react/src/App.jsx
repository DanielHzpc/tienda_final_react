import './App.css';
import IndexPage from './features/index/pages/IndexPage' ;
import { CartProvider } from './features/cart/context/CartContext'

function App() {

  return (
    <CartProvider>
      <IndexPage />
    </CartProvider>
  )
}

export default App
