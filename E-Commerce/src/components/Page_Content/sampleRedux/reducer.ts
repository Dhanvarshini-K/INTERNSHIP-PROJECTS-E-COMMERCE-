// reducers.ts

interface CartLinkStyle {
    color: string;
    backgroundcolor: string;
  }
  
  interface CartState {
    cartLinkStyle: CartLinkStyle;
  }
  
  const initialCartState: CartState = {
    cartLinkStyle: {
      color: 'red',
      backgroundcolor: 'blue',
    },
  };
  
  export const cartReducer = (state: CartState = initialCartState, action: any) => {
    switch (action.type) {
      case 'CHANGE_CART_LINK_STYLE':
        return {
          ...state,
          cartLinkStyle: {
            color: action.payload.cartLinkStyle.color,
            backgroundcolor: action.payload.cartLinkStyle.backgroundcolor,
          },
        };
      default:
        return state;
    }
  };
  
  interface PriceFilterState {
    minPrice: number;
    maxPrice: number;
  }
  
  const initialPriceFilterState: PriceFilterState = {
    minPrice: 0,
    maxPrice: 0,
  };
  
  export const priceFilterReducer = (state: PriceFilterState = initialPriceFilterState, action: any) => {
    switch (action.type) {
      case 'SET_PRICE_FILTER':
        return { ...state, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice };
      default:
        return state;
    }
  };
  