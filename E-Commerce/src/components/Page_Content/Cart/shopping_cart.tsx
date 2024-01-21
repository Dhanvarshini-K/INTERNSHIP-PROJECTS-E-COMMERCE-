import React, { useContext, useReducer } from "react";
import { ShopContext } from "../Context/shopContext";
import { remove ,ticket_percent_light} from "../../../assets/resources/icons";
import "../../Page_Content/Cart/shopping_cart.scss";

const ShoppingCart = () => {
  const { productList, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <section className="container mt-5">
      <div className="row d-flex gap-4">
        <table className="col col-lg-7">
          <tr className="border-bottom">
            <th className="py-5 ">Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
          {productList.map((cart) => {
            const quantity = cartItems[cart.id];
            const initialState = { count: quantity };

            function reducer(state, action) {
              switch (action.type) {
                case "increment":
                  return { count: state.count + 1 };
                case "decrement":
                  return { count: state.count - 1 };
                case "reset":
                  return { count: (state.count = 0) };
                default:
                  return { count: state.count };
              }
            }
            const [state, dispatch] = useReducer(reducer, initialState);
            const subtotal = (cart.actual_price * state.count).toFixed(2);

            if (quantity > 0) {
              return (
                <tr>
                  <td className="d-flex pt-4 gap-3">
                    <div>
                      <img
                        src={cart.image}
                        alt="cart_image"
                        className="shopping_cart_image"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span className="h5 fw-bold">{cart.product_title}</span>
                      <span className="h5">{cart.color}</span>
                      <div className="d-flex gap-2 align-items-start">
                        <img
                          src={remove}
                          onClick={() => {
                            removeFromCart(cart.id);
                          }}
                          alt="remove_icon"
                        />
                        <span className="h5">Remove</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="quantity_button border-1 border-dark border rounded  p-1 d-flex gap-3 ">
                      <button
                        className="border-0 bg-transparent"
                        onClick={() => dispatch({ type: "increment" })}
                      >
                        +
                      </button>
                      <span>
                        {state.count === 0
                          ? removeFromCart(cart.id)
                          : state.count}
                      </span>
                      <button
                        className="border-0 bg-transparent"
                        onClick={() => dispatch({ type: "decrement" })}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td>
                    <span className="h5">${cart.actual_price}</span>
                  </td>
                  <td>
                    <span className="h5">${subtotal}</span>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </table>
        <div className="col col-lg-4 border border-dark rounded mt-4 py-4 d-flex flex-column gap-3">
          <span className="h5 fw-bold">Order Summary</span>
          <div className="border border-dark d-flex justify-content-between align-items-center p-2">
          <div className="d-flex gap-2 align-items-start">
            <input type="radio" name="anyone"/>
            <label className="h6 fw-bold">Free shipping</label>
          </div>
          <span className="h5">$0.00</span>
          </div>
          <div className="border border-dark d-flex justify-content-between align-items-center p-2">
          <div className="d-flex gap-2 align-items-start">
            <input type="radio"  name="anyone"/>
            <label className="h6 fw-bold">Express shipping</label>
          </div>
          <span className="h5">+$15.00</span>
          </div>
          <div className="border border-dark d-flex justify-content-between align-items-center p-2">
          <div className="d-flex gap-2 align-items-start">
            <input type="radio"  name="anyone"/>
            <label className="h6 fw-bold">  Pick Up</label>
          </div>
          <span className="h5">%21.00</span>
          </div>
          <div className="border-bottom d-flex justify-content-between">
            <span className="h5">Subtotal </span>
            <span className="h5">${getTotalCartAmount()}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="h5 fw-bold">Total </span>
            <span className="h5 fw-bold">${getTotalCartAmount()}</span>
          </div>
          <button className="bg-dark text-white border-0 rounded p-2">Checkout</button>
        </div>
      </div>
          <div className="d-flex flex-column gap-2">
            <span className="h5 fw-bold">Have a Coupon?</span>
            <span className="text-secondary h6">Add your code for an instant cart discount</span>
            <div className="d-flex border border=secondary p-2 w-50 justify-content-between">
              <div className="d-flex gap-2 align-items-start">
                <img src={ticket_percent_light} alt="ticket_percent_light" />
                <span className="text-secondary h5">Coupon code</span>
              </div>
              <span className="h5 fw-bold">Apply</span>
            </div>
          </div>
    </section>
  );
};

export default ShoppingCart;
