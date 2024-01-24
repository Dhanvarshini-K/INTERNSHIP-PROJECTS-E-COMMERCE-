// actions.ts

// Action Types
export const CHANGE_CART_LINK_STYLE: string = 'CHANGE_CART_LINK_STYLE';
export const SET_PRICE_FILTER: string = 'SET_PRICE_FILTER';

// Action Creators
export const changeCartLinkStyle = (newStyle: any) => ({
  type: CHANGE_CART_LINK_STYLE,
  payload: newStyle,
});

export const setPriceFilter = (minPrice: number, maxPrice: number) => ({
  type: SET_PRICE_FILTER,
  payload: { minPrice, maxPrice },
});
