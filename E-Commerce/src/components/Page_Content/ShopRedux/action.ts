export const SET_PRICE_FILTER = 'SET_PRICE_FILTER';

export  const setPriceFilter = (minPrice:number, maxPrice:number) => ({
  type: SET_PRICE_FILTER,
  payload: { minPrice, maxPrice },
});
