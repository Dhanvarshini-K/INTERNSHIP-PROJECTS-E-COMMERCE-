import { cartItem } from "../../Functionality_Data/Cart_item"
import "../Cart/cart_page.css"
import CartHeader from "./cart_header"

const CartMain = () => {
  const RenderCart = cartItem.map((cartitem) => {
    return (
      <section className="d-flex">
      <div className="d-flex p-2 gap-4">
        <img src={cartitem.image} alt="cart_product_image" />
        <div className="d-flex flex-column">
          <span className="h6 fw-bold">{cartitem.title}</span>
          <p>color : {cartitem.color}</p>

          <div>
            <img src={cartitem.icon} alt="remove_icon" />
            <span className="h6 text-secondary fw-bold">{cartitem.delete}</span>
          </div>
        </div>
      </div>
      <div>
        
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
          <div className="col-8">
            <div className="d-flex justify-content-between border-bottom border-dark p-2">
              <span className="h5 fw-bold">Product</span>
              <div className="d-flex gap-5">
                <span className="h5 fw-bold">Quantity</span>
                <span className="h5 fw-bold">Price</span>
                <span className="h5 fw-bold">Subtotal</span>
              </div>
            </div>
            {RenderCart}
            
          </div>
          <div className="col-4 border">
          <span className="h5">Cart summary</span>
          <button>
          </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartMain