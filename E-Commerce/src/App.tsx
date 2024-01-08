
import './App.css'
import { Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from './utils/privateRoutes';
import HomePage from "./pages/Home/home";
import ShopPage from "./pages/Shop/shop";
import ProductPage from "./pages/Product/product";
import BlogPage from "./pages/Blog/blog";
import ContactPage from "./pages/Contact/contact";
import CartPage from './pages/Cart/cart';
import AccountPage from './pages/Account/account';
import Address from './components/Page_Content/Account/address';
import SignUp from './components/Page_Content/Form/sign_up';
import Layout from './components/Page_Content/Layout/layout';
import SignIn from './components/Page_Content/Form/sign_in';
import OrderHistory from './components/Page_Content/Account/order';
import { AuthProvider } from './utils/AuthContext';

function App() {

  return (
    <>
      {/* <Router> */}
        <AuthProvider>
          <Routes>
            <Route index element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<PrivateRoutes/>}>
              <Route path="/" element={<Layout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/account' element={<AccountPage />} />
                <Route path='/address' element={<Address />} />
                <Route path='/order' element={<OrderHistory />} />
              </Route>
              </Route>
          </Routes>
          </AuthProvider>
      {/* </Router> */}
    </>
  )
}

export default App
