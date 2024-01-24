import { useParams } from "react-router-dom";
import CartHeader from "../../components/Page_Content/Cart/cart_header";
import Checkout from "../../components/Page_Content/Cart/checkout";
import ShoppingCart from "../../components/Page_Content/Cart/shopping_cart";
import "../../pages/Cart/cart.scss";
import OrderComplete from "../../components/Page_Content/Cart/order_complete";

const CartPage = () => {
  const { currentpage } = useParams();

  return (
 
    <section className="cart_container">
      <div className="">
        <CartHeader currentpage = {currentpage} />
      </div>
      <div className="d-flex justify-content-center ">
        {currentpage === "shoppingcart" && <ShoppingCart />}
        {currentpage === "checkout" && <Checkout />}
        {currentpage === "ordercomplete" && <OrderComplete/>}
      </div>
  </section>
  );
};

export default CartPage;
