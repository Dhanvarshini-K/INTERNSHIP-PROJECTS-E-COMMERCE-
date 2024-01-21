import {
  cart_one_dark,
  cart_two_light,
  cart_three_light,
} from "../../../assets/resources/icons";
import { Link } from "react-router-dom";
import "../../Page_Content/Cart/cart_header.scss"
const CartHeader = () => {
  return (
    <section className="d-flex flex-column gap-3">
      <span className="h1 fw-bold text-center">Cart</span>
      <div className="cart_header d-flex justify-content-md-center gap-5">
        <div className="d-flex gap-2 align-items-center ps-3">
          <img src={cart_one_dark} alt="cart_one_dark" className="cart_image" />
          <Link to="/cart" className="text-decoration-none text-dark h5">
            Shopping cart
          </Link>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <img
            src={cart_two_light}
            alt="cart_two_light"
            className="cart_image"
          />
          <Link to="/checkout" className="text-decoration-none text-dark h5">
            Check Out
          </Link>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <img
            src={cart_three_light}
            alt="cart_three_light"
            className="cart_image"
          />
          <Link to="#" className="text-decoration-none text-dark h5">
            Order complete
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartHeader;
