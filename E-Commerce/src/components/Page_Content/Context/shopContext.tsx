

import  { createContext, ReactNode } from 'react';
import { productList } from '../../Functionality_Data/all_product_card';

interface ShopContextValue {
  productList: any[]; // Replace 'any' with the actual type of your productList
}

export const ShopContext = createContext<ShopContextValue>({
  productList: [],
});
const ShopContextProvider = (props: { children: ReactNode }) => {
  const contextValue: ShopContextValue = { productList };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

