
import './App.css'
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoutes from './utils/privateRoutes';
import HomePage from "./pages/Home/home";
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
import Checkout from './components/Page_Content/Cart/checkout';
import ShopCategory from './components/Page_Content/ShopCategory/shop_category';
import ShopPage from './pages/Shop/shop';


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
                <Route path='/shop' element={<ShopPage/>}/>
                <Route path='/allrooms' element={<ShopCategory category=''/>}/>
                <Route path='/livingroom' element={<ShopCategory category="Livingroom"/>} />
                <Route path='/bedroom' element={<ShopCategory category="Bedroom"/>}/>
                <Route path='/kitchen' element={<ShopCategory category='Kitchen'/>}/>
                <Route path='/bathroom' element={<ShopCategory category="Bathroom"/>}/>
                <Route path='/dinning' element={<ShopCategory category="Dinning"/>}/>
                <Route path='/outdoor' element={<ShopCategory category="Outdoor"/>}/>
                <Route path="/product" element={<ProductPage />}>
                  <Route path=':productId' element={<ProductPage/>}/>
                </Route>
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/account' element={<AccountPage />} />
                <Route path='/address' element={<Address />} />
                <Route path='/order' element={<OrderHistory />} />
                <Route path='/checkout' element={<Checkout/>}/>
              </Route>
              </Route>
          </Routes>
          </AuthProvider>
      {/* </Router> */}
    </>
  )
}

export default App
