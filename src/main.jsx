import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import ErrorPage from './Pages/error.jsx'
import RegisterPage from './Pages/register.jsx'
import ProductPage from './Pages/product.jsx'
import ProfilePage from './Pages/profile.jsx'
import DetailProductPage from './Pages/detailedProduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Navbar from './component/Layout/Navbar.jsx'
import { TotalPriceProvider } from './context/TotalPriceContext.jsx'
import DarkModeContextProvider from './context/DarkMode'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <div>hello world</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/product",
    element: <ProductPage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "/product/:id",
    element: <DetailProductPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
           <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>,
)
