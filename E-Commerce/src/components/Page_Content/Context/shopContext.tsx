import { createContext, ReactNode, useState } from "react";
import { productList } from "../../Functionality_Data/all_product_card";

interface ShopContextValue {
  productList: any[];
  cartItems: { [itemId: number]: number };
  wishListItems: { [itemId: number]: boolean };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  addToWishList: (itemId: number) => void;
  removeFromWishList: (itemId: number) => void;
  getTotalCartItems: () => number;
  getTotalCartAmount: (
    cartItems: object,
    productList: object,
    shippingCost: number
  ) => void;
  getTotalWishList: () => number;


}

export const ShopContext = createContext<ShopContextValue>({
  productList: [],
  cartItems: {},
  wishListItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  addToWishList: () => {},
  removeFromWishList: () => {},
  getTotalCartItems: () => 0,
  getTotalWishList: () => 0,
  getTotalCartAmount: () => {}
});

const getDefaultCart = () => {
  let cart: { [itemId: number]: number } = {};
  for (let index = 0; index < productList.length + 1; index++) {
    cart[index] = 0;
  }
  console.log(cart);

  return cart;
};

const getDefaultWishlist = () => {
  let wishlist: { [itemId: number]: boolean } = {};
  for (let index = 0; index < productList.length + 1; index++) {
    wishlist[index] = false;
  }
  return wishlist;
};

const ShopContextProvider = (props: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [wishListItems, setWishListItems] = useState(getDefaultWishlist);


  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  
  const addToWishList = (itemId: number) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishList = (itemId: number) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: false }));
  };



  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getTotalWishList = () => {
    let totalItems = 0;
    for (const itemId in wishListItems) {
      if (wishListItems[itemId]) {
        totalItems += 1;
      }
    }
    return totalItems;
  };

  const getTotalCartAmount = (cartItems, productList, shippingCost) => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const quantity = cartItems[itemId];
        console.log(cartItems);

        const itemInfo = productList.find(
          (product) => product.id === Number(itemId)
        );

        if (itemInfo) {
          totalAmount += Number(itemInfo.actual_price) * Number(quantity);
          console.log(Number(quantity));
        }
      }
    }

    return totalAmount + shippingCost;
  };

  const contextValue = {
    getTotalCartAmount,
    productList,
    cartItems,
    wishListItems,
    addToCart,
    removeFromCart,
    addToWishList,
    removeFromWishList,
    getTotalCartItems,
    getTotalWishList
 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
