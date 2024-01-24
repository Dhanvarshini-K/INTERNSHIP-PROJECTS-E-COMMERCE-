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


  // //cart header reducer -- > change navlink color
  // const cartHeaderInitialState = {
  //   cartLinkStyle: {
  //     color: "initial",
  //     borderColor: "initial",
  //   },
  // }

  // export const cartHeaderReducer = (state = cartHeaderInitialState, action:any)=>{
  //    switch (action.type) {
  //     case "CHANGE_CART_LINK_STYLE":
  //       return {
  //         ...state,
  //         cartLinkStyle: action.payload,
  //       };
     
  //     default:
  //       break;
  //    }
  // }