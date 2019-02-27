import { actionTypes } from "../constants";

const testReducer = (state = {}, action: { type: string, payload: any }) => {
  switch (action.type) {
    case actionTypes.TEST:
      console.log("Test Action ", action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};

export default testReducer;
