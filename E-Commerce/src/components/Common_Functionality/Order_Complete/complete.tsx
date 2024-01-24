
import React, { useContext, useReducer } from "react";
import { ShopContext } from "../../Page_Content/Context/shopContext";
import "./complete.scss";
const CompletePage = () => {
  const { productList, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <section>
      <div className="d-flex row row-cols-sm-4 row-cols-md-5 pt-4 gap-5">
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
              <>
                <div className="col d-flex gap-3">
                  <div className="complete_product d-flex">
                    <img
                      src={cart.image}
                      alt="cart_image"
                      className="shopping_cart_image d-flex"
                    />
                    <div className="current_quantity">
                      <span className="product_quantity bg-dark rounded-circle text-white fw-medium  text-center d-flex justify-content-center align-items-center">
                        {state.count === 0
                          ? removeFromCart(cart.id)
                          : state.count}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          }
          return null;
        })}
      </div>
      <div className="p-3 ">
        <div className="order_details">
          <span className="h5 text-secondary fw-bold">Order Code:</span>
          <span className="h5 fw-bold">#0123_45678</span>
        </div>
        <div className="order_details">
          <span className="h5 fw-bold text-secondary">Date:</span>
          <span className="h5 fw-bold">{getCurrentDate()}</span>
        </div>
        <div className="order_details">
          <span className="h5 fw-bold text-secondary">Total:</span>
          <span className="h5 fw-bold">$ {`${getTotalCartAmount(cartItems,productList,0)}`}</span>
        </div>
        <div className="order_details">
          <span className="h5 fw-bold text-secondary">Payment Method:</span>
          <span className="h5 fw-bold"></span>
        </div>
      </div>
    </section>
  );
};

export default CompletePage;
