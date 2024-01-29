import { useParams } from "react-router-dom";
import CartHeader from "../../components/Page_Content/Cart/CartHeader";
import ShoppingCart from "../../components/Page_Content/Cart/ShoppingCart";
import "../../pages/Cart/Cart.scss";
import OrderComplete from "../../components/Page_Content/Cart/OrderComplete";
import CheckOut from "../../components/Page_Content/Cart/CheckOut";
const CartPage = () => {
  const { currentpage } = useParams();

  return (
    <section className="cart_container">
      <div className="">
        <CartHeader currentpage={currentpage} />
      </div>
      <div className="d-flex justify-content-center ">
        {currentpage === "shoppingcart" && <ShoppingCart />}
        { currentpage === "checkout" && <CheckOut/>}
        {currentpage === "ordercomplete" && <OrderComplete />}
      </div>
    </section>
  );
};

export default CartPage;
