import React, { useContext, useReducer } from "react";
import { ShopContext } from "../../Page_Content/Context/ShopContext";
import { remove } from "../../../assets/resources/icons";


const AddToCartItems = () => {
  const { productList,cartItems, removeFromCart } = useContext(ShopContext);
  return (
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
        const subtotal = (cart.actual_price * state.count).toFixed(2);

        if (quantity > 0) {
          return (
            <tr>
              <td className="d-flex pt-4 gap-3">
                <div>
                  <img
                    src={cart.image}
                    alt="cart_image"
                    className="shopping_cart_image imd-fluid"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <span className="h5 fw-bold">{cart.product_title}</span>
                  <span className="h5">{cart.color}</span>
                  <div className="quantity_button border-1 border-dark border rounded d-md-flex p-1 d-flex gap-3 d-md-none d-sm-block ">
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
                  <div className="d-flex gap-2 align-items-start d-none d-md-block">
                    <img
                      src={remove}
                      onClick={() => {
                        removeFromCart(cart.id);
                      }}
                      alt="remove_icon"
                    />
                    <span className="h5">Remove</span>
                  </div>
                  <div className="d-flex pt-3">
                    <span className="h5">${cart.actual_price}</span>
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
                </div>
              </td>
              <td>
                <div className="quantity_button border-1 border-dark border rounded d-md-flex p-1 d-flex gap-3 d-md-block d-none ">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => dispatch({ type: "increment" })}
                  >
                    +
                  </button>
                  <span>
                    {state.count === 0 ? removeFromCart(cart.id) : state.count}
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
                <span className="h5 d-md-block d-none">${cart.actual_price}</span>
              </td>
              <td>
                <span className="h5 d-md-block d-none">${subtotal}</span>
              </td>
            </tr>
          );
        }
        return null;
      })}
    </>
  );
};

export default AddToCartItems;
