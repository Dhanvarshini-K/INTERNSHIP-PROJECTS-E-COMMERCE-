import React, { useContext, useReducer, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { remove, ticket_percent_light } from "../../../assets/resources/icons";
import "../../Page_Content/Cart/ShoppingCart.scss";
import { Link } from "react-router-dom";
import AddToCartItems from "../../Common_Functionality/AddToCartItems/AddToCartItems";

const ShoppingCart = () => {
  const {
    getTotalCartAmount,
    cartItems,
    productList,
    applyCoupon,
  } = useContext(ShopContext);

  const [selectedShippingCost, setSelectedShippingCost] = useState(0);
  const [getCoupon, setGetCoupon] = useState("");

  const handleShippingOptionChange = (shippingCost: number) => {
    setSelectedShippingCost(shippingCost);
  };
  const handleApplyCoupon = () => {
    applyCoupon(getCoupon);
  };
  return (
    <>
      <section className="container mt-5 px-4">
        <div className="row d-flex gap-3">
          <table className="col">
            <tr className="border-bottom-md border-dark">
              <th className="h5 fw-bold">Product</th>
                <th className="heading h5 fw-bold">Quantity</th>
                <th className="heading h5 fw-bold">Price</th>
                <th className="heading h5 fw-bold">Subtotal</th>
            </tr>
            <AddToCartItems />

            <div className="d-flex flex-column gap-2 pt-5 ">
              <span className="h5 fw-bold">Have a Coupon?</span>
              <span className="text-secondary h6">
                Add your code for an instant cart discount
              </span>
              <div className="apply_coupon d-flex border border-secondary p-2  px-3 justify-content-between flex-wrap ">
                <div className="d-flex gap-2 align-items-start">
                  <img src={ticket_percent_light} alt="ticket_percent_light" />
                  <input
                    className="coupon_input text-secondary h5 border-0  "
                    placeholder="Coupon Code"
                    // value={couponCode}
                    onChange={(e) => setGetCoupon(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className="border-0 bg-transparent h5 fw-bold"
                    onClick={() => handleApplyCoupon(getCoupon)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </table>

          <div className="col cart_summary border border-dark rounded mt-4 py-4 d-flex  gap-3 p-2  flex-column">
            <span className="h4 fw-bold">Cart Summary</span>
            <div className="border border-dark d-flex justify-content-between align-items-center p-2">
              <div className="d-flex gap-2 align-items-start">
                <input
                  type="radio"
                  name="anyone"
                  onChange={() => handleShippingOptionChange(0)}
                />
                <label className="h6 fw-bold">Free shipping</label>
              </div>
              <span className="h5">$0.00</span>
            </div>
            <div className="border border-dark d-flex justify-content-between align-items-center p-2">
              <div className="d-flex gap-2 align-items-start">
                <input
                  type="radio"
                  name="anyone"
                  onChange={() => handleShippingOptionChange(15.0)}
                />
                <label className="h6 fw-bold">Express shipping</label>
              </div>
              <span className="h5">+$15.00</span>
            </div>
            <div className="border border-dark d-flex justify-content-between align-items-center p-2">
              <div className="d-flex gap-2 align-items-start">
                <input
                  type="radio"
                  name="anyone"
                  onChange={() => handleShippingOptionChange(21 / 100)}
                />
                <label className="h6 fw-bold">Pick Up</label>
              </div>
              <span className="h5">%21.00</span>
            </div>

            <div className="border-bottom d-flex justify-content-between">
              <span className="h5">Subtotal </span>
              <span className="h5">
                $
                {`${getTotalCartAmount(
                  cartItems,
                  productList,
                  selectedShippingCost
                )}`}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="h5 fw-bold">Total </span>
              <span className="h5 fw-bold">
                ${" "}
                {`${getTotalCartAmount(
                  cartItems,
                  productList,
                  selectedShippingCost
                )}`}
              </span>
            </div>
            <Link to="/cart/checkout">
              <button className="bg-dark text-white border-0 rounded p-2 w-100">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;