import React, { useContext } from "react";
import { remove } from "../../../assets/resources/icons";
import "../../Page_Content/Account/wishlist.scss";
import { ShopContext } from "../Context/shopContext";

const WishList = () => {
  const { productList, wishListItems, removeFromWishList,addToCart } =
    useContext(ShopContext);

  return (
    <div className="col d-flex gap-4 flex-column pt-4">
      <span className="h4 fw-bold">Your Wishlist</span>
      <table>
        <tr className="border-bottom ">
          <th className="py-3">Product</th>
          <th>Price</th>
          <th>Action</th>
        </tr>

        {productList.map((WishList) => {
          if (wishListItems[WishList.id]) {
            return (
              <tr>
                <td className="py-3 d-flex gap-2">
                  <img src={remove} alt="remove" onClick={()=>removeFromWishList(WishList.id)} />
                  <img
                    src={WishList.image}
                    alt="wishlist_image"
                    className="wishlist_image"
                  />
                  <div className="d-flex flex-column justify-content-center">
                  <span className="h5 fw-bold">{WishList.product_title}</span>
                  <span className="h5">{WishList.color}</span>
                  </div>
                </td>
                <td>
                  <span className="h5">{WishList.actual_price}</span>
                </td>
                <td>
                  <button className="border-0 p-2 bg-dark text-white rounded" onClick={()=>addToCart(WishList.id)}>Add to Cart</button>
                </td>
              </tr>
            );
          }
          return null;
        })}
      </table>
    </div>
  );
};

export default WishList;
