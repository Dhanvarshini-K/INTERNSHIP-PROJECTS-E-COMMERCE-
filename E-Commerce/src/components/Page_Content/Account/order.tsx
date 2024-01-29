
import { orderData } from "../../Functionality_Data/OrderData";

const OrderHistory = () => {
  return (
    <>
      <table className=" d-flex gap-3 flex-column mt-4 flex-wrap">
        <span className="h4 fw-bold">Order History</span>
        <tr className="d-md-flex justify-content-between border-bottom d-none d-md-block">
          <th className="pb-4">
            <span className="h6 text-secondary fw-bold">Number ID</span>
          </th>
          <th>
            <span className="h6 text-secondary fw-bold">Dates</span>
          </th>
          <th>
            <span className="h6 text-secondary fw-bold">Status</span>
          </th>
          <th>
            <span className="h6 text-secondary fw-bold">Price</span>
          </th>
        </tr>
        {orderData.map((order) => {
          return (
            <>
              <tr className="d-flex justify-content-between">
                <td className="d-none d-md-block">
                  <span className="h6">{order.number_id}</span>
                </td>
                <td className="d-none d-md-block">
                  <span className="h6">{order.dates}</span>
                </td>
                <td className="d-none d-md-block">
                  <span className="h6">{order.status}</span>
                </td>
                <td className="d-none d-md-block">
                  <span className="h6">{order.price}</span>
                </td>
              </tr>
              <div className="d-sm-block d-md-none border-bottom px-4">
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
          );
        })}
      </table>
    </>
  );
};

export default OrderHistory;
