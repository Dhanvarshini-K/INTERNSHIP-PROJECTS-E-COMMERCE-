import React, { useContext, useReducer } from "react";
import { ShopContext } from "../../Page_Content/Context/ShopContext";
import { remove } from "../../../assets/resources/icons";

const OrderSummary = () => {
  const { productList, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="d-flex flex-column gap-5">
      <>
        {productList.map((cart) => {
          const quantity = cartItems[cart.id];
          const initialState = { count: quantity };

          function reducer(state: any, action: any) {
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

          if (quantity > 0) {
            return (
              <section className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2">
                      <img
                        src={cart.image}
                        alt="cart_image"
                        className="order_summary_image img-fluid"
                      />
                    <div className="d-flex flex-column justify-content-center">
                      <span className="fw-bold cart_title">{cart.product_title}</span>
                      <span className="h5">{cart.color}</span>
                      <div>
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
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <span className="h5 fw-bold">${cart.actual_price}</span>
                    <div className="d-flex gap-2 align-items-start d-md-none d-sm-block">
                    <img
                      src={remove}
                      onClick={() => {
                        removeFromCart(cart.id);
                      }}
                      alt="remove_icon"
                    />
                  </div>
                  </div>
              </section>
            );
          }
          return null;
        })}
      </>
    </div>
  );
};

export default OrderSummary;
