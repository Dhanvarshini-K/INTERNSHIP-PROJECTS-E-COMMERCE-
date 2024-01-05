
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/Form/sign_in";
import HomePage from "./pages/Home/home";
import Layout from "./components/Layout/layout";
import ShopPage from "./pages/Shop/shop";
import ProductPage from "./pages/Product/product";
import BlogPage from "./pages/Blog/blog";
import ContactPage from "./pages/Contact/contact";
import CartPage from './pages/Cart/cart';
import AccountPage from './pages/Account/account';
import Address from './components/Account/address';
import OrderHistory from './components/Account/order';
// import YourComponent from './components/Account/sample';

function App() {

  return (
    <>
    <Routes>
      <Route path="/signin" element={<SignIn/>}/>
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
          {/* <Route path="/sample" element={<YourComponent/>}/> */}
      </Route>
    </Routes>
    </>
  )
}

export default App
