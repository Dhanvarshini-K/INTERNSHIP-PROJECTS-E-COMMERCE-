const initialState = {
    minPrice: 0,
    maxPrice: 0,
  };
  
  export const priceFilterReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_PRICE_FILTER':
        return { ...state, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice };
      default:
        return state;
    }
  };