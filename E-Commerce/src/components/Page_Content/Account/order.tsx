// import React from "react";
// import { OrderData } from "../../Functionality_Data/Order_data";
// const OrderHistory = () => {
//   const renderOrder = OrderData.map((Order) => {
//     return (
//       <>
//         <div className="d-md-flex justify-content-between bOrder-bottom py-2 d-none d-md-block">
//           <span className="h6">{Order.number_id}</span>
//           <span className="h6">{Order.dates}</span>
//           <span className="h6">{Order.status}</span>
//           <span className="h6">{Order.price}</span>
//         </div>
//         <div className="d-sm-block d-md-none bOrder-bottom">
//           <div className="d-flex justify-content-between">
//             <span className="h6 text-seconday fw-bold">Number ID</span>
//             <span className="h6">{Order.number_id}</span>
//           </div>
//           <div className="d-flex justify-content-between">
//             <span className="h6 text-seconday fw-bold">Dates</span>
//             <span className="h6">{Order.dates}</span>
//           </div>
//           <div className="d-flex justify-content-between">
//             <span className="h6 text-seconday fw-bold">Status</span>
//             <span className="h6">{Order.dates}</span>
//           </div>
//           <div className="d-flex justify-content-between">
//             <span className="h6 text-seconday fw-bold">Price</span>
//             <span className="h6">{Order.dates}</span>
//           </div>
//         </div>
//       </>
//     );
//   });
//   return (
//     <React.Fragment>
//       <div>

//             <div className="col d-flex gap-4 flex-column pt-4">
//               <span className="h4 fw-bold">Orders History</span>
//               <div className="d-md-flex justify-content-between bOrder-bottom d-none d-md-block">
//                 <span className="h6 text-secondary fw-bold">Number ID</span>
//                 <span className="h6 text-secondary fw-bold">Dates</span>
//                 <span className="h6 text-secondary fw-bold">Status</span>
//                 <span className="h6 text-secondary fw-bold">Price</span>
//               </div>
//               {renderOrder}
//             </div>
//           </div>

//     </React.Fragment>
//   );
// };

// export default OrderHistory;

import React from "react";
import { orderData } from "../../Functionality_Data/order_data";

const OrderHistory = () => {
  return (
    <table className=" d-flex gap-3 flex-column mt-4">
       <span className="h4 fw-bold">Order History</span>
      <tr className="d-flex justify-content-between border-bottom">
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
      {orderData.map((order) =>{
        return(
          <tr className="d-flex justify-content-between">
            <td>
            <span className="h6">{order.number_id}</span>
            </td>
            <td>
              <span className="h6">{order.dates}</span>
            </td>
            <td>
              <span className="h6">{order.status}</span>
            </td>
            <td>
              <span className="h6">{order.price}</span>
            </td>
          </tr>
        )
      })}
    </table>
  );
};

export default OrderHistory;
