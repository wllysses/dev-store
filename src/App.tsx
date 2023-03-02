import { ToastContainer } from 'react-toastify'
import { ShoppingCartProvider } from './contexts/ShoppingCart'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <ShoppingCartProvider>
      <ToastContainer />
      <GlobalStyle />
      <AppRoutes />
    </ShoppingCartProvider>
  )
}

export default App