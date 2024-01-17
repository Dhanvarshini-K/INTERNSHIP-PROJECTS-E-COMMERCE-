import { cartItems } from "../../Functionality_Data/Cart_item"
import "../Cart/cart_page.scss"
import CartHeader from "./cart_header"

const CartMain = () => {
  const RenderCart = cartItems.map((cartItem) => {
    return (
      <section className="d-flex">
        <div className="d-flex p-2 gap-4">
          <img src={cartItem.image} alt="cart_product_image" />
          <div className="d-flex gap-2">
            <div className="d-flex flex-md-column">
              <span className="h6 fw-bold">{cartItem.title}</span>
              <p>color : {cartItem.color}</p>

              <div>
                <img src={cartItem.icon} alt="remove_icon" />
                <span className="h6 text-secondary fw-bold">{cartItem.delete}</span>
              </div>
            </div>
            <div className="input-group  d-flex align-items-center">
              <button className="quantity_button border-0 rounded">
                <input type="button" value="-" className="button-minus border-0 rounded  icon-shape " data-field="quantity" />
                <input type="text" step="1" max="10" value="1" name="quantity" className="quantity-field border-0 text-center w-25" />
                <input type="button" value="+" className="button-plus border-0 rounded icon-shape icon-sm lh-0" data-field="quantity" />
              </button>
              <span className="h5">${cartItem.price}</span>
              <span className="h5">$ 38.00</span>

            </div>
          </div>
        </div>

      </section>
    )
  })
  return (
    <>
      <div>
        <CartHeader />
      </div>
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className=" cart_category  border-bottom border-dark p-2">
              <span className="h5 fw-bold">Product</span>
              <div className=" cart_prices d-lg-flex d-none d-md-none d-lg-block">
                <span className="h5 fw-bold">Quantity</span>
                <span className="h5 fw-bold">Price</span>
                <span className="h5 fw-bold">Subtotal</span>
              </div>
            </div>
            {RenderCart}

          </div>
          <div className="col border p-2">
            <span className="h5">Cart summary</span>
            <form>
              <div className="border d-flex justify-content-between align-items-start py-1 px-2">
                <div className=" cart_summary d-flex gap-2 align-items-center">
                  <input type="radio" />
                  <label>Free shipping</label>
                </div>
                  <span className="h5">$0.00</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartMain