// import { actionTypes } from "../constants";

// const testReducer = (state = {}, action: { type: string, payload: any }) => {
//   switch (action.type) {
//     case actionTypes.TEST:
//       console.log("Test Action ", action.payload);
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };

// export default testReducer;

import { actionTypes } from "../constants";

const productReducer = (
  state = { cartList: [] },
  // state = {},
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    // case "TEST":
    //     console.log("Test action ", action.payload);
    //     return [...state, action.payload]

    //Added data to home screen
    case actionTypes.ADD_PRODUCT_LIST:
      console.log("ADD_PRODUCT_LIST action ", action.payload);
      return Object.assign({}, state, { productList: action.payload.items });

    // case actionTypes.CREATE_ACCOUNT:
    //   console.log("User action ", action.payload);
    //   return Object.assign({}, state, { user: action.payload.items });

    //Added data to products details screen
    case actionTypes.PRODUCT_DETAILS:
      console.log("ProductDetails action... ", action.payload);
      const product = state.productList.find(
        (obj, index) => index === action.payload.items
      );
      return Object.assign({}, state, { productDetails: product });

    //Added data to cart by Rayhan Vaia
    // case actionTypes.ADD_PRODUCT_TO_CART:
    //   let cartList = state.cartList.length > 0 ? state.cartList : [];
    //   cartList.push(action.payload.items);
    //   console.log("Cart action......", cartList);
    //   return Object.assign({}, state, {
    //     cartList
    //   });

    //Added data to cart

    case actionTypes.ADD_PRODUCT_TO_CART:
      let cartList = [];
      console.log("Cart action......", cartList);
      return Object.assign({}, state, {
        cartList: [...state.cartList, action.payload.items].filter(
          (val, id, array) => array.indexOf(val) == id
        )
      });

    //Remove data from cart
    case actionTypes.REMOE_PRODUCT_FROM_CART:
      const cart = state.cartList.filter(
        item => item.id !== action.payload.items
      );
      return Object.assign({}, state, {
        cartList: cart
      });

    default:
      return state;
  }
};

export default productReducer;
