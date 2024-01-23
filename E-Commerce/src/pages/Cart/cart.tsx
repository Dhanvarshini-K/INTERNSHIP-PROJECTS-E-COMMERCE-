import { useParams } from "react-router-dom";
import CartHeader from "../../components/Page_Content/Cart/cart_header";
import Checkout from "../../components/Page_Content/Cart/checkout";
import ShoppingCart from "../../components/Page_Content/Cart/shopping_cart";
import "../../pages/Cart/cart.scss";

const CartPage = () => {
  const { currentpage } = useParams();

  return (
 
    <section className="cart_container">
      <div>
        <CartHeader currentpage = {currentpage} />
      </div>
      <div>
        {currentpage === "shoppingcart" && <ShoppingCart />}
        {currentpage === "checkout" && <Checkout />}
      </div>
  </section>
  );
};

export default CartPage;
