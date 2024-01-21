import { createContext, ReactNode, useState } from "react";
import { productList } from "../../Functionality_Data/all_product_card";

interface ShopContextValue {
  productList: any[]; // Replace 'any' with the actual type of your productList
  cartItems: { [itemId: number]: number };
  wishListItems: { [itemId: number]: boolean };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  addToWishList: (itemId: number) => void;
  removeFromWishList: (itemId: number) => void;
  getTotalCartItems: { (itemId: number): number };
  getTotalCartAmount: () => number;
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
  getTotalCartAmount: () => 0,
});

const getDefaultCart = () => {
  let cart: { [itemId: number]: number } = {};
  for (let index = 0; index < productList.length + 1; index++) {
    cart[index] = 0;
  }
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

  console.log(cartItems);

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

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let itemInfo = productList.find((product)=> product.id === Number(item));
        if (itemInfo && typeof itemInfo.actual_price === 'number' && typeof cartItems[item] === 'number') {
          totalAmount += itemInfo.actual_price * cartItems[item];
        }
        
      }
      return totalAmount;
    }
  }



  const contextValue = {
    productList,
    cartItems,
    wishListItems,
    addToCart,
    removeFromCart,
    addToWishList,
    removeFromWishList,
    getTotalCartItems,
    getTotalCartAmount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
