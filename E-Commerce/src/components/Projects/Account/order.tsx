import React from "react"
import { orderData } from "../../Data/order_data"
import AccountProfile from "./account_profile"
const OrderHistory = () => {
  const RenderOrder = orderData.map((order) => {
    return (
      <>
        <div className="d-md-flex justify-content-between border-bottom py-2 d-none d-md-block">
          <span className="h6">{order.number_id}</span>
          <span className="h6">{order.dates}</span>
          <span className="h6">{order.status}</span>
          <span className="h6">{order.price}</span>
        </div>
        <div className="d-sm-block d-md-none border-bottom">
          <div className="d-flex justify-content-between">
            <span className="h6 text-seconday fw-bold">Number ID</span>
            <span className="h6">{order.number_id}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="h6 text-seconday fw-bold">Dates</span>
            <span className="h6">{order.dates}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="h6 text-seconday fw-bold">Status</span>
            <span className="h6">{order.dates}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="h6 text-seconday fw-bold">Price</span>
            <span className="h6">{order.dates}</span>
          </div>
        </div>
      </>
    )
  })
  return (
    <React.Fragment>
      <div>
        <section className="container p-4">
          <div className="row d-flex gap-5">
            <span className="h1 fw-bold text-center">My Account</span>
            <div className="col-md-4 col-sm-12">
              <AccountProfile />
            </div>
            <div className="col d-flex gap-4 flex-column pt-4">
              <span className="h4 fw-bold">Orders History</span>
              <div className="d-md-flex justify-content-between border-bottom d-none d-md-block">
                <span className="h6 text-secondary fw-bold">Number ID</span>
                <span className="h6 text-secondary fw-bold">Dates</span>
                <span className="h6 text-secondary fw-bold">Status</span>
                <span className="h6 text-secondary fw-bold">Price</span>
              </div>
              {RenderOrder}
            </div>
          </div>
        </section>

      </div>
    </React.Fragment>)
}

export default OrderHistory