
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/home";
import ShopPage from "./pages/Shop/shop";
import ProductPage from "./pages/Product/product";
import BlogPage from "./pages/Blog/blog";
import ContactPage from "./pages/Contact/contact";
import CartPage from './pages/Cart/cart';
import AccountPage from './pages/Account/account';
import Address from './components/Projects/Account/address';
import OrderHistory from './components/Projects/Account/order';
import SignIn from './components/Projects/Form/sign_in';
import Layout from './components/Projects/Layout/layout';
import SignUp from './components/Projects/Form/sign_up';

function App() {

  return (
    <>
    <Routes>
      <Route index path="/" element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/account' element={<AccountPage/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/order' element={<OrderHistory/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
