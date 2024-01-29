import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/privateRoutes";
import SignUp from "./components/Page_Content/Form/SignUp";
import { AuthProvider } from "./utils/AuthContext";
import ShopCategory from "./components/Page_Content/ShopCategory/ShopCategory";
import ArticleDetails from "./components/Page_Content/ArticleCard/ArticlePage";
import HomePage from "./pages/Home/home";
import ProductPage from "./pages/Product/product";
import BlogPage from "./pages/Blog/blog";
import ContactPage from "./pages/Contact/contact";
import CartPage from "./pages/Cart/cart";
import AccountPage from "./pages/Account/account";
import Layout from "./components/Page_Content/Layout/layout";
import CheckOut from "./components/Page_Content/Cart/CheckOut";
import ShopPage from "./pages/Shop/shop";
import SignIn from "./components/Page_Content/Form/SignIN";
function App() {

  // useEffect(() => {
  //   const preventBack = () => {
  //     window.history.forward();
  //   };

  //   const handleUnload = () => {
  //     // Additional cleanup if needed
  //   };

  //   // Add event listeners
  //   window.addEventListener('popstate', preventBack);
  //   window.addEventListener('beforeunload', handleUnload);

  //   // Clean up event listeners on component unmount
  //   return () => {
  //     window.removeEventListener('popstate', preventBack);
  //     window.removeEventListener('beforeunload', handleUnload);
  //   };
  // }, []);


  return (
      <AuthProvider>
        <Routes>
          <Route index element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Layout/>}>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/shop" element={<ShopPage/>} />

              <Route path="/allrooms" element={<ShopCategory category="" />} />
              <Route
                path="/livingroom"
                element={<ShopCategory category="Livingroom" />}
              />
              <Route
                path="/bedroom"
                element={<ShopCategory category="Bedroom" />}
              />
              <Route
                path="/kitchen"
                element={<ShopCategory category="Kitchen" />}
              />
              <Route
                path="/bathroom"
                element={<ShopCategory category="Bathroom" />}
              />
              <Route
                path="/dinning"
                element={<ShopCategory category="Dinning" />}
              />
              <Route
                path="/outdoor"
                element={<ShopCategory category="Outdoor" />}
              />
              <Route path="/product" element={<ProductPage/>}>
                <Route path=":productId" element={<ProductPage />} />
              </Route>
              <Route path="/blog" element={<BlogPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/user" element={<AccountPage/>}>
                <Route path=":activepage" element={<AccountPage />} />
              </Route>
              <Route path="/checkout" element={<CheckOut/>} />
              <Route path="/cart" element={<CartPage/>}>
                <Route path=":currentpage" element={<CartPage />} />
              </Route>
              <Route path="/article" element={<ArticleDetails />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
  );
}

export default App;
