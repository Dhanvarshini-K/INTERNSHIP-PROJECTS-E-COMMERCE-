// import { createContext, ReactNode, useState } from "react";
// import { productList } from "../../Functionality_Data/all_product_card";

// interface ShopContextValue {
//   productList: any[];
//   cartItems: { [itemId: number]: number };
//   wishListItems: { [itemId: number]: boolean };
//   addToCart: (itemId: number) => void;
//   removeFromCart: (itemId: number) => void;
//   addToWishList: (itemId: number) => void;
//   removeFromWishList: (itemId: number) => void;
//   getTotalCartItems: () => number;
//   getTotalCartAmount: (
//     cartItems: object,
//     productList: object,
//     shippingCost: number
//   ) => void;
//   getTotalWishList: () => number;
//   couponCode: string;
//   appliedCouponDiscount: number;
//   couponMessage: string;
//   applyCoupon: () => void;
// }

// export const ShopContext = createContext<ShopContextValue>({
//   productList: [],
//   cartItems: {},
//   wishListItems: {},
//   addToCart: () => {},
//   removeFromCart: () => {},
//   addToWishList: () => {},
//   removeFromWishList: () => {},
//   getTotalCartItems: () => 0,
//   getTotalWishList: () => 0,
//   getTotalCartAmount: () => {},
//   couponCode: '',
//   appliedCouponDiscount: 0,
//   couponMessage: '',
//   applyCoupon :()=>{}
  
// });

// const getDefaultCart = () => {
//   let cart: { [itemId: number]: number } = {};
//   for (let index = 0; index < productList.length + 1; index++) {
//     cart[index] = 0;
//   }
//   console.log(cart);

//   return cart;
// };

// const getDefaultWishlist = () => {
//   let wishlist: { [itemId: number]: boolean } = {};
//   for (let index = 0; index < productList.length + 1; index++) {
//     wishlist[index] = false;
//   }
//   return wishlist;
// };

// const ShopContextProvider = (props: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart);
//   const [wishListItems, setWishListItems] = useState(getDefaultWishlist);
//   const [couponCode, setCouponCode] = useState("");
//   const [appliedCouponDiscount, setAppliedCouponDiscount] = useState(0);
//   const [couponMessage, setCouponMessage] = useState("");

//   const addToCart = (itemId: number) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId: number) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const addToWishList = (itemId: number) => {
//     setWishListItems((prev) => ({ ...prev, [itemId]: true }));
//   };

//   const removeFromWishList = (itemId: number) => {
//     setWishListItems((prev) => ({ ...prev, [itemId]: false }));
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const getTotalWishList = () => {
//     let totalItems = 0;
//     for (const itemId in wishListItems) {
//       if (wishListItems[itemId]) {
//         totalItems += 1;
//       }
//     }
//     return totalItems;
//   };

//   const applyCoupon = (couponCodeFromUser:string) => {
//     // Implement your coupon validation logic here
//     // Replace the following line with your actual validation logic
//     setCouponCode(couponCodeFromUser);
//     if (couponCode === "SAVE20" ) {
//       setAppliedCouponDiscount(20); // Set the discount amount
//       setCouponMessage("Coupon applied successfully!");
//       console.log(appliedCouponDiscount, couponMessage, couponCode);
//     } 
//     else if (couponCode === "JenkateMW") {
//       setAppliedCouponDiscount(25); // Set the discount amount
//       setCouponMessage("Coupon applied successfully!");
//       console.log(appliedCouponDiscount, couponMessage, couponCode);
//     }
//     else if (couponCode === "BALA") {
//       setAppliedCouponDiscount(50); // Set the discount amount
//       setCouponMessage("Coupon applied successfully!");
//       console.log(appliedCouponDiscount, couponMessage, couponCode);
//     }  
//     else {
//       setAppliedCouponDiscount(0); // Reset the discount if the coupon is invalid
//       setCouponMessage("Invalid coupon code");
//     }
//     // setAppliedCouponDiscount(20); // Set the discount amount
//     return appliedCouponDiscount;
//   };


//   const getTotalCartAmount = (cartItems, productList, shippingCost) => {
//     let totalAmount = 0;

//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         const quantity = cartItems[itemId];
//         console.log(cartItems);

//         const itemInfo = productList.find(
//           (product) => product.id === Number(itemId)
//         );

//         if (itemInfo) {
//           totalAmount += Number(itemInfo.actual_price) * Number(quantity);
//           console.log(Number(itemInfo.actual_price));
//           console.log(Number(quantity));
//         }
//       }
//     }
//     totalAmount -= appliedCouponDiscount;
//     // if(totalAmount>100){
//     //    totalAmount -= appliedCouponDiscount;
//     // }

//     return totalAmount + shippingCost;
//   };

//   const contextValue = {
//     getTotalCartAmount,
//     productList,
//     cartItems,
//     wishListItems,
//     addToCart,
//     removeFromCart,
//     addToWishList,
//     removeFromWishList,
//     getTotalCartItems,
//     getTotalWishList,
//     applyCoupon
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;



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
          console.log(totalAmount);
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
